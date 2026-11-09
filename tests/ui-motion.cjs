const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
let playwright;
try {
  playwright = require("playwright");
} catch {
  playwright = require("C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright");
}
const BASE = process.env.PASARIN_TEST_URL || "http://127.0.0.1:4173/";
const OUT = path.resolve(__dirname, "../output/ui-refinement");
fs.mkdirSync(OUT, { recursive: true });
let browser, page;
const errors = [],
  checks = [],
  searchMetrics = [];
const adminRoutes = [
  "admin/index.html",
  "admin/kategori.html",
  "admin/verifikasi.html",
  "admin/verifikasi-detail.html?id=u-laras",
  "admin/laporan.html",
  "admin/laporan-detail.html?id=lap-001",
  "admin/toko.html",
  "admin/toko-detail.html?id=s-cafe",
  "admin/toko-edit.html?id=s-cafe",
  "admin/produk.html",
  "admin/produk-detail.html?id=p-001",
  "admin/produk-edit.html?id=p-001",
  "admin/pemilik.html",
];
const ownerRoutes = [
  "umkm/dashboard.html",
  "umkm/toko-saya.html",
  "umkm/profil-toko.html",
  "umkm/produk.html",
  "umkm/produk-form.html",
  "umkm/status.html",
  "umkm/buka-toko.html",
  "umkm/identitas.html",
];
async function step(name, fn) {
  console.log("CHECK " + name);
  await fn();
  checks.push(name);
}
async function ready(target = page) {
  await target.waitForFunction(
    () => window.Pasarin && !document.body.classList.contains("loading"),
  );
  await target.evaluate(() => document.fonts.ready);
  await target.waitForFunction(() => !document.activeViewTransition);
}
async function go(route = "") {
  await page.goto(BASE + route);
  await ready();
}
async function login(email) {
  await go("masuk.html");
  await page.locator('[name="login"]').fill(email);
  await page.locator('[name="password"]').fill("Demo12345");
  await Promise.all([
    page.waitForURL((url) => !url.pathname.endsWith("masuk.html")),
    page.locator('[data-form="login"] button[type="submit"]').click(),
  ]);
  await ready();
}
async function assertLayout(route, width) {
  await go(route);
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    ),
    false,
    `Overflow: ${width} ${route}`,
  );
  const buttons = await page
    .locator(".search-form > button:not(.visually-hidden)")
    .evaluateAll((elements) =>
      elements.map((button) => {
        const range = document.createRange();
        range.selectNodeContents(button);
        const rect = button.getBoundingClientRect(),
          parent = button.parentElement.getBoundingClientRect();
        return {
          label: button.textContent.trim(),
          width: rect.width,
          height: rect.height,
          lines: range.getClientRects().length,
          fits: rect.right <= parent.right && rect.bottom <= parent.bottom + 1,
        };
      }),
    );
  for (const metric of buttons) {
    assert.equal(metric.lines, 1, `Wrapped search label: ${width} ${route}`);
    assert.ok(
      metric.width >= 52 && metric.height >= 32 && metric.fits,
      `Search dimensions: ${width} ${route}`,
    );
    searchMetrics.push({ route, viewport: width, ...metric });
  }
}
async function screenshot(name) {
  await page.evaluate(() => {
    Array.from(document.images).forEach((image) => (image.loading = "eager"));
  });
  await page.waitForFunction(() =>
    Array.from(document.images).every((image) => image.complete),
  );
  await page.waitForTimeout(360);
  await page.screenshot({
    path: path.join(OUT, name + ".png"),
    fullPage: true,
  });
}
async function submitDialog(reason) {
  if (reason) await page.locator('#dialog-form [name="reason"]').fill(reason);
  await page.locator('button[form="dialog-form"]').click();
  await page.waitForFunction(
    () => !document.getElementById("app-modal").classList.contains("show"),
  );
  await page.waitForTimeout(240);
}
(async () => {
  browser = await playwright.chromium.launch({
    headless: true,
    executablePath:
      process.env.PASARIN_BROWSER ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  await context.addInitScript(() => {
    window.addEventListener("pagereveal", (event) => {
      window.__nativeTransition = Boolean(event.viewTransition);
      window.__loadingAtReveal = document.body?.classList.contains("loading");
    });
  });
  page = await context.newPage();
  page.setDefaultTimeout(12000);
  page.on("pageerror", (error) => errors.push(error.message));
  await go();
  await step("Cache validation and stable static assets", async () => {
    const result = await fetch(BASE + "assets/js/motion.js");
    const etag = result.headers.get("etag");
    assert.ok(etag);
    const unchanged = await fetch(BASE + "assets/js/motion.js", {
      headers: { "If-None-Match": etag },
    });
    assert.equal(unchanged.status, 304);
    const asset = await fetch(BASE + "assets/vendor/bootstrap.min.css");
    assert.match(asset.headers.get("cache-control"), /max-age=86400/);
  });
  await login("admin@pasarin.id");
  await step(
    "Search layout and admin typography at all breakpoints",
    async () => {
      for (const width of [360, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const route of adminRoutes) await assertLayout(route, width);
        await go("admin/kategori.html");
        await screenshot("admin-categories-" + width);
        const sizes = await page.evaluate(() => ({
          heading: parseFloat(
            getComputedStyle(document.querySelector("h1")).fontSize,
          ),
          body: parseFloat(
            getComputedStyle(document.querySelector(".app-table")).fontSize,
          ),
          search: parseFloat(
            getComputedStyle(document.querySelector("#admin-search")).fontSize,
          ),
        }));
        assert.ok(sizes.heading >= 24 && sizes.heading <= 28);
        assert.equal(sizes.body, 14);
        assert.equal(sizes.search, 14);
      }
    },
  );
  await step(
    "Native cross-document transition and back navigation",
    async () => {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await go("admin/index.html");
      await page
        .locator(
          '.workspace-nav a[href="kategori.html"], .workspace-nav a[href="../admin/kategori.html"]',
        )
        .click();
      await page.waitForURL(/admin\/kategori.html/);
      await ready();
      const native = await page.evaluate(() => ({
        active: window.__nativeTransition,
        skeleton: window.__loadingAtReveal,
      }));
      assert.equal(
        native.active,
        true,
        "Cross-document transition did not activate",
      );
      assert.equal(
        native.skeleton,
        false,
        "Transition captured the loading placeholder",
      );
      await page
        .locator(".workspace-nav a")
        .filter({ hasText: "Moderasi" })
        .click();
      await page.waitForURL(/admin\/laporan.html/);
      await ready();
      assert.equal(await page.evaluate(() => window.__nativeTransition), true);
      await page.goBack();
      await ready();
      assert.match(page.url(), /kategori.html/);
      assert.equal(
        await page.evaluate(() =>
          document.documentElement.classList.contains("is-navigating"),
        ),
        false,
      );
    },
  );
  await step(
    "Search navigation, modal validation and category CRUD",
    async () => {
      await go("admin/kategori.html");
      await page.locator("#admin-search").fill("Busana");
      await page.locator(".search-form > button").click();
      await page.waitForURL(/q=Busana/);
      await ready();
      assert.equal(await page.locator(".app-table tbody tr").count(), 1);
      await go("admin/kategori.html");
      await page.locator('[data-action="category-form"]').first().click();
      await page
        .locator('#dialog-form [name="name"]')
        .fill("Makanan & minuman");
      await page.locator('button[form="dialog-form"]').click();
      assert.match(
        await page.locator("#dialog-form .form-alert").innerText(),
        /sudah digunakan/,
      );
      await page
        .locator('#dialog-form [name="name"]')
        .fill("Kategori Audit Gerak");
      await submitDialog();
      const id = await page.evaluate(
        () =>
          Pasarin.snapshot().categories.find(
            (c) => c.name === "Kategori Audit Gerak",
          ).id,
      );
      await page
        .locator(`[data-action="delete-category"][data-id="${id}"]`)
        .click();
      await submitDialog();
      assert.equal(
        await page.evaluate(
          (id) => Pasarin.snapshot().categories.some((c) => c.id === id),
          id,
        ),
        false,
      );
    },
  );
  await step("Owner layouts, store switching and mobile menu", async () => {
    await login("umkm@pasarin.id");
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ownerRoutes) await assertLayout(route, width);
    }
    await go("umkm/dashboard.html");
    await page.locator("#active-store").selectOption("s-roastery");
    await page.waitForFunction(() =>
      document
        .querySelector("main")
        .textContent.includes("Dikala Senja Roastery"),
    );
    assert.match(await page.locator("main").innerText(), /Belum ada produk/);
    await page.locator("#active-store").selectOption("s-cafe");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator(".mobile-menu").click();
    await page.waitForSelector("#workspaceMenu.show");
    await page.locator("#workspaceMenu .btn-close").click();
    await page.waitForFunction(
      () =>
        !document.getElementById("workspaceMenu").classList.contains("show"),
    );
    await screenshot("owner-dashboard-mobile");
  });
  await step(
    "Public layouts, gallery race handling and feedback forms",
    async () => {
      for (const width of [360, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of [
          "",
          "produk.html?id=p-001",
          "toko.html?id=s-cafe",
          "masuk.html",
          "daftar.html",
          "bantuan.html",
        ])
          await assertLayout(route, width);
      }
      await go("produk.html?id=p-001");
      await page.locator(".gallery-thumb").nth(1).click();
      await page.locator(".gallery-thumb").nth(3).click();
      await page.waitForFunction(
        () =>
          !document.getElementById("gallery-main").hasAttribute("aria-busy"),
      );
      const gallery = await page.evaluate(() => ({
        main: document.getElementById("gallery-main").getAttribute("src"),
        selected: document.querySelectorAll(".gallery-thumb")[3].dataset.src,
      }));
      assert.equal(gallery.main, gallery.selected);
      await login("pembeli@pasarin.id");
      await go("produk.html?id=p-001");
      await page.locator('[data-action="review"]').first().click();
      await page.locator('#dialog-form [name="rating"][value="5"]').check();
      await page
        .locator('#dialog-form [name="comment"]')
        .fill(
          "Ulasan audit: interaksi tetap dapat dipakai setelah penyempurnaan animasi.",
        );
      await submitDialog();
      assert.match(
        await page.locator(".review-section").innerText(),
        /Ulasan audit/,
      );
      await go();
      await screenshot("catalog-desktop");
    },
  );
  await step(
    "Reduced motion disables page, card and gallery animations",
    async () => {
      const reduced = await browser.newContext({
        viewport: { width: 390, height: 844 },
        reducedMotion: "reduce",
      });
      const target = await reduced.newPage();
      target.on("pageerror", (error) => errors.push(error.message));
      await target.goto(BASE);
      await ready(target);
      assert.equal(await target.evaluate(() => PasarinMotion.reduced()), true);
      await Promise.all([
        target.waitForURL(/produk.html/),
        target.locator(".product-card a").first().click(),
      ]);
      await ready(target);
      const active = await target.evaluate(() => ({
        transition: Boolean(document.activeViewTransition),
        animations: document
          .getAnimations()
          .filter((a) => a.playState === "running").length,
      }));
      assert.equal(active.transition, false);
      assert.equal(active.animations, 0);
      await target.locator(".gallery-thumb").nth(1).click();
      await target.waitForFunction(
        () =>
          !document.getElementById("gallery-main").hasAttribute("aria-busy"),
      );
      assert.equal(
        await target.evaluate(
          () =>
            document.getAnimations().filter((a) => a.playState === "running")
              .length,
        ),
        0,
      );
      await reduced.close();
    },
  );
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    path.join(OUT, "audit-results.json"),
    JSON.stringify(
      {
        status: "passed",
        checks,
        searchMetrics,
        pageErrors: errors,
        viewports: [360, 390, 768, 1024, 1440],
        date: new Date().toISOString(),
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify({
      status: "passed",
      checks: checks.length,
      searchChecks: searchMetrics.length,
      pageErrors: errors.length,
    }),
  );
})()
  .catch(async (error) => {
    console.error(error);
    if (page) {
      console.error("URL " + page.url());
      await page
        .screenshot({ path: path.join(OUT, "failure.png"), fullPage: true })
        .catch(() => {});
    }
    process.exitCode = 1;
  })
  .finally(async () => {
    await browser?.close();
  });
