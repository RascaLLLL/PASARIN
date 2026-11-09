const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
let pw;
try {
  pw = require("playwright");
} catch {
  pw = require("C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright");
}
const BASE = process.env.PASARIN_TEST_URL || "http://127.0.0.1:4173/";
const OUT = path.resolve(__dirname, "../output/functional-qa");
fs.mkdirSync(OUT, { recursive: true });
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
const fixture = {
  name: "gambar-contoh.png",
  mimeType: "image/png",
  buffer: Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aKXcAAAAASUVORK5CYII=",
    "base64",
  ),
};
const results = [];
let browser;
async function ready(p) {
  await p.waitForFunction(
    () => window.Pasarin && !document.body.classList.contains("loading"),
  );
}
async function go(p, route = "") {
  await p.goto(BASE + route);
  await ready(p);
}
async function login(p, email, password = "Demo12345") {
  await go(p, "masuk.html");
  await p.locator('[name="login"]').fill(email);
  await p.locator('[name="password"]').fill(password);
  await Promise.all([
    p.waitForURL((u) => !u.pathname.endsWith("masuk.html")),
    p.locator('[data-form="login"] button[type="submit"]').click(),
  ]);
  await ready(p);
}
async function rawClick(p, locator) {
  await locator.scrollIntoViewIfNeeded();
  const r = await locator.boundingBox();
  assert.ok(r, "Control is not visible");
  const state = await locator.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const hit = document.elementFromPoint(
      r.x + r.width / 2,
      r.y + r.height / 2,
    );
    return {
      hittable: !!hit && (el === hit || el.contains(hit)),
      transitionActive: Boolean(document.activeViewTransition),
    };
  });
  assert.equal(
    state.hittable,
    true,
    "The visible control is blocked by another layer",
  );
  await p.mouse.click(r.x + r.width / 2, r.y + r.height / 2);
  return state;
}
async function submit(p, name) {
  await p.locator(`[data-form="${name}"] button[type="submit"]`).click();
}
async function dialog(p, reason) {
  if (reason) await p.locator('#dialog-form [name="reason"]').fill(reason);
  await p.locator('button[form="dialog-form"]').click();
  await p.waitForFunction(
    () => !document.getElementById("app-modal").classList.contains("show"),
  );
  await p.waitForTimeout(230);
}
async function cancelDialog(p) {
  await p.locator('#app-modal .modal-footer [data-bs-dismiss="modal"]').click();
  await p.waitForFunction(
    () => !document.getElementById("app-modal").classList.contains("show"),
  );
}
async function logout(p, kind = "sidebar") {
  let control;
  if (kind === "sidebar") {
    if (await p.locator(".mobile-menu").isVisible()) {
      await p.locator(".mobile-menu").click();
      await p.waitForSelector("#workspaceMenu.show");
    }
    control = p.locator(".sidebar-logout");
  } else if (kind === "header") {
    await p.locator(".desktop-account .account-button").click();
    control = p.locator('.desktop-account [data-action="logout"]');
  } else if (kind === "public-mobile") {
    await p.locator(".public-menu-button").click();
    control = p.locator('.public-mobile-nav [data-action="logout"]');
  } else if (kind === "public") {
    await p.locator(".public-account .account-button").click();
    control = p.locator('.public-account [data-action="logout"]');
  } else control = p.locator('main [data-action="logout"]');
  const clickState = await rawClick(p, control);
  await p.waitForURL((u) => u.pathname.endsWith("/index.html"));
  await ready(p);
  assert.equal(
    await p.evaluate(() => localStorage.getItem("pasarin.session.v2")),
    null,
  );
  assert.equal(await p.evaluate(() => Pasarin.current()), null);
  assert.equal(await p.locator(".workspace").count(), 0);
  return clickState;
}
async function testcase(
  id,
  title,
  fn,
  viewport = { width: 1440, height: 900 },
) {
  if (
    only &&
    !id.includes(only) &&
    !title.toLowerCase().includes(only.toLowerCase())
  )
    return;
  console.log(`RUN ${id} ${title}`);
  const ctx = await browser.newContext({ viewport });
  const p = await ctx.newPage();
  p.setDefaultTimeout(9000);
  const errors = [];
  ctx.on("page", (page) => page.on("pageerror", (e) => errors.push(e.message)));
  p.on("pageerror", (e) => errors.push(e.message));
  const started = Date.now();
  try {
    await fn(p, ctx);
    assert.deepEqual(errors, [], "Unhandled browser errors");
    results.push({
      id,
      title,
      status: "passed",
      elapsedMs: Date.now() - started,
    });
    console.log(`PASS ${id}`);
  } catch (e) {
    const screenshot = `${id}-failure.png`;
    await p
      .screenshot({ path: path.join(OUT, screenshot), fullPage: true })
      .catch(() => {});
    results.push({
      id,
      title,
      status: "failed",
      error: e.message,
      url: p.url(),
      pageErrors: errors,
      screenshot,
    });
    console.log(`FAIL ${id}: ${e.message}`);
  } finally {
    await ctx.close();
  }
}
async function newBuyer(p, username = "qa_owner") {
  await go(p, "daftar.html");
  await p.locator('[name="username"]').fill(username);
  await p.locator('[name="email"]').fill(username + "@example.test");
  await p.locator('[name="password"]').fill("Demo12345");
  await p.locator('[name="confirm"]').fill("Demo12345");
  await submit(p, "register");
  await p.waitForURL("**/index.html");
  await ready(p);
}
async function identity(p) {
  await go(p, "umkm/buka-toko.html");
  await p.locator('[name="name"]').fill("Pemilik Pengujian");
  await p.locator('[name="ktp"]').setInputFiles(fixture);
  await p.locator('[name="consent"]').check();
  await submit(p, "identity");
  await p.waitForURL("**/umkm/buka-toko.html");
  await p.waitForSelector('[data-form="store"]');
}
async function store(p, name) {
  await p.locator('[name="name"]').fill(name);
  await p.locator('[name="categoryId"]').selectOption("c-food");
  await p
    .locator('textarea[name="description"]')
    .fill("Produk usaha lokal yang dipakai untuk pengujian fungsi.");
  await p.locator('[name="address"]').fill("Jalan Contoh Nomor 8");
  await p.locator('[name="city"]').fill("Bandung");
  await p.locator('[name="phone"]').fill("081234567890");
  await p.locator('[name="rules"]').check();
  await submit(p, "store");
  await p.waitForURL(/umkm\/dashboard.html/);
  await ready(p);
  return p.evaluate(() => Pasarin.selectedStore().id);
}
async function productFields(p, name) {
  await p.locator('[name="name"]').fill(name);
  await p.locator('[name="price"]').fill("23000");
  await p
    .locator('textarea[name="description"]')
    .fill("Deskripsi produk pengujian yang lengkap dan sesuai informasi.");
  await p.locator('[name="images"]').setInputFiles(fixture);
  await p.locator('[name="rules"]').check();
}

(async () => {
  browser = await pw.chromium.launch({
    headless: true,
    executablePath:
      process.env.PASARIN_BROWSER ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  await testcase(
    "AUTH-01",
    "Admin logout: one physical click while page transition is active",
    async (p) => {
      const clicks = [];
      for (let attempt = 0; attempt < 3; attempt++) {
        await login(p, "admin@pasarin.id");
        clicks.push(await logout(p));
        await go(p, "admin/kategori.html");
        await p.waitForURL(/masuk.html\?next=/);
        assert.equal(await p.locator(".workspace").count(), 0);
      }
      assert.ok(
        clicks.some((click) => click.transitionActive),
        "Test must exercise logout during an active native transition",
      );
      console.log(
        "AUTH-01 physical click observations " + JSON.stringify(clicks),
      );
    },
  );
  await testcase("AUTH-02", "Logout from every admin page", async (p) => {
    const routes = [
      "index.html",
      "kategori.html",
      "verifikasi.html",
      "verifikasi-detail.html?id=u-laras",
      "laporan.html",
      "laporan-detail.html?id=lap-001",
      "toko.html",
      "toko-detail.html?id=s-cafe",
      "toko-edit.html?id=s-cafe",
      "produk.html",
      "produk-detail.html?id=p-001",
      "produk-edit.html?id=p-001",
      "pemilik.html",
    ];
    for (const route of routes) {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/" + route);
      await logout(p);
    }
  });
  await testcase(
    "AUTH-03",
    "Admin account-dropdown logout and history does not restore access",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/kategori.html");
      await logout(p, "header");
      await p.goBack();
      await p.waitForTimeout(350);
      assert.equal(await p.locator(".workspace").count(), 0);
      assert.equal(await p.evaluate(() => Pasarin.current()), null);
    },
  );
  await testcase(
    "AUTH-04",
    "Mobile admin logout and offcanvas cleanup",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await logout(p);
      assert.equal(
        await p.locator(".offcanvas-backdrop,.modal-backdrop").count(),
        0,
      );
      assert.notEqual(
        await p.locator("body").evaluate((e) => getComputedStyle(e).overflow),
        "hidden",
      );
    },
    { width: 390, height: 844 },
  );
  await testcase(
    "AUTH-05",
    "Owner sidebar and public-header logout",
    async (p) => {
      await login(p, "umkm@pasarin.id");
      await logout(p);
      await login(p, "umkm@pasarin.id");
      await go(p);
      await logout(p, "public");
    },
  );
  await testcase(
    "AUTH-06",
    "Buyer desktop and mobile menu logout",
    async (p) => {
      await login(p, "pembeli@pasarin.id");
      await logout(p, "public");
      await p.setViewportSize({ width: 390, height: 844 });
      await login(p, "pembeli@pasarin.id");
      await logout(p, "public-mobile");
    },
  );
  await testcase("AUTH-07", "Blocked account can still logout", async (p) => {
    await login(p, "diblokir@pasarin.id");
    assert.match(p.url(), /status-akun.html/);
    await logout(p, "blocked");
  });
  await testcase(
    "AUTH-08",
    "Logout in another tab revokes a dirty private form",
    async (p, ctx) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/toko-edit.html?id=s-cafe");
      await p.locator('[name="name"]').fill("Nama yang belum disimpan");
      const other = await ctx.newPage();
      other.setDefaultTimeout(9000);
      await go(other, "admin/index.html");
      await logout(other);
      await p.waitForURL(/masuk.html\?next=/);
      assert.equal(await p.locator(".workspace").count(), 0);
      assert.equal(await p.evaluate(() => Pasarin.current()), null);
      assert.equal(
        await p.evaluate(() => {
          try {
            Pasarin.saveCategory("Tidak boleh", "");
            return false;
          } catch {
            return true;
          }
        }),
        true,
      );
    },
  );
  await testcase(
    "AUTH-09",
    "Wrong login rejected and buyer cannot open administration",
    async (p) => {
      await go(p, "masuk.html");
      await p.locator('[name="login"]').fill("admin@pasarin.id");
      await p.locator('[name="password"]').fill("salah123");
      await submit(p, "login");
      assert.match(await p.locator(".form-alert").innerText(), /tidak sesuai/);
      assert.equal(await p.evaluate(() => Pasarin.current()), null);
      await login(p, "pembeli@pasarin.id");
      await go(p, "admin/index.html");
      assert.match(await p.locator("main").innerText(), /Akses khusus admin/);
      assert.equal(await p.locator(".workspace").count(), 0);
    },
  );
  await testcase(
    "UI-01",
    "Main action remains clickable immediately during navigation",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await p
        .locator(".workspace-nav a")
        .filter({ hasText: "Kategori" })
        .click();
      await p.waitForURL("**/admin/kategori.html");
      await p.waitForSelector('[data-action="category-form"]');
      await rawClick(p, p.locator('[data-action="category-form"]').first());
      await p.waitForSelector("#app-modal.show");
      assert.equal(await p.locator('#dialog-form [name="name"]').count(), 1);
    },
  );
  await testcase(
    "ACCOUNT-01",
    "Registration validation, persistence and account update",
    async (p) => {
      await go(p, "daftar.html");
      await p.locator('[name="username"]').fill("pengguna_qa");
      await p.locator('[name="email"]').fill("pengguna_qa@example.test");
      await p.locator('[name="password"]').fill("Demo12345");
      await p.locator('[name="confirm"]').fill("Beda12345");
      await submit(p, "register");
      assert.match(await p.locator(".form-alert").innerText(), /Konfirmasi/);
      await p.locator('[name="confirm"]').fill("Demo12345");
      await submit(p, "register");
      await p.waitForURL("**/index.html");
      await go(p, "akun.html");
      await p.locator('[name="name"]').fill("Pengguna QA Baru");
      await submit(p, "account");
      await p.waitForFunction(() =>
        document
          .querySelector(".seller-identity")
          .textContent.includes("Pengguna QA Baru"),
      );
      await p.reload();
      await ready(p);
      assert.equal(
        await p.locator('[name="name"]').inputValue(),
        "Pengguna QA Baru",
      );
      await go(p);
      await logout(p, "public");
      await login(p, "pengguna_qa@example.test");
      assert.equal(
        await p.evaluate(() => Pasarin.current().name),
        "Pengguna QA Baru",
      );
    },
  );
  await testcase(
    "ACCOUNT-02",
    "Google and Facebook simulated UI flow can login and logout",
    async (p) => {
      for (const provider of ["Google", "Facebook"]) {
        await go(p, "masuk.html");
        await p
          .locator(`[data-action="social"][data-provider="${provider}"]`)
          .click();
        await dialog(p);
        await p.waitForURL("**/index.html");
        await ready(p);
        assert.equal(await p.evaluate(() => Pasarin.current().id), "u-buyer");
        await logout(p, "public");
      }
    },
  );
  await testcase(
    "ACCOUNT-03",
    "Password reset link is single-use and new password works",
    async (p) => {
      await go(p, "lupa-sandi.html");
      await p.locator('[name="email"]').fill("pembeli@pasarin.id");
      await submit(p, "forgot");
      await p.getByRole("link", { name: "Buka tautan pemulihan" }).click();
      await p.waitForSelector('[data-form="reset-password"]');
      const tokenURL = p.url();
      await p.locator('[name="password"]').fill("Baru12345");
      await p.locator('[name="confirm"]').fill("Baru12345");
      await submit(p, "reset-password");
      assert.match(await p.locator("main h1").innerText(), /diperbarui/);
      await p.goto(tokenURL);
      await ready(p);
      assert.match(
        await p.locator("main h1").innerText(),
        /Tautan tidak tersedia/,
      );
      await login(p, "pembeli@pasarin.id", "Baru12345");
      await logout(p, "public");
    },
  );
  await testcase(
    "CATALOG-01",
    "Guest search, combined category filters, empty result and WhatsApp",
    async (p) => {
      await go(p);
      assert.equal(await p.locator(".product-card").count(), 16);
      await go(p, "index.html?category=c-food");
      await p.locator("#global-search").fill("Arabica");
      await p.locator("#global-search").press("Enter");
      await p.waitForURL(/q=Arabica/);
      await ready(p);
      assert.match(p.url(), /category=c-food/);
      assert.equal(await p.locator(".product-card").count(), 1);
      await p.locator(".product-picture").click();
      await p.waitForURL(/produk.html/);
      await ready(p);
      const wa = await p
        .getByRole("link", { name: "Hubungi melalui WhatsApp", exact: true })
        .getAttribute("href");
      assert.match(wa, /wa.me\/6281234567890/);
      assert.match(decodeURIComponent(wa), /Arabica Gayo/);
      await go(p, "index.html?q=tidak-ada-xyz");
      assert.equal(await p.locator(".product-card").count(), 0);
      assert.match(await p.locator("main").innerText(), /belum ditemukan/);
    },
  );
  await testcase(
    "REVIEW-01",
    "Review requires login, creates once, edits and rejects self-review",
    async (p) => {
      await go(p, "produk.html?id=p-001");
      await p.locator('[data-action="review"]').first().click();
      await p.waitForURL(/masuk.html\?next=/);
      await p.locator('[name="login"]').fill("pembeli@pasarin.id");
      await p.locator('[name="password"]').fill("Demo12345");
      await submit(p, "login");
      await p.waitForURL(/produk.html/);
      await ready(p);
      await p.locator('[data-action="review"]').first().click();
      await p.locator('#dialog-form [name="rating"][value="5"]').check();
      await p
        .locator('#dialog-form [name="comment"]')
        .fill(
          "Ulasan QA pertama yang lengkap. <img src=x onerror=window.qaxss=1>",
        );
      await dialog(p);
      assert.equal(await p.evaluate(() => window.qaxss || false), false);
      await p.locator('[data-action="review"]').first().click();
      await p
        .locator('#dialog-form [name="comment"]')
        .fill("Ulasan QA sudah diperbarui melalui form.");
      await dialog(p);
      assert.equal(
        await p.evaluate(
          () =>
            Pasarin.snapshot().reviews.filter(
              (r) => r.userId === "u-buyer" && r.targetId === "p-001",
            ).length,
        ),
        1,
      );
      await login(p, "umkm@pasarin.id");
      await go(p, "produk.html?id=p-001");
      assert.equal(await p.locator('[data-action="review"]').count(), 0);
      assert.match(await p.locator("main").innerText(), /Toko milik Anda/);
    },
  );
  await testcase(
    "OWNER-01",
    "KTP required, NIB optional, two stores publish before approval",
    async (p) => {
      await newBuyer(p);
      await go(p, "umkm/buka-toko.html");
      await submit(p, "identity");
      assert.equal(
        await p
          .locator('[data-form="identity"]')
          .evaluate((f) => f.checkValidity()),
        false,
      );
      assert.equal(await p.evaluate(() => Pasarin.current().role), "buyer");
      await identity(p);
      const first = await store(p, "Toko QA Satu");
      assert.equal(
        await p.evaluate(() => Pasarin.current().verification),
        "pending",
      );
      assert.equal(await p.evaluate(() => Pasarin.current().nib), null);
      await go(p, "toko.html?id=" + first);
      assert.match(await p.locator("h1").innerText(), /Toko QA Satu/);
      assert.equal(
        await p
          .locator("main")
          .innerText()
          .then((t) => t.includes("KTP")),
        false,
      );
      await go(p, "umkm/buka-toko.html");
      assert.equal(await p.locator('[name="ktp"]').count(), 0);
      const second = await store(p, "Toko QA Dua");
      assert.notEqual(first, second);
      assert.equal(await p.locator("#active-store option").count(), 2);
    },
  );
  await testcase(
    "OWNER-02",
    "Invalid identity upload is rejected without changing role",
    async (p) => {
      await newBuyer(p, "qa_upload");
      await go(p, "umkm/buka-toko.html");
      await p
        .locator('[name="ktp"]')
        .setInputFiles({
          name: "tidak-valid.svg",
          mimeType: "image/svg+xml",
          buffer: Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>'),
        });
      await p.locator('[name="consent"]').check();
      await submit(p, "identity");
      assert.match(await p.locator(".form-alert").innerText(), /JPG|PNG|WebP/);
      assert.equal(await p.evaluate(() => Pasarin.current().role), "buyer");
    },
  );
  await testcase(
    "OWNER-03",
    "Store switching and another owners product stays protected",
    async (p) => {
      await login(p, "umkm@pasarin.id");
      await p.locator("#active-store").selectOption("s-roastery");
      await p.waitForFunction(() =>
        document
          .querySelector("main")
          .textContent.includes("Dikala Senja Roastery"),
      );
      assert.match(await p.locator("main").innerText(), /Belum ada produk/);
      await p.reload();
      await ready(p);
      assert.equal(await p.locator("#active-store").inputValue(), "s-roastery");
      await go(p, "umkm/produk-form.html?id=p-006");
      assert.equal(await p.locator('[data-form="product"]').count(), 0);
      assert.match(await p.locator("main").innerText(), /tidak ditemukan/);
    },
  );
  await testcase(
    "PRODUCT-01",
    "Create draft, publish, edit, cancel delete and delete product",
    async (p) => {
      await login(p, "umkm@pasarin.id");
      await go(p, "umkm/produk-form.html");
      await productFields(p, "Produk QA Fungsional");
      await p.locator('[name="active"]').uncheck();
      await submit(p, "product");
      await p.waitForURL(/umkm\/produk.html/);
      await ready(p);
      const id = await p.evaluate(
        () =>
          Pasarin.snapshot().products.find(
            (x) => x.name === "Produk QA Fungsional",
          ).id,
      );
      await go(p, "index.html?q=Produk%20QA%20Fungsional");
      assert.equal(await p.locator(".product-card").count(), 0);
      await go(p, "umkm/produk-form.html?id=" + id);
      await p.locator('[name="active"]').check();
      await p.locator('[name="price"]').fill("27000");
      await p.locator('[name="rules"]').check();
      await submit(p, "product");
      await p.waitForURL(/umkm\/produk.html/);
      await go(p, "index.html?q=Produk%20QA%20Fungsional");
      assert.equal(await p.locator(".product-card").count(), 1);
      assert.match(await p.locator(".product-price").innerText(), /27.000/);
      await go(p, "umkm/produk.html");
      await p
        .locator(`[data-action="delete-product"][data-id="${id}"]`)
        .click();
      await cancelDialog(p);
      assert.equal(
        await p
          .locator(`[data-action="delete-product"][data-id="${id}"]`)
          .count(),
        1,
      );
      await p
        .locator(`[data-action="delete-product"][data-id="${id}"]`)
        .click();
      await dialog(p);
      await go(p, "produk.html?id=" + id);
      assert.match(
        await p.locator("main").innerText(),
        /Produk tidak tersedia/,
      );
    },
  );
  await testcase(
    "PRODUCT-02",
    "More than five photos and invalid prices cannot be saved",
    async (p) => {
      await login(p, "umkm@pasarin.id");
      await go(p, "umkm/produk-form.html");
      await productFields(p, "Produk QA Validasi");
      await p.locator('[name="price"]').fill("0");
      await submit(p, "product");
      assert.equal(
        await p
          .locator('[data-form="product"]')
          .evaluate((f) => f.checkValidity()),
        false,
      );
      await p.locator('[name="price"]').fill("10000");
      await p
        .locator('[name="images"]')
        .setInputFiles(
          Array.from({ length: 6 }, (_, i) => ({
            ...fixture,
            name: "foto-" + i + ".png",
          })),
        );
      await submit(p, "product");
      assert.match(await p.locator(".form-alert").innerText(), /Maksimal 5/);
      assert.equal(
        await p.evaluate(() =>
          Pasarin.snapshot().products.some(
            (x) => x.name === "Produk QA Validasi",
          ),
        ),
        false,
      );
    },
  );
  await testcase(
    "ADMIN-01",
    "Category create/edit/cancel/duplicate/delete/in-use validation",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/kategori.html");
      const initial = await p.locator("tbody tr").count();
      await p.locator('[data-action="category-form"]').first().click();
      await p.locator('#dialog-form [name="name"]').fill("Dibatalkan");
      await cancelDialog(p);
      assert.equal(await p.locator("tbody tr").count(), initial);
      await p.locator('[data-action="category-form"]').first().click();
      await p.locator('#dialog-form [name="name"]').fill("Busana");
      await p.locator('button[form="dialog-form"]').click();
      assert.match(
        await p.locator("#dialog-form .form-alert").innerText(),
        /sudah digunakan/,
      );
      await p.locator('#dialog-form [name="name"]').fill("Kategori QA");
      await dialog(p);
      const id = await p.evaluate(
        () =>
          Pasarin.snapshot().categories.find((c) => c.name === "Kategori QA")
            .id,
      );
      await p.locator(`[data-action="category-form"][data-id="${id}"]`).click();
      await p.locator('#dialog-form [name="name"]').fill("Kategori QA Edit");
      await dialog(p);
      assert.match(await p.locator("main").innerText(), /Kategori QA Edit/);
      await p
        .locator(`[data-action="delete-category"][data-id="${id}"]`)
        .click();
      await dialog(p);
      assert.equal(await p.locator("tbody tr").count(), initial);
      await p
        .locator('[data-action="delete-category"][data-id="c-food"]')
        .click();
      await p.locator('button[form="dialog-form"]').click();
      assert.match(
        await p.locator("#dialog-form .form-alert").innerText(),
        /masih digunakan/,
      );
    },
  );
  await testcase(
    "ADMIN-02",
    "Admin phone edits produce valid WhatsApp country code",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/toko-edit.html?id=s-cafe");
      await p.locator('[name="phone"]').fill("081299998888");
      await submit(p, "admin-store");
      await p.waitForURL(/admin\/toko-detail.html/);
      await go(p, "toko.html?id=s-cafe");
      assert.match(
        await p
          .getByRole("link", { name: "Hubungi melalui WhatsApp", exact: true })
          .getAttribute("href"),
        /wa.me\/6281299998888\?/,
      );
    },
  );
  await testcase(
    "ADMIN-03",
    "Hidden products show true store status; restore follows store state",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/toko-detail.html?id=s-cafe");
      await p.locator('[data-action="toggle-content"]').click();
      await dialog(p, "Toko nonaktif untuk pemeriksaan QA.");
      await go(p, "admin/produk.html?status=hidden");
      assert.equal(await p.locator("tbody tr").count(), 4);
      assert.equal(
        await p
          .locator("tbody .status-badge")
          .allTextContents()
          .then((a) => a.every((x) => x === "Toko nonaktif")),
        true,
      );
      await go(p, "produk.html?id=p-001");
      assert.match(
        await p.locator("main").innerText(),
        /Produk tidak tersedia/,
      );
      await go(p, "admin/toko-detail.html?id=s-cafe");
      await p.locator('[data-action="toggle-content"]').click();
      await dialog(p, "Toko selesai diperiksa dan diaktifkan.");
      await go(p, "produk.html?id=p-001");
      assert.match(await p.locator("h1").innerText(), /Arabica/);
    },
  );
  await testcase(
    "VERIFY-01",
    "Reject identity, reapply, approve; publication remains independent",
    async (p) => {
      await login(p, "admin@pasarin.id");
      await go(p, "admin/verifikasi-detail.html?id=u-laras");
      await p
        .locator('[data-action="verify-owner"][data-status="rejected"]')
        .click();
      await p.locator('button[form="dialog-form"]').click();
      assert.equal(
        await p.locator("#dialog-form").evaluate((f) => f.checkValidity()),
        false,
      );
      await dialog(p, "Mohon perbaiki nama identitas pada dokumen contoh.");
      await login(p, "laras@pasarin.id");
      await go(p, "umkm/status.html");
      assert.match(await p.locator("main").innerText(), /Mohon perbaiki/);
      await go(p, "toko.html?id=s-laras");
      assert.match(await p.locator("h1").innerText(), /Laras Batik/);
      await go(p, "umkm/identitas.html");
      await p.locator('[name="consent"]').check();
      await submit(p, "identity");
      await p.waitForURL(/umkm\/status.html/);
      await ready(p);
      assert.equal(
        await p.evaluate(() => Pasarin.current().verification),
        "pending",
      );
      await login(p, "admin@pasarin.id");
      await go(p, "admin/verifikasi-detail.html?id=u-laras");
      await p
        .locator('[data-action="verify-owner"][data-status="verified"]')
        .click();
      await dialog(p);
      await go(p, "toko.html?id=s-laras");
      assert.match(
        await p.locator("main").innerText(),
        /Identitas terverifikasi/,
      );
    },
  );
  await testcase(
    "MODERATION-01",
    "Report duplicates, required reasons, hide and restore product",
    async (p) => {
      await login(p, "pembeli@pasarin.id");
      await go(p, "produk.html?id=p-004");
      async function report() {
        await p.locator('[data-action="report"][data-type="product"]').click();
        await p
          .locator('#dialog-form [name="reason"]')
          .selectOption("Informasi tidak sesuai");
        await p
          .locator('#dialog-form [name="description"]')
          .fill("Laporan QA untuk menguji pemeriksaan produk.");
      }
      await report();
      await dialog(p);
      const id = await p.evaluate(
        () => Pasarin.snapshot().reports.find((r) => r.targetId === "p-004").id,
      );
      await report();
      await p.locator('button[form="dialog-form"]').click();
      assert.match(
        await p.locator("#dialog-form .form-alert").innerText(),
        /sedang diperiksa/,
      );
      await cancelDialog(p);
      await login(p, "admin@pasarin.id");
      await go(p, "admin/laporan-detail.html?id=" + id);
      await p
        .locator('[data-action="moderate"][data-decision="hidden"]')
        .click();
      await p.locator('button[form="dialog-form"]').click();
      assert.equal(
        await p.locator("#dialog-form").evaluate((f) => f.checkValidity()),
        false,
      );
      await dialog(p, "Konten disembunyikan dalam pemeriksaan QA.");
      await go(p, "produk.html?id=p-004");
      assert.match(
        await p.locator("main").innerText(),
        /Produk tidak tersedia/,
      );
      await go(p, "admin/laporan-detail.html?id=" + id);
      await p.locator('[data-action="moderate"][data-decision="kept"]').click();
      await dialog(p, "Konten telah diperiksa dan dapat ditampilkan.");
      await go(p, "produk.html?id=p-004");
      assert.match(await p.locator("h1").innerText(), /Pure Matcha/);
    },
  );
  await testcase(
    "BLOCK-01",
    "Account changes revoke dirty forms; blocking hides all stores and prevents owner access",
    async (p, ctx) => {
      await login(p, "umkm@pasarin.id");
      await go(p, "umkm/profil-toko.html");
      await p.locator('[name="name"]').fill("Perubahan belum disimpan");
      const admin = await ctx.newPage();
      admin.setDefaultTimeout(9000);
      await login(admin, "admin@pasarin.id");
      // This local demo has one shared login per browser origin. Role changes must revoke the old form.
      await p.waitForURL(/admin\/index.html/);
      assert.equal(await p.locator('[data-form="store"]').count(), 0);
      await go(admin, "admin/pemilik.html");
      await admin
        .locator('[data-action="block-owner"][data-id="u-sari"]')
        .click();
      await dialog(admin, "Pemilik diblokir untuk pemeriksaan lintas toko.");
      for (const id of ["s-cafe", "s-roastery"]) {
        await go(admin, "toko.html?id=" + id);
        assert.match(
          await admin.locator("main").innerText(),
          /Toko tidak tersedia/,
        );
      }
      await go(admin, "admin/produk.html?status=hidden");
      assert.equal(
        await admin
          .locator("tbody .status-badge")
          .allTextContents()
          .then((values) =>
            values.every((value) => value === "Pemilik diblokir"),
          ),
        true,
      );
      await login(p, "umkm@pasarin.id");
      assert.match(p.url(), /status-akun.html/);
      assert.equal(await p.locator('[data-form="store"]').count(), 0);
      await logout(p, "blocked");
      await login(admin, "admin@pasarin.id");
      await go(admin, "admin/pemilik.html");
      await admin
        .locator('[data-action="block-owner"][data-id="u-sari"]')
        .click();
      await dialog(admin, "Pemeriksaan selesai dan akun dapat dipakai.");
      await go(admin, "toko.html?id=s-cafe");
      assert.match(await admin.locator("h1").innerText(), /Dikala Senja/);
      await login(p, "umkm@pasarin.id");
      assert.match(p.url(), /umkm\/dashboard.html/);
    },
  );
  await testcase(
    "HELP-01",
    "FAQ and chat send/reopen preserve the conversation",
    async (p) => {
      await go(p, "bantuan.html");
      await p.locator(".accordion-button").nth(3).click();
      await p.waitForSelector("#faq-3.show");
      assert.match(await p.locator("#faq-3").innerText(), /menambahkan toko/);
      await p.locator('[data-action="open-chat"]').first().click();
      await p.locator("#chat-input").fill("Apakah KTP wajib?");
      await p.locator('[data-form="chat"] button[type="submit"]').click();
      await p.waitForFunction(() =>
        document
          .getElementById("chat-messages")
          .textContent.includes("KTP wajib dan NIB opsional"),
      );
      await p
        .locator('#app-modal .modal-footer [data-bs-dismiss="modal"]')
        .click();
      await p.locator('[data-action="open-chat"]').first().click();
      assert.match(
        await p.locator("#chat-messages").innerText(),
        /Apakah KTP wajib/,
      );
    },
  );
  const failed = results.filter((r) => r.status === "failed");
  const report = {
    status: failed.length ? "failed" : "passed",
    browser: browser.version(),
    cases: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    scope:
      "Local frontend UI, sessions and business flows; no real Laravel/OAuth/email backend.",
    results,
    date: new Date().toISOString(),
  };
  fs.writeFileSync(
    path.join(
      OUT,
      only
        ? "focused-" + only.replace(/[^a-zA-Z0-9_-]/g, "_") + ".json"
        : "results.json",
    ),
    JSON.stringify(report, null, 2),
  );
  console.log(
    JSON.stringify({
      status: report.status,
      cases: report.cases,
      passed: report.passed,
      failed: report.failed,
    }),
  );
  if (failed.length) process.exitCode = 1;
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await browser?.close();
  });
