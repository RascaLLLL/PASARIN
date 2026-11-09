(function () {
  "use strict";
  const base = document.body.dataset.base || "";
  const e = (x) =>
    String(x ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const url = (path) => base + path;
  const media = (path) =>
    /^(data:|blob:)/.test(path || "")
      ? path
      : url(path || "assets/images/catalog-desktop-foto-produk.png");
  const A = (context, name, fallback = "") =>
    window.PASARIN_ASSETS?.[context]?.[name] || fallback;
  const icons = {
    eye: ["login_desktop", "imgIcon"],
    search: ["catalog_desktop", "imgSearch"],
    store: ["owner_dashboard_desktop", "imgStore"],
    chat: ["owner_dashboard_desktop", "imgChat"],
    dashboard: ["owner_dashboard_desktop", "imgCategories"],
    products: ["owner_dashboard_desktop", "imgShoppingBagOutlined"],
    shield: ["owner_dashboard_desktop", "imgShieldCheck"],
    logout: ["owner_dashboard_desktop", "imgLogOut"],
    chevron: ["owner_dashboard_desktop", "imgChevronDown"],
    check: ["owner_dashboard_desktop", "imgCircleCheck"],
    close: ["owner_dashboard_desktop", "imgX"],
    message: ["owner_dashboard_desktop", "imgMessageCircle"],
    profile: ["admin_dashboard_desktop", "imgProfile"],
    calendar: ["admin_dashboard_desktop", "imgCalendarDays"],
    package: ["admin_dashboard_desktop", "imgPackage"],
    badge: ["admin_dashboard_desktop", "imgBadgeCheck"],
    category: ["admin_dashboard_desktop", "imgShapes"],
  };
  function icon(name, extra = "") {
    const match = icons[name];
    const src = match && A(...match);
    return src
      ? `<span class="app-icon ${extra}" aria-hidden="true"><img src="${media(src)}" alt=""></span>`
      : "";
  }
  function logo() {
    return `<a class="brand" href="${url("index.html")}" aria-label="PASARIN, kembali ke katalog"><img class="brand-symbol" src="${media(A("catalog_desktop", "imgSimbolPasarin"))}" alt=""><img class="brand-wordmark" src="${media(A("catalog_desktop", "imgNamaPasarin"))}" alt="PASARIN"></a>`;
  }
  function btn(text, href, kind = "primary", extra = "") {
    return `<a class="btn btn-${kind}" href="${url(href)}" ${extra}>${text}</a>`;
  }
  function badge(text, kind = "neutral") {
    return `<span class="status-badge ${kind}">${e(text)}</span>`;
  }
  const verification = (u) =>
    u?.verification === "verified"
      ? badge("Identitas terverifikasi", "success")
      : u?.verification === "rejected"
        ? badge("Perlu perbaikan", "danger")
        : badge("Belum terverifikasi", "warning");
  function initials(name) {
    return (name || "Pengguna")
      .split(" ")
      .slice(0, 2)
      .map((x) => x[0])
      .join("")
      .toUpperCase();
  }
  function avatar(name, extra = "") {
    return `<span class="avatar ${extra}" aria-hidden="true">${e(initials(name))}</span>`;
  }
  const money = (x) => "Rp" + Number(x || 0).toLocaleString("id-ID");
  const date = (x) =>
    new Date(x).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  const category = (d, id) =>
    d.categories.find((c) => c.id === id)?.name || "Tanpa kategori";
  function storeLogo(store, extra = "") {
    return store?.logo
      ? `<img class="store-logo ${extra}" src="${media(store.logo)}" alt="Logo ${e(store.name)}">`
      : `<span class="store-logo ${extra}">${e(store?.initials || initials(store?.name))}</span>`;
  }
  function empty(title, description, action = "") {
    return `<div class="empty-state">${icon("package")}<h2>${e(title)}</h2><p>${e(description)}</p>${action}</div>`;
  }
  function notice(text, kind = "info", dismiss = false) {
    return `<div class="app-alert ${kind}" role="status">${icon(kind === "success" ? "check" : "shield")}<div>${text}</div>${dismiss ? '<button type="button" class="quiet-button ms-auto" data-action="dismiss" aria-label="Tutup pemberitahuan">×</button>' : ""}</div>`;
  }
  function field(label, name, value = "", options = {}) {
    const {
      type = "text",
      required = false,
      placeholder = "",
      help = "",
      attrs = "",
      area = false,
    } = options;
    const id = options.id || "field-" + name;
    return `<div class="field-group"><label class="form-label" for="${e(id)}">${e(label)}${required ? ' <span aria-hidden="true">*</span>' : ""}</label>${area ? `<textarea class="form-control" id="${e(id)}" name="${e(name)}" rows="4" ${required ? "required" : ""} ${attrs} placeholder="${e(placeholder)}">${e(value)}</textarea>` : `<div class="${type === "password" ? "password-field" : ""}"><input class="form-control" id="${e(id)}" name="${e(name)}" type="${type}" value="${e(value)}" ${required ? "required" : ""} placeholder="${e(placeholder)}" ${attrs}>${type === "password" ? `<button class="password-toggle" type="button" data-action="toggle-password" aria-controls="${e(id)}" aria-label="Tampilkan kata sandi">${icon("eye")}</button>` : ""}</div>`}<div class="invalid-feedback">${e(options.invalid || "Periksa kembali " + label.toLowerCase() + ".")}</div>${help ? `<div class="form-text">${help}</div>` : ""}</div>`;
  }
  function select(label, name, options, value = "", required = true) {
    const id = "field-" + name;
    return `<div class="field-group"><label class="form-label" for="${id}">${e(label)}${required ? " *" : ""}</label><select class="form-select" name="${name}" id="${id}" ${required ? "required" : ""}><option value="">Pilih ${e(label.toLowerCase())}</option>${options.map((x) => `<option value="${e(x.id)}" ${x.id === value ? "selected" : ""}>${e(x.name)}</option>`).join("")}</select><div class="invalid-feedback">Pilih ${e(label.toLowerCase())}.</div></div>`;
  }
  function pageHeader(title, description, action = "", back = "") {
    return `<div class="page-heading">${back ? `<a class="back-link" href="${url(back)}">← Kembali</a>` : ""}<div class="heading-row"><div><h1>${e(title)}</h1><p>${e(description)}</p></div>${action}</div></div>`;
  }
  function publicHeader(d, q = "") {
    const user = Pasarin.current();
    const mobileMenu = `<div class="public-mobile-nav dropdown"><button class="public-menu-button" data-bs-toggle="dropdown" aria-expanded="false"><span aria-hidden="true">☰</span> Menu</button><ul class="dropdown-menu dropdown-menu-end">${user ? `<li><span class="dropdown-item-text text-muted">${e(user.name)}</span></li><li><a class="dropdown-item" href="${url("akun.html")}">Akun saya</a></li>` : `<li><a class="dropdown-item" href="${url("masuk.html")}">Masuk</a></li><li><a class="dropdown-item" href="${url("daftar.html")}">Daftar akun</a></li>`}<li><a class="dropdown-item" href="${url(user?.role === "admin" ? "admin/index.html" : user?.role === "owner" ? "umkm/toko-saya.html" : "umkm/buka-toko.html")}">${user?.role === "admin" ? "Administrasi" : user?.role === "owner" ? "Toko saya" : "Buka toko"}</a></li><li><a class="dropdown-item" href="${url("bantuan.html")}">Pusat Bantuan</a></li>${user ? '<li><button class="dropdown-item text-danger" data-action="logout">Keluar</button></li>' : ""}</ul></div>`;
    return `<header class="public-header"><div class="public-header-main"><div class="header-brand">${logo()}</div><form class="search-form" data-form="search" role="search">${icon("search")}<label class="visually-hidden" for="global-search">Cari produk atau toko</label><input id="global-search" name="q" type="search" value="${e(q)}" placeholder="Cari produk lokal atau nama toko" autocomplete="off"><button class="visually-hidden" type="submit">Cari</button></form><div class="public-account">${user ? `<button class="icon-button" data-action="open-chat" aria-label="Buka pesan">${icon("chat")}</button><div class="dropdown"><button class="account-button" data-bs-toggle="dropdown" aria-expanded="false">${avatar(user.name)}<span class="account-name">${e(user.name.split(" ")[0])}</span>${icon("chevron")}</button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="${url("akun.html")}">Akun saya</a></li>${user.role === "admin" ? `<li><a class="dropdown-item" href="${url("admin/index.html")}">Administrasi</a></li>` : `<li><a class="dropdown-item" href="${url(user.role === "owner" ? "umkm/toko-saya.html" : "umkm/buka-toko.html")}">${user.role === "owner" ? "Toko saya" : "Buka toko"}</a></li>`}<li><a class="dropdown-item" href="${url("bantuan.html")}">Pusat Bantuan</a></li><li><hr class="dropdown-divider"></li><li><button class="dropdown-item text-danger" data-action="logout">Keluar</button></li></ul></div>` : `${btn("Masuk", "masuk.html", "outline-primary")}${btn("Daftar", "daftar.html")}`}</div></div>${mobileMenu}<nav class="category-nav" aria-label="Kategori produk"><a href="${url("index.html")}">Semua kategori</a>${d.categories.map((c) => `<a href="${url("index.html?category=" + encodeURIComponent(c.id))}">${e(c.name)}</a>`).join("")}</nav></header>`;
  }
  function footer() {
    return `<footer class="public-footer"><div><a class="footer-brand" href="${url("index.html")}">pasarin</a><span>Temukan lokal. Dukung usaha Indonesia.</span></div><nav aria-label="Tautan tambahan"><a href="${url("bantuan.html")}">Pusat Bantuan</a><a href="${url("umkm/buka-toko.html")}">Buka toko</a><button class="text-button" data-action="demo-guide">Panduan demo</button></nav><small>© 2026 PASARIN. Untuk usaha lokal Indonesia.</small></footer>`;
  }
  function publicShell(content, d, q = "") {
    return (
      publicHeader(d, q) +
      `<main id="main-content" class="public-main">${content}</main>` +
      footer()
    );
  }
  function workspace(content, d, admin = false) {
    const u = Pasarin.current(),
      store = Pasarin.selectedStore();
    const page = document.body.dataset.page;
    const nav = admin
      ? [
          ["admin-dashboard", "admin/index.html", "dashboard", "Ringkasan"],
          [
            "admin-verification",
            "admin/verifikasi.html",
            "profile",
            "Verifikasi UMKM",
          ],
          ["admin-categories", "admin/kategori.html", "category", "Kategori"],
          ["admin-reports", "admin/laporan.html", "shield", "Moderasi"],
          ["admin-stores", "admin/toko.html", "store", "Kelola Toko"],
          ["admin-products", "admin/produk.html", "products", "Kelola Produk"],
          ["admin-owners", "admin/pemilik.html", "shield", "Akun Pemilik"],
        ]
      : [
          ["owner-dashboard", "umkm/dashboard.html", "dashboard", "Dashboard"],
          ["owner-products", "umkm/produk.html", "products", "Produk Saya"],
          ["owner-profile", "umkm/profil-toko.html", "store", "Profil Toko"],
          ["owner-status", "umkm/status.html", "shield", "Status UMKM"],
          ["owner-stores", "umkm/toko-saya.html", "store", "Toko Saya"],
        ];
    const active =
      nav.find(
        (n) => page === n[0] || page.startsWith(n[0].replace(/s$/, "")),
      ) || nav[0];
    return `<div class="workspace"><aside class="workspace-sidebar offcanvas-lg offcanvas-start" tabindex="-1" id="workspaceMenu" aria-label="Navigasi ${admin ? "admin" : "UMKM"}"><div class="sidebar-brand">${logo()}<button class="btn-close d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#workspaceMenu" aria-label="Tutup menu"></button></div><div class="sidebar-body"><div class="sidebar-label">RUANG KERJA ${admin ? "ADMIN" : "UMKM"}</div>${
      !admin && store
        ? `<div class="sidebar-store">${storeLogo(store)}<div><strong>${e(store.name)}</strong><span>${e(store.city)}</span></div></div><label class="visually-hidden" for="active-store">Toko yang dikelola</label><select class="form-select store-switcher" id="active-store" data-action="select-store">${Pasarin.ownStores()
            .map(
              (s) =>
                `<option value="${s.id}" ${s.id === store.id ? "selected" : ""}>${e(s.name)}</option>`,
            )
            .join("")}</select>`
        : ""
    }<nav class="workspace-nav">${nav.map((n) => `<a class="${page === n[0] || (n[0] === "owner-products" && page === "owner-product-form") || (n[0] === "admin-verification" && page === "admin-verification-detail") || (n[0] === "admin-reports" && page === "admin-report-detail") || (n[0] === "admin-stores" && page.startsWith("admin-store-")) || (n[0] === "admin-products" && page.startsWith("admin-product-")) ? "active" : ""}" href="${url(n[1])}">${icon(n[2])}<span>${n[3]}</span></a>`).join("")}</nav><div class="sidebar-bottom">${!admin && store ? btn("Lihat Toko ↗", "toko.html?id=" + store.id, "outline-primary", 'target="_blank" rel="noopener"') : ""}<button class="sidebar-logout" data-action="logout">${icon("logout")}<span>Keluar${admin ? "" : " / Logout"}</span></button><div class="sidebar-help"><strong>${admin ? "Jaga kepercayaan." : "Butuh bantuan?"}</strong><p>${admin ? "Tinjau dengan adil. Dukung usaha lokal." : "Kami siap membantu usaha Anda berkembang."}</p><a href="${url("bantuan.html")}">${admin ? "Panduan verifikasi" : "Pusat Bantuan"} ↗</a></div><small>© 2026 PASARIN</small></div></div></aside><div class="workspace-body"><header class="workspace-header"><div class="d-lg-none">${logo()}</div><div class="workspace-breadcrumb">${admin ? "Administrasi" : "Pusat UMKM"} / <strong>${e(active[3])}</strong></div><div class="workspace-header-actions"><button class="icon-button desktop-chat" data-action="open-chat" aria-label="Buka pesan">${icon("chat")}</button><div class="dropdown desktop-account"><button class="account-button" data-bs-toggle="dropdown" aria-expanded="false">${avatar(u.name)}<span>${e(admin ? "Admin platform" : u.name)}</span>${icon("chevron")}</button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="${url("akun.html")}">Akun saya</a></li><li><a class="dropdown-item" href="${url("index.html")}">Katalog publik</a></li><li><button class="dropdown-item" data-action="demo-guide">Panduan demo</button></li><li><button class="dropdown-item text-danger" data-action="logout">Keluar</button></li></ul></div><button class="mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#workspaceMenu" aria-controls="workspaceMenu"><span class="menu-lines" aria-hidden="true">☰</span> Menu</button></div></header><main id="main-content" class="workspace-main">${content}<footer class="workspace-footer">© 2026 PASARIN · Mendukung usaha lokal Indonesia. <button class="text-button" data-action="demo-guide">Panduan demo</button></footer></main></div></div>`;
  }
  function toast(message, kind = "success") {
    const root = document.getElementById("toast-region");
    const node = document.createElement("div");
    node.className =
      "toast app-toast align-items-center border-0 " +
      (kind === "danger" ? "toast-error" : "");
    node.setAttribute("role", "status");
    node.innerHTML = `<div class="d-flex"><div class="toast-body">${e(message)}</div><button type="button" class="btn-close me-3 m-auto" data-bs-dismiss="toast" aria-label="Tutup"></button></div>`;
    root.append(node);
    const t = new bootstrap.Toast(node, { delay: 4200 });
    node.addEventListener("hidden.bs.toast", () => node.remove());
    t.show();
  }
  let dialogCallback = null;
  function modal(title, body, footer = "") {
    document.getElementById("app-modal-title").textContent = title;
    document.getElementById("app-modal-body").innerHTML = body;
    document.getElementById("app-modal-footer").innerHTML = footer;
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("app-modal"),
    ).show();
  }
  function formModal(title, body, submit, callback, kind = "primary") {
    dialogCallback = callback;
    modal(
      title,
      `<form id="dialog-form" data-form="dialog" novalidate><div class="form-alert" aria-live="polite"></div>${body}</form>`,
      `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-${kind}" form="dialog-form">${e(submit)}</button>`,
    );
  }
  function confirm(
    title,
    description,
    callback,
    { reason = false, kind = "danger", submit = "Konfirmasi" } = {},
  ) {
    formModal(
      title,
      `<p class="mb-3">${e(description)}</p>${reason ? field("Alasan", "reason", "", { required: true, area: true, attrs: 'minlength="5" maxlength="500"', help: "Jelaskan alasan tindakan minimal 5 karakter." }) : ""}`,
      submit,
      callback,
      kind,
    );
  }
  function formError(form, message) {
    const el = form.querySelector(".form-alert");
    if (el) {
      el.innerHTML = `<div class="alert alert-danger" role="alert">${e(message)}</div>`;
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else toast(message, "danger");
  }
  function closeModal() {
    bootstrap.Modal.getInstance(document.getElementById("app-modal"))?.hide();
  }
  async function dialogSubmit(fd, form) {
    await dialogCallback?.(fd, form);
    closeModal();
  }
  function productCard(p, d, context = "catalog") {
    const store = d.stores.find((s) => s.id === p.storeId);
    const n = /^p-\d{3}$/.test(p.id) ? Number(p.id.slice(2)) - 1 : -1;
    const original = A("catalog_desktop", "imgFotoProduk" + (n || ""));
    const seeded =
      n >= 0 &&
      (p.images[0] === original ||
        (n === 0 &&
          p.images[0] === A("product_desktop", "imgFotoUtamaArabicaGayo")));
    const variants = {
      store: {
        "p-001": "imgFotoProduk",
        "p-004": "imgFotoProduk1",
        "p-008": "imgFotoProduk2",
        "p-016": "imgFotoProduk3",
      },
      related: {
        "p-004": "imgFotoProduk",
        "p-008": "imgFotoProduk1",
        "p-016": "imgFotoProduk2",
      },
    };
    const sourceContext =
      context === "related"
        ? "product_desktop"
        : context === "store"
          ? "store_desktop"
          : "catalog_desktop";
    const source =
      seeded && variants[context]?.[p.id]
        ? A(sourceContext, variants[context][p.id], p.images[0])
        : p.images[0];
    const crop = seeded ? "photo-" + context + "-" + p.id : "";
    return `<article class="product-card"><a class="product-picture ${crop}" href="${url("produk.html?id=" + p.id)}" aria-label="Lihat ${e(p.name)}"><img src="${media(source)}" alt="${e(p.name)}" loading="lazy"></a><div class="product-card-body"><h3><a href="${url("produk.html?id=" + p.id)}">${e(p.name)}</a></h3><p>${e(p.type || category(d, p.categoryId))} · ${e(p.city || store?.city)}</p><strong class="product-price">${money(p.price)}</strong><a class="btn btn-outline-primary btn-sm w-100" href="${url("produk.html?id=" + p.id)}">Lihat detail</a></div></article>`;
  }
  function statsCard(label, value, description, ic = "products", kind = "") {
    return `<div class="stat-card"><div><span>${e(label)}</span>${icon(ic)}</div><strong>${e(value)}</strong><small class="${kind}">${e(description)}</small></div>`;
  }
  function waLink(store, product) {
    return (
      "https://wa.me/" +
      store.phone.replace(/\D/g, "") +
      "?text=" +
      encodeURIComponent(
        product
          ? `Halo ${store.name}, saya tertarik dengan produk ${product.name} (${money(product.price)}) di PASARIN. Apakah masih tersedia?`
          : `Halo ${store.name}, saya menemukan toko Anda di PASARIN dan ingin bertanya mengenai produk.`,
      )
    );
  }
  function safeNext(value) {
    return value &&
      /^[a-zA-Z0-9][\w/-]*\.html(?:\?[^\s<>]*)?(?:#[\w-]+)?$/.test(value) &&
      !value.includes("..")
      ? value
      : "";
  }
  function requireLogin(next, { replace = false } = {}) {
    const root = new URL(base || "./", location.href).pathname;
    const currentPath =
      location.pathname.slice(root.length) + location.search + location.hash;
    const destination = url(
      "masuk.html?next=" +
        encodeURIComponent(next || currentPath || "index.html"),
    );
    if (replace) location.replace(destination);
    else location.href = destination;
  }
  async function imageFile(file, max = 2 * 1024 * 1024) {
    if (!file || !file.size) return null;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type))
      throw new Error("Gunakan gambar JPG, PNG, atau WebP.");
    if (file.size > max)
      throw new Error(
        "Ukuran gambar maksimal " + Math.round(max / 1024 / 1024) + " MB.",
      );
    const raw = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error("Gambar tidak dapat dibaca."));
      r.readAsDataURL(file);
    });
    const img = await new Promise((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error("Berkas gambar tidak valid."));
      i.src = raw;
    });
    const scale = Math.min(1, 1200 / img.width, 1200 / img.height);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/webp", 0.82);
  }
  async function documentFile(file) {
    if (!file || !file.size) return null;
    if (file.type.startsWith("image/"))
      return {
        name: file.name,
        data: await imageFile(file),
        type: "image/webp",
      };
    if (file.type !== "application/pdf" || file.size > 1024 * 1024)
      throw new Error(
        "Dokumen harus JPG/PNG/WebP maksimal 2 MB atau PDF maksimal 1 MB.",
      );
    const data = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(file);
    });
    return { name: file.name, data, type: "application/pdf" };
  }
  window.UI = {
    base,
    e,
    url,
    media,
    A,
    icon,
    logo,
    btn,
    badge,
    verification,
    initials,
    avatar,
    money,
    date,
    category,
    storeLogo,
    empty,
    notice,
    field,
    select,
    pageHeader,
    publicShell,
    workspace,
    footer,
    toast,
    modal,
    formModal,
    confirm,
    formError,
    closeModal,
    dialogSubmit,
    productCard,
    statsCard,
    waLink,
    safeNext,
    requireLogin,
    imageFile,
    documentFile,
  };
  window.Views = {};
  window.Forms = { dialog: dialogSubmit };
  window.Actions = {};
})();
