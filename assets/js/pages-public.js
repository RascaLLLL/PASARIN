(function () {
  "use strict";
  const {
    e,
    url,
    media,
    A,
    icon,
    btn,
    badge,
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
    productCard,
    waLink,
  } = UI;
  const q = () => new URLSearchParams(location.search);
  const currentTarget = () =>
    document.body.dataset.page === "product"
      ? { type: "product", id: q().get("id") }
      : { type: "store", id: q().get("id") };
  function reviewSection(type, id, d) {
    const user = Pasarin.current();
    const reviews = d.reviews.filter(
      (r) => r.targetType === type && r.targetId === id && !r.hidden,
    );
    const average = reviews.length
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : "0";
    const own = reviews.find((r) => r.userId === user?.id);
    const store = Pasarin.targetStore(type, id);
    const isOwner = store?.ownerId === user?.id;
    return `<section class="review-section" id="ulasan"><div class="section-heading-row"><h2>Rating dan ulasan</h2>${isOwner ? badge("Toko milik Anda", "blue") : `<button class="btn btn-outline-primary" data-action="review" data-type="${type}" data-id="${id}">${own ? "Ubah ulasan" : "Tulis ulasan"}</button>`}</div><div class="rating-summary"><strong>${average}</strong><span class="stars" aria-label="${average} dari 5 bintang">★★★★★</span><span>${reviews.length} ulasan pengguna</span></div>${
      reviews.length
        ? `<div class="review-list">${reviews
            .slice(0, 6)
            .map(
              (r) =>
                `<article class="review-card"><header>${UI.avatar(r.author)}<div><strong>${e(r.author)}</strong><small>${date(r.createdAt)}</small></div></header><span class="stars" aria-label="${r.rating} dari 5 bintang">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span><p>${e(r.comment)}</p><footer><small class="text-muted">Ulasan pengguna</small>${user?.id === r.userId ? `<button class="text-button" data-action="review" data-type="${type}" data-id="${id}">Edit</button>` : `<button class="text-button report-link" data-action="report" data-type="review" data-id="${r.id}">Laporkan</button>`}</footer></article>`,
            )
            .join(
              "",
            )}</div>${reviews.length > 6 ? `<button class="btn btn-outline-secondary mt-3" data-action="all-reviews" data-type="${type}" data-id="${id}">Lihat ${reviews.length} ulasan</button>` : ""}`
        : empty(
            "Belum ada ulasan",
            "Jadilah yang pertama berbagi pengalaman tentang usaha lokal ini.",
          )
    }</section>`;
  }
  Views.catalog = (d) => {
    const query = (q().get("q") || "").trim(),
      categoryId = q().get("category") || "";
    const active = d.categories.find((c) => c.id === categoryId);
    const all = d.products.filter(Pasarin.visibleProduct);
    const products = all.filter(
      (p) =>
        (!active || p.categoryId === active.id) &&
        (!query ||
          (
            p.name +
            " " +
            p.type +
            " " +
            d.stores.find((s) => s.id === p.storeId)?.name
          )
            .toLocaleLowerCase("id")
            .includes(query.toLocaleLowerCase("id"))),
    );
    const searching = !!query || !!active;
    const hero = !searching
      ? `<section class="catalog-hero"><div class="hero-copy"><div class="hero-eyebrow">PILIHAN LOKAL, KEBAHAGIAAN SEHARI-HARI</div><h1><span class="desktop-copy">Produk bermakna, lebih dekat dari rumah.</span><span class="mobile-copy">Produk lokal,<br>lebih dekat.</span></h1><p><span class="desktop-copy">Temukan produk pilihan dari pelaku usaha Indonesia. Usaha kecil, sepenuh hati.</span><span class="mobile-copy">Usaha kecil, sepenuh hati.</span></p><a class="btn btn-primary" href="#produk">Jelajahi produk →</a></div><div class="hero-picture"><img src="${media(A("catalog_desktop", "imgKoleksiProdukLokal"))}" alt="Koleksi kerajinan, tas, dan produk lokal Indonesia"></div></section><div class="shopping-notes"><span>${icon("store")}Dukung usaha lokal</span><span>${icon("chat")}Pesan melalui WhatsApp toko</span></div>`
      : "";
    return publicShell(
      `<div class="catalog-stack">${hero}<section class="catalog-intro" id="produk"><h${searching ? "1" : "2"}>${query ? "Hasil pencarian “" + e(query) + "”" : active ? e(active.name) : "Temukan favorit lokalmu"}</h${searching ? "1" : "2"}><p>${searching ? "Temukan pilihan produk dari pelaku usaha lokal." : "Jelajahi tanpa masuk. Hubungi penjual langsung untuk bertransaksi."}</p></section><nav class="category-pills" aria-label="Filter kategori"><a class="category-pill ${!active ? "active" : ""}" href="${url("index.html" + (query ? "?q=" + encodeURIComponent(query) : ""))}">Semua produk</a>${d.categories.map((c) => `<a class="category-pill ${c.id === active?.id ? "active" : ""}" href="${url("index.html?category=" + c.id + (query ? "&q=" + encodeURIComponent(query) : ""))}">${e(c.name)}</a>`).join("")}</nav>${searching ? `<div class="catalog-results-line"><span>${products.length} produk ditemukan</span><a href="${url("index.html")}">Reset pencarian & filter</a></div>` : ""}${products.length ? `<section class="product-grid" aria-label="Daftar produk">${products.map((p) => productCard(p, d)).join("")}</section>` : empty("Produk belum ditemukan", "Coba kata kunci lain atau ubah kategori untuk menemukan produk lokal pilihan.", btn("Lihat semua produk", "index.html", "outline-primary"))}</div>`,
      d,
      query,
    );
  };
  Views.product = (d) => {
    const product = d.products.find((p) => p.id === q().get("id"));
    const user = Pasarin.current();
    const preview =
      q().get("preview") === "1" &&
      product &&
      (user?.role === "admin" ||
        d.stores.find((s) => s.id === product.storeId)?.ownerId === user?.id) &&
      !user.blocked;
    if (!product || (!Pasarin.visibleProduct(product) && !preview))
      return publicShell(
        empty(
          "Produk tidak tersedia",
          "Produk mungkin sudah dihapus, disembunyikan, atau tokonya sedang tidak aktif.",
          btn("Kembali ke katalog", "index.html"),
        ),
        d,
      );
    const store = d.stores.find((s) => s.id === product.storeId),
      owner = d.users.find((u) => u.id === store.ownerId);
    const related = d.products
      .filter(
        (p) =>
          p.storeId === store.id &&
          p.id !== product.id &&
          Pasarin.visibleProduct(p),
      )
      .slice(0, 3);
    return publicShell(
      `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${url("index.html")}">Katalog</a><span>/</span><a href="${url("index.html?category=" + product.categoryId)}">${e(category(d, product.categoryId))}</a><span>/</span><span>${e(product.name)}</span></nav>${preview ? notice("<strong>Pratinjau produk</strong>Anda melihat produk dari ruang pengelolaan. Status publik mengikuti pengaturan toko dan produk.", "warning") : ""}<section class="detail-layout"><div class="product-gallery"><img class="gallery-main" id="gallery-main" src="${media(product.images[0])}" alt="${e(product.name)}"><div class="gallery-thumbnails" aria-label="Pilihan foto produk">${product.images.map((image, i) => `<button type="button" class="gallery-thumb ${i === 0 ? "active" : ""}" data-action="gallery" data-src="${e(image)}" data-index="${i}" data-total="${product.images.length}" aria-label="Tampilkan foto ${i + 1}" aria-pressed="${i === 0}"><img src="${media(image)}" alt="${e(product.name)}, foto ${i + 1}"></button>`).join("")}</div><p class="gallery-caption" id="gallery-caption">Foto utama · 1 dari ${product.images.length} foto</p></div><div class="detail-info"><a class="category-pill" href="${url("index.html?category=" + product.categoryId)}">${e(category(d, product.categoryId))}</a><h1>${e(product.name)}</h1><strong class="detail-price">${money(product.price)}</strong><div class="detail-description"><h2>Tentang produk</h2><p>${e(product.description)}</p></div><div class="seller-panel"><div class="seller-identity">${storeLogo(store)}<div><strong>${e(store.name)}</strong><p>${e(owner.name)} · ${e(store.city)}</p></div></div><a class="btn btn-outline-primary w-100" href="${url("toko.html?id=" + store.id + (preview ? "&preview=1" : ""))}">Lihat Toko</a></div><a class="btn btn-primary w-100" href="${waLink(store, product)}" target="_blank" rel="noopener noreferrer">Hubungi melalui WhatsApp</a><p class="contact-note">+${e(store.phone)} · Tanyakan ketersediaan dan pemesanan langsung kepada toko. Tidak perlu masuk.</p><button class="text-button report-link" data-action="report" data-type="product" data-id="${product.id}">Laporkan produk ini</button></div></section>${related.length ? `<section class="section-block"><h2>Lainnya dari ${e(store.name)}</h2><div class="product-grid">${related.map((p) => productCard(p, d, "related")).join("")}</div></section>` : ""}${reviewSection("product", product.id, d)}`,
      d,
    );
  };
  Views.store = (d) => {
    const store = d.stores.find((s) => s.id === q().get("id"));
    const user = Pasarin.current();
    const preview =
      q().get("preview") === "1" &&
      store &&
      (user?.role === "admin" || store.ownerId === user?.id) &&
      !user.blocked;
    if (!store || (!Pasarin.visibleStore(store) && !preview))
      return publicShell(
        empty(
          "Toko tidak tersedia",
          "Toko sedang tidak aktif atau belum dapat ditampilkan.",
          btn("Jelajahi katalog", "index.html"),
        ),
        d,
      );
    const owner = d.users.find((u) => u.id === store.ownerId);
    const products = d.products.filter(
      (p) => p.storeId === store.id && Pasarin.visibleProduct(p),
    );
    return publicShell(
      `<nav class="breadcrumbs"><a href="${url("index.html")}">Katalog</a><span>/</span><span>${e(store.name)}</span></nav>${preview ? notice("<strong>Pratinjau toko</strong>Status tayang toko tetap mengikuti pengaturan dan moderasi.", "warning") : ""}<section class="store-profile"><div class="store-banner ${store.banner ? "" : "store-banner-fallback"}">${store.banner ? `<img src="${media(store.banner)}" alt="Banner ${e(store.name)}">` : ""}</div><div class="store-profile-body"><div class="store-profile-heading">${storeLogo(store, "lg")}<div><h1>${e(store.name)}</h1><p>${e(category(d, store.categoryId))}</p><div class="mt-2">${UI.verification(owner)}</div></div></div><div class="store-profile-description"><div><p><strong>Racikan penuh rasa dari tangan lokal.</strong></p><p>${e(store.description)}</p><small class="text-muted">Pemilik: ${e(owner.name)}</small></div><div class="store-contact"><h2>${e(store.city)}</h2><p>WhatsApp: +${e(store.phone)}</p><a class="btn btn-primary w-100" href="${waLink(store)}" target="_blank" rel="noopener noreferrer">Hubungi melalui WhatsApp</a><p class="mt-3">Pemesanan dan transaksi langsung dengan toko.</p><button class="text-button report-link" data-action="report" data-type="store" data-id="${store.id}">Laporkan toko ini</button></div></div></div></section><section class="section-block"><h2>Produk dari toko ini</h2><p class="text-muted mb-4">${products.length} produk ditampilkan</p>${products.length ? `<div class="product-grid">${products.map((p) => productCard(p, d, "store")).join("")}</div>` : empty("Toko belum memiliki produk", "Produk akan tampil di sini setelah pemilik menambahkannya.")}</section>${reviewSection("store", store.id, d)}`,
      d,
    );
  };
  function authShell(title, description, content) {
    const context =
      document.body.dataset.page === "register"
        ? "signup_desktop"
        : "login_desktop";
    return `<div class="auth-shell"><aside class="auth-identity" aria-label="Tentang PASARIN"><h1>PASARIN</h1><div class="auth-logo-tile"><img src="${media(A(context, "imgLogoPasarin", A("login_desktop", "imgLogoPasarin")))}" alt="Lambang PASARIN"></div><p>Lebih dekat dengan produk dan usaha lokal Indonesia.</p>${[
      ["shirt", "imgKemejaLokal"],
      ["sugar", "imgGulaKelapa"],
      ["snack", "imgCamilanLokal"],
      ["drink", "imgMinumanLokal"],
    ]
      .map(
        ([slot, key]) =>
          `<div class="auth-cutout auth-${slot}"><img src="${media(A(context, key, A("login_desktop", key)))}" alt=""></div>`,
      )
      .join(
        "",
      )}</aside><main id="main-content" class="auth-content"><div class="auth-mobile-logo">${UI.logo()}</div><a class="back-link" href="${url("index.html")}">← Katalog</a><div class="auth-form-wrap"><h1>${e(title)}</h1><p class="auth-description">${e(description)}</p>${content}<p class="auth-copyright">© 2026 PASARIN</p></div></main></div>`;
  }
  const socialButtons = () =>
    `<div class="auth-divider">atau masuk dengan</div><div class="social-buttons"><button class="btn btn-outline-primary" data-action="social" data-provider="Facebook">Facebook</button><button class="btn btn-outline-primary" data-action="social" data-provider="Google">Google</button></div>`;
  const nextSuffix = () =>
    UI.safeNext(q().get("next"))
      ? "?next=" + encodeURIComponent(q().get("next"))
      : "";
  Views.login = () =>
    authShell(
      "Selamat datang kembali",
      "Masuk ke akun PASARIN Anda.",
      `<form data-form="login" novalidate><div class="form-alert" aria-live="polite"></div>${field("Nama pengguna atau email", "login", "", { required: true, placeholder: "Masukkan nama pengguna atau email", attrs: 'autocomplete="username"' })}${field("Kata sandi", "password", "", { required: true, type: "password", placeholder: "Masukkan kata sandi", attrs: 'autocomplete="current-password"' })}<a class="auth-forgot" href="${url("lupa-sandi.html")}">Lupa kata sandi?</a><button class="btn btn-primary w-100" type="submit">Masuk</button></form>${socialButtons()}<p class="auth-bottom">Belum punya akun? <a href="${url("daftar.html" + nextSuffix())}">Daftar</a></p><p class="auth-explore">Hanya ingin menjelajah? Anda bisa melihat produk dan menghubungi toko tanpa masuk.</p><details class="demo-accounts"><summary>Coba dengan akun demo</summary><div class="demo-account-list">${[
        ["buyer", "Pembeli", "pembeli@pasarin.id"],
        ["owner", "Pemilik UMKM", "umkm@pasarin.id"],
        ["admin", "Admin", "admin@pasarin.id"],
      ]
        .map(
          ([role, title, email]) =>
            `<button type="button" data-action="fill-demo" data-email="${email}"><strong>${title}</strong><small>${email}</small></button>`,
        )
        .join(
          "",
        )}</div><p class="form-text mt-2">Kata sandi semua akun contoh: <strong>Demo12345</strong></p></details>`,
    );
  Views.register = () =>
    authShell(
      "Buat akun PASARIN",
      "Satu akun untuk menemukan produk lokal, berbagi ulasan, dan membuka toko.",
      `<form data-form="register" novalidate><div class="form-alert" aria-live="polite"></div>${field("Nama pengguna", "username", "", { required: true, placeholder: "Masukkan nama pengguna", attrs: 'autocomplete="username" minlength="3" maxlength="30" pattern="[a-zA-Z0-9_.]{3,30}"', help: "Gunakan 3–30 huruf, angka, titik, atau garis bawah." })}${field("Email", "email", "", { required: true, type: "email", placeholder: "nama@contoh.id", attrs: 'autocomplete="email"' })}${field("Kata sandi", "password", "", { required: true, type: "password", placeholder: "Buat kata sandi", attrs: 'minlength="8" autocomplete="new-password"', help: "Gunakan minimal 8 karakter." })}${field("Konfirmasi kata sandi", "confirm", "", { required: true, type: "password", placeholder: "Ulangi kata sandi", attrs: 'minlength="8" autocomplete="new-password"' })}<button class="btn btn-primary w-100" type="submit">Daftar</button></form>${socialButtons()}<p class="auth-bottom">Sudah punya akun? <a href="${url("masuk.html" + nextSuffix())}">Masuk</a></p><p class="auth-explore">Anda tetap dapat menjelajahi katalog tanpa membuat akun. Demo lokal: gunakan data contoh.</p>`,
    );
  Views.forgot = () =>
    authShell(
      "Lupa kata sandi?",
      "Masukkan email akun Anda untuk menerima tautan pemulihan.",
      `<form data-form="forgot" novalidate><div class="form-alert" aria-live="polite"></div>${field("Email", "email", "", { required: true, type: "email", placeholder: "nama@contoh.id", attrs: 'autocomplete="email"' })}<button class="btn btn-primary w-100" type="submit">Kirim tautan pemulihan</button></form><p class="auth-bottom"><a href="${url("masuk.html")}">← Kembali ke halaman masuk</a></p>`,
    );
  Views.reset = () =>
    Pasarin.validRecovery(q().get("token"))
      ? authShell(
          "Atur ulang kata sandi",
          "Gunakan kata sandi baru untuk akun PASARIN Anda.",
          `<form data-form="reset-password" novalidate><div class="form-alert" aria-live="polite"></div>${field("Kata sandi baru", "password", "", { required: true, type: "password", attrs: 'minlength="8" autocomplete="new-password"', help: "Minimal 8 karakter." })}${field("Konfirmasi kata sandi", "confirm", "", { required: true, type: "password", attrs: 'minlength="8" autocomplete="new-password"' })}<button class="btn btn-primary w-100" type="submit">Simpan kata sandi</button></form>`,
        )
      : authShell(
          "Tautan tidak tersedia",
          "Tautan pemulihan tidak valid, sudah dipakai, atau kedaluwarsa.",
          btn("Minta tautan baru", "lupa-sandi.html"),
        );
  Views.account = (d) => {
    const u = Pasarin.current();
    return publicShell(
      `<div class="account-page">${pageHeader("Akun saya", "Kelola informasi akun yang Anda gunakan di PASARIN.")}<div class="panel border"><div class="seller-identity">${UI.avatar(u.name, "lg")}<div><strong>${e(u.name)}</strong><span class="text-muted">${e(u.email)}</span></div></div><form data-form="account" novalidate><div class="form-alert" aria-live="polite"></div>${field("Nama lengkap", "name", u.name, { required: true, attrs: 'minlength="2" maxlength="80"' })}${field("Email", "email", u.email, { required: true, type: "email" })}<h2 class="form-section-title">Ubah kata sandi</h2><p class="panel-caption">Kosongkan jika tidak ingin mengubah kata sandi.</p>${field("Kata sandi saat ini", "currentPassword", "", { type: "password", attrs: 'autocomplete="current-password"' })}${field("Kata sandi baru", "password", "", { type: "password", attrs: 'minlength="8" autocomplete="new-password"' })}${field("Konfirmasi kata sandi baru", "confirm", "", { type: "password", attrs: 'minlength="8" autocomplete="new-password"' })}<div class="form-actions"><button class="btn btn-primary" type="submit">Simpan perubahan</button></div></form></div>${u.role !== "admin" ? `<div class="panel border mt-4"><h2>${u.role === "owner" ? "Usaha Anda" : "Mulai usaha Anda"}</h2><p class="text-muted">${u.role === "owner" ? "Kelola semua toko Anda dari satu akun." : "Punya produk lokal? Buka toko pertama Anda di PASARIN."}</p>${btn(u.role === "owner" ? "Kelola toko" : "Buka toko", u.role === "owner" ? "umkm/toko-saya.html" : "umkm/buka-toko.html")}</div>` : ""}</div>`,
      d,
    );
  };
  const faqs = [
    [
      "Apakah saya harus masuk untuk melihat produk?",
      "Tidak. Anda dapat menjelajahi katalog, mencari produk, melihat toko, dan menghubungi penjual lewat WhatsApp tanpa masuk. Akun dibutuhkan untuk memberi ulasan, mengirim laporan, atau membuka toko.",
    ],
    [
      "Bagaimana cara memesan produk?",
      "Buka detail produk lalu pilih “Hubungi melalui WhatsApp”. Ketersediaan, pembayaran, pengiriman, dan kesepakatan transaksi dibicarakan langsung dengan toko.",
    ],
    [
      "Bagaimana cara membuka toko?",
      "Daftar atau masuk, lalu pilih “Buka Toko”. Lengkapi identitas pemilik dengan KTP wajib dan NIB opsional. Setelah data toko lengkap, toko dapat langsung tampil.",
    ],
    [
      "Apakah satu akun boleh memiliki beberapa toko?",
      "Boleh. Identitas pemilik cukup diajukan sekali per akun. Gunakan menu Toko Saya untuk menambahkan toko dan memilih toko yang ingin dikelola.",
    ],
    [
      "Haruskah menunggu verifikasi sebelum toko tayang?",
      "Tidak. Toko dan produk dapat langsung tampil setelah data wajib lengkap. Pemeriksaan identitas oleh admin berjalan terpisah. Penanda terverifikasi menunjukkan identitas pemilik sudah diperiksa.",
    ],
    [
      "Konten apa yang dapat dilaporkan?",
      "Laporkan produk, toko, atau ulasan yang mengandung penipuan, spam, informasi menyesatkan, konten seksual eksplisit, ujaran kebencian, atau pelanggaran aturan platform. Admin meninjau laporan sebelum mengambil keputusan.",
    ],
    [
      "Bagaimana aturan rating dan ulasan?",
      "Anda harus masuk untuk mengulas. Satu akun memiliki satu ulasan per produk atau toko dan dapat mengeditnya. Pemilik tidak dapat mengulas usahanya sendiri. Ulasan bukan bukti pembelian terverifikasi.",
    ],
    [
      "Bagaimana cara mencoba semua fitur demo?",
      "Buka Panduan demo di footer. Tersedia akun pembeli, pemilik UMKM, dan admin. Perubahan tersimpan pada browser ini. Google, Facebook, email, dan chat menggunakan simulasi lokal.",
    ],
  ];
  Views.help = (d) =>
    publicShell(
      `<section class="help-hero"><span class="category-pill mb-3">PUSAT BANTUAN</span><h1>Ada yang bisa kami bantu?</h1><p>Temukan jawaban untuk perjalanan Anda bersama usaha lokal.</p><button class="btn btn-primary" data-action="open-chat">${icon("chat")}Mulai chat bantuan</button></section><div class="split-layout"><section><h2 class="mb-4">Pertanyaan yang sering ditanyakan</h2><div class="accordion" id="help-faq">${faqs.map(([title, body], i) => `<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${i}" aria-expanded="${!i}" aria-controls="faq-${i}">${e(title)}</button></h3><div id="faq-${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#help-faq"><div class="accordion-body">${e(body)}</div></div></div>`).join("")}</div></section><aside class="panel border"><h2>Jaga ruang yang baik.</h2><p class="text-muted">Dukung usaha lokal dengan informasi yang jujur, komunikasi yang sopan, dan konten yang sesuai.</p><ul class="rule-list"><li>Tampilkan produk dan harga dengan jelas.</li><li>Gunakan foto yang berhak Anda pakai.</li><li>Hindari spam dan informasi menyesatkan.</li><li>Laporkan konten yang perlu ditinjau.</li></ul></aside></div>`,
      d,
    );
  Views.blocked = (d) => {
    const u = Pasarin.current();
    return publicShell(
      `<div class="blocked-page panel border">${empty("Akun Anda sedang dibatasi", "Seluruh toko dan produk akun ini disembunyikan selama pemblokiran berlaku.")} ${notice("<strong>Alasan pemblokiran</strong>" + e(u?.blockReason || "Hubungi bantuan untuk informasi lebih lanjut."), "danger")}<div class="d-flex gap-3 flex-wrap"><button class="btn btn-primary" data-action="open-chat">Hubungi bantuan</button>${btn("Lihat katalog", "index.html", "outline-primary")}<button class="btn btn-outline-secondary" data-action="logout">Keluar</button></div></div>`,
      d,
    );
  };
  Views.notfound = (d) =>
    publicShell(
      empty(
        "Halaman tidak ditemukan",
        "Tautan yang Anda buka mungkin sudah berubah.",
        btn("Kembali ke katalog", "index.html"),
      ),
      d,
    );
  async function afterLogin(user) {
    const next = UI.safeNext(q().get("next"));
    location.href = url(
      user.blocked
        ? "status-akun.html"
        : next ||
            (user.role === "admin"
              ? "admin/index.html"
              : user.role === "owner"
                ? "umkm/dashboard.html"
                : "index.html"),
    );
  }
  Forms.login = async (fd) =>
    afterLogin(await Pasarin.login(fd.get("login"), fd.get("password")));
  Forms.register = async (fd) => {
    if (fd.get("password") !== fd.get("confirm"))
      throw new Error("Konfirmasi kata sandi belum sesuai.");
    const u = await Pasarin.register({
      name: fd.get("username"),
      username: fd.get("username"),
      email: fd.get("email"),
      password: fd.get("password"),
    });
    await afterLogin(u);
  };
  Forms.search = (fd) => {
    const params = new URLSearchParams();
    if (fd.get("q")?.trim()) params.set("q", fd.get("q").trim());
    if (document.body.dataset.page === "catalog" && q().get("category"))
      params.set("category", q().get("category"));
    location.href = url(
      "index.html" + (params.size ? "?" + params.toString() : ""),
    );
  };
  Forms.forgot = async (fd) => {
    const token = Pasarin.requestRecovery(fd.get("email"));
    document.querySelector(".auth-form-wrap").innerHTML =
      `<div class="success-icon">✓</div><h1>Periksa email Anda</h1><p class="auth-description">Jika email tersebut terdaftar, tautan pemulihan tersedia untuk akun Anda.</p>${notice("<strong>Kotak masuk demo</strong>Email tidak dikirim ke alamat asli. Gunakan tautan contoh di bawah untuk melanjutkan simulasi.", "info")}${token ? btn("Buka tautan pemulihan", "reset-sandi.html?token=" + encodeURIComponent(token)) : ""}<p class="auth-bottom"><a href="${url("masuk.html")}">Kembali ke halaman masuk</a></p>`;
  };
  Forms["reset-password"] = async (fd) => {
    if (fd.get("password") !== fd.get("confirm"))
      throw new Error("Konfirmasi kata sandi belum sesuai.");
    await Pasarin.resetPassword(q().get("token"), fd.get("password"));
    document.querySelector(".auth-form-wrap").innerHTML =
      `<div class="success-icon">✓</div><h1>Kata sandi diperbarui</h1><p class="auth-description">Anda dapat masuk menggunakan kata sandi yang baru.</p>${btn("Masuk", "masuk.html")}`;
  };
  Forms.account = async (fd) => {
    if (fd.get("password") !== fd.get("confirm"))
      throw new Error("Konfirmasi kata sandi belum sesuai.");
    await Pasarin.updateAccount(Object.fromEntries(fd));
    App.render();
    UI.toast("Informasi akun berhasil disimpan.");
  };
  Actions["fill-demo"] = (el) => {
    const form = document.querySelector('[data-form="login"]');
    form.elements.login.value = el.dataset.email;
    form.elements.password.value = "Demo12345";
    form.elements.login.focus();
  };
  Actions.social = (el) => {
    const provider = el.dataset.provider;
    UI.formModal(
      "Lanjutkan dengan " + provider,
      `${notice("Simulasi akun " + provider + ". Tidak terhubung ke akun " + provider + " asli.")}<label class="form-label" for="social-account">Pilih akun contoh</label><select class="form-select" id="social-account" name="userId"><option value="u-buyer">Raka Pratama · Pembeli</option><option value="u-sari">Sari Wulandari · Pemilik UMKM</option></select>`,
      "Lanjutkan",
      (fd) => afterLogin(Pasarin.socialLogin(provider, fd.get("userId"))),
    );
  };
  Actions.gallery = (el) => {
    const image = document.getElementById("gallery-main");
    const source = media(el.dataset.src);
    const swap = window.PasarinMotion?.swapImage(image, source);
    if (!swap) image.src = source;
    document.querySelectorAll(".gallery-thumb").forEach((x) => {
      x.classList.toggle("active", x === el);
      x.setAttribute("aria-pressed", String(x === el));
    });
    document.getElementById("gallery-caption").textContent =
      `Foto ${Number(el.dataset.index) + 1} · ${Number(el.dataset.index) + 1} dari ${el.dataset.total} foto`;
    return swap;
  };
  Actions.review = (el) => {
    const u = Pasarin.current();
    if (!u) return UI.requireLogin();
    if (u.blocked) return (location.href = url("status-akun.html"));
    const type = el.dataset.type,
      id = el.dataset.id;
    const review = Pasarin.snapshot().reviews.find(
      (r) => r.userId === u.id && r.targetType === type && r.targetId === id,
    );
    UI.formModal(
      review ? "Ubah ulasan" : "Bagikan pengalaman Anda",
      `<p class="text-muted">Ulasan membantu pembeli mengenal usaha lokal. Gunakan pengalaman dan bahasa yang baik.</p><fieldset class="mb-4"><legend class="form-label">Rating *</legend><div class="rating-choice">${[1, 2, 3, 4, 5].map((n) => `<label><input type="radio" name="rating" value="${n}" required ${review?.rating === n ? "checked" : ""}>${n} <span class="stars">★</span></label>`).join("")}</div></fieldset>${field("Ulasan", "comment", review?.comment || "", { required: true, area: true, attrs: 'minlength="10" maxlength="1000"', placeholder: "Ceritakan pengalaman Anda, minimal 10 karakter." })}`,
      "Simpan ulasan",
      (fd) => {
        Pasarin.saveReview(type, id, fd.get("rating"), fd.get("comment"));
        App.render();
        UI.toast("Ulasan berhasil disimpan.");
      },
    );
  };
  Actions.report = (el) => {
    const u = Pasarin.current();
    if (!u) return UI.requireLogin();
    if (u.blocked) return (location.href = url("status-akun.html"));
    const type = el.dataset.type,
      id = el.dataset.id;
    UI.formModal(
      "Laporkan konten",
      `<p class="text-muted">Admin akan meninjau laporan Anda sebelum mengambil keputusan.</p>${select(
        "Alasan laporan",
        "reason",
        [
          "Penipuan",
          "Spam",
          "Informasi tidak sesuai",
          "Konten tidak pantas",
          "Ujaran kebencian",
          "Lainnya",
        ].map((x) => ({ id: x, name: x })),
      )}${field("Keterangan", "description", "", { required: true, area: true, attrs: 'minlength="10" maxlength="1000"', placeholder: "Jelaskan hal yang perlu diperiksa, minimal 10 karakter." })}`,
      "Kirim laporan",
      (fd) => {
        Pasarin.report(type, id, fd.get("reason"), fd.get("description"));
        UI.toast("Laporan terkirim. Admin akan memeriksanya.");
      },
    );
  };
  Actions["all-reviews"] = (el) => {
    const reviews = Pasarin.snapshot().reviews.filter(
      (r) =>
        r.targetType === el.dataset.type &&
        r.targetId === el.dataset.id &&
        !r.hidden,
    );
    UI.modal(
      "Semua ulasan",
      reviews
        .map(
          (r) =>
            `<article class="review-card mb-3"><strong>${e(r.author)}</strong><div class="stars mt-2">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div><p>${e(r.comment)}</p><small class="text-muted">${date(r.createdAt)}</small></article>`,
        )
        .join(""),
      '<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Tutup</button>',
    );
  };
})();
