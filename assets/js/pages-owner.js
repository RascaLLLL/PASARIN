(function () {
  "use strict";
  const {
    e,
    url,
    media,
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
    workspace,
    statsCard,
  } = UI;
  const params = () => new URLSearchParams(location.search);
  function productStatus(product, data, admin) {
    if (admin) {
      const store = data.stores.find((s) => s.id === product.storeId);
      const owner = data.users.find((u) => u.id === store?.ownerId);
      if (owner?.blocked) return badge("Pemilik diblokir", "danger");
      if (!store?.active) return badge("Toko nonaktif", "warning");
      if (store.moderationHidden) return badge("Toko dibatasi", "danger");
    }
    if (product.moderationHidden) return badge("Disembunyikan", "danger");
    return product.active
      ? badge(admin ? "Tampil" : "Aktif", "success")
      : badge("Draf");
  }
  function productRows(products, d, admin = false) {
    return `<div class="table-wrap"><table class="app-table table-cards"><thead><tr><th>Produk</th><th>Harga</th><th>Kategori</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${products.map((p) => `<tr><td><div class="table-product"><img src="${media(p.images[0])}" alt="${e(p.name)}"><div><strong>${e(p.name)}</strong><small>${e(p.id.startsWith("p-0") ? "PSR-" + p.id.slice(2).toUpperCase() : p.id.slice(-8).toUpperCase())}</small></div></div></td><td><span class="table-mobile-label">Harga</span><strong>${money(p.price)}</strong></td><td><span class="table-mobile-label">Kategori</span>${e(category(d, p.categoryId))}</td><td><span class="table-mobile-label">Status</span>${productStatus(p, d, admin)}</td><td><span class="table-mobile-label">Aksi</span><div class="table-actions">${admin ? `<a href="${url("admin/produk-detail.html?id=" + p.id)}">Detail</a><a href="${url("admin/produk-edit.html?id=" + p.id)}">Edit</a>` : `<a href="${url("umkm/produk-form.html?id=" + p.id)}">Edit</a><button class="text-button text-danger" data-action="delete-product" data-id="${p.id}">Hapus</button>`}</div></td></tr>`).join("")}</tbody></table></div>`;
  }
  function profilePreview(store, u, d) {
    return `<aside class="panel preview-card"><h2>Pratinjau Toko</h2><div class="store-banner ${store.banner ? "" : "store-banner-fallback"}">${store.banner ? `<img src="${media(store.banner)}" alt="Banner toko">` : ""}</div><div class="store-profile-heading">${storeLogo(store)}<div><h3>${e(store.name || "Nama toko Anda")}</h3><p>${e(store.city || "Lokasi toko")}</p></div></div>${UI.verification(u)}<p class="mt-3">${e(store.description || "Ceritakan usaha Anda kepada pembeli.")}</p><hr><p>${e(store.address || "Alamat toko")}</p><p>WhatsApp: +${e(store.phone || "62")}</p><p class="form-text mb-0">Logo yang jelas dan nomor WhatsApp aktif membantu pembeli mengenali toko Anda.</p></aside>`;
  }
  function storeForm(store, d, admin = false) {
    const u = d.users.find(
      (u) => u.id === (store.ownerId || Pasarin.current().id),
    );
    return `<form data-form="${admin ? "admin-store" : "store"}" data-id="${e(store.id || "")}" novalidate><div class="form-alert" aria-live="polite"></div><h2>Informasi Toko</h2><p class="panel-caption">Bantu pembeli mengenal toko Anda lebih dekat.</p><div class="form-grid">${field("Nama toko", "name", store.name, { required: true, attrs: 'minlength="3" maxlength="80"' })}${select("Kategori toko", "categoryId", d.categories, store.categoryId)}<div class="full">${field("Deskripsi toko", "description", store.description, { area: true, required: true, attrs: 'minlength="10" maxlength="1200"' })}</div><div class="full">${field("Alamat toko", "address", store.address, { required: true, area: true, attrs: 'maxlength="300"' })}</div>${field("Kota / kabupaten", "city", store.city, { required: true, attrs: 'maxlength="80"' })}${field("Nomor WhatsApp", "phone", store.phone, { required: true, type: "tel", placeholder: "6281234567890", attrs: 'pattern="[+0-9 ()-]{9,22}"', help: "Gunakan nomor aktif. Pembeli menghubungi toko melalui nomor ini." })}<div class="full">${field("Nama pemilik", "ownerName", u?.name || "", { attrs: "readonly", help: "Nama pemilik mengikuti identitas pada akun." })}</div></div><h2 class="form-section-title">Tampilan Toko</h2><div class="form-grid"><div class="field-group"><label class="form-label" for="store-logo">Logo toko</label><div class="upload-box"><div class="upload-preview" id="logo-preview">${store.logo ? `<img src="${media(store.logo)}" alt="Logo toko saat ini">` : storeLogo(store)}</div><input class="form-control" id="store-logo" type="file" name="logo" accept="image/jpeg,image/png,image/webp" data-upload-preview="logo-preview"><span class="form-text">JPG/PNG/WebP · Maks. 2 MB · Rasio 1:1</span></div></div><div class="field-group"><label class="form-label" for="store-banner">Banner toko</label><div class="upload-box"><div class="upload-preview banner" id="banner-preview">${store.banner ? `<img src="${media(store.banner)}" alt="Banner toko saat ini">` : ""}</div><input class="form-control" id="store-banner" type="file" name="banner" accept="image/jpeg,image/png,image/webp" data-upload-preview="banner-preview"><span class="form-text">JPG/PNG/WebP · Maks. 5 MB · Disarankan 1200 × 400 px</span></div></div></div>${!store.id ? `<div class="form-check mt-2"><input class="form-check-input" type="checkbox" name="rules" id="store-rules" required><label class="form-check-label" for="store-rules">Saya menyetujui aturan konten dan memastikan informasi toko ini benar.</label><div class="invalid-feedback">Setujui aturan sebelum membuka toko.</div></div><p class="form-text">Toko dapat langsung tayang setelah data lengkap. Pemeriksaan identitas berjalan terpisah.</p>` : ""}<div class="form-actions">${btn("Batal", admin ? "admin/toko-detail.html?id=" + store.id : store.id ? "umkm/dashboard.html" : "umkm/toko-saya.html", "outline-secondary")}<button class="btn btn-primary" type="submit">${store.id ? "Simpan Perubahan" : "Buka Toko"}</button></div></form>`;
  }
  function productForm(product, store, d, admin = false) {
    return `<form data-form="${admin ? "admin-product" : "product"}" data-id="${e(product?.id || "")}" data-store="${store.id}" novalidate><div class="form-alert" aria-live="polite"></div><h2>Informasi Produk</h2>${field("Nama produk", "name", product?.name || "", { required: true, attrs: 'minlength="3" maxlength="100"', placeholder: "Contoh: Arabica Gayo" })}<div class="form-grid">${select("Kategori", "categoryId", d.categories, product?.categoryId || store.categoryId)}${field("Harga (Rp)", "price", product?.price || "", { required: true, type: "number", attrs: 'min="1" max="999999999" step="1"', placeholder: "65000" })}</div>${field("Deskripsi produk", "description", product?.description || "", { required: true, area: true, attrs: 'minlength="10" maxlength="3000"', placeholder: "Ceritakan bahan, ukuran, varian, dan keunggulan produk." })}<div class="form-grid">${field("Jenis produk", "type", product?.type || "", { attrs: 'maxlength="60"', placeholder: "Contoh: Biji kopi" })}${field("Lokasi produk", "city", product?.city || store.city, { required: true, attrs: 'maxlength="80"' })}</div><h2 class="form-section-title">Foto Produk</h2><p class="panel-caption">Foto pertama menjadi foto utama di katalog.</p><div class="upload-box"><label class="form-label" for="product-images">${product ? "Ganti foto produk" : "Tambahkan foto produk"}${product ? "" : " *"}</label><input class="form-control" id="product-images" name="images" type="file" accept="image/jpeg,image/png,image/webp" multiple ${product ? "" : "required"} data-upload-preview="product-photo-preview"><span class="form-text">Maksimal 5 foto · JPG/PNG/WebP · Maks. 2 MB per foto</span><div class="upload-preview" id="product-photo-preview">${(product?.images || []).map((src, i) => `<img src="${media(src)}" alt="Foto produk ${i + 1}">`).join("")}</div>${product ? '<p class="form-text mb-0">Unggah foto baru untuk mengganti seluruh foto saat ini. Kosongkan untuk mempertahankan foto.</p>' : ""}</div><div class="form-check mt-4"><input class="form-check-input" type="checkbox" id="product-active" name="active" ${!product || product.active ? "checked" : ""}><label class="form-check-label" for="product-active">Tampilkan produk di katalog</label></div><div class="form-check mt-3"><input class="form-check-input" type="checkbox" id="product-rules" name="rules" required><label class="form-check-label" for="product-rules">Informasi produk benar, foto berhak saya gunakan, dan konten mengikuti aturan PASARIN.</label><div class="invalid-feedback">Setujui aturan konten.</div></div><p class="form-text">Produk aktif dapat langsung tayang. Admin dapat meninjau konten yang dilaporkan.</p><div class="form-actions">${btn("Batal", admin ? "admin/produk-detail.html?id=" + product.id : "umkm/produk.html", "outline-secondary")}<button class="btn btn-primary" type="submit">${product ? "Simpan Perubahan" : "Tambah Produk"}</button></div></form>`;
  }
  function identityView(d) {
    const u = Pasarin.current();
    const reapply = u.verification === "rejected";
    if (u.verification === "verified")
      return publicShell(
        `<div class="onboarding-main">${pageHeader("Identitas sudah terverifikasi", "Verifikasi berlaku untuk seluruh toko yang Anda miliki.")}<div class="panel border">${notice("<strong>Identitas pemilik terverifikasi</strong>Anda tidak perlu mengunggah KTP kembali saat menambahkan toko.", "success")}${btn("Buka toko baru", "umkm/buka-toko.html")}${btn("Lihat toko saya", "umkm/toko-saya.html", "outline-primary", 'class="ms-2"')}</div></div>`,
        d,
      );
    return publicShell(
      `<div class="onboarding-main"><div class="onboarding-heading"><span class="category-pill mb-3">MULAI USAHA LOKALMU</span><h1>${reapply ? "Perbaiki identitas pemilik" : "Kenalkan usaha Anda."}</h1><p>Lengkapi identitas sekali, lalu kelola beberapa toko dari satu akun.</p></div><div class="steps-row"><span class="current"><span class="step-circle">1</span>Identitas pemilik</span><span><span class="step-circle">2</span>Informasi toko</span><span><span class="step-circle">3</span>Mulai berjualan</span></div><div class="split-layout"><section class="panel border"><form data-form="identity" novalidate><div class="form-alert" aria-live="polite"></div>${reapply ? notice("<strong>Perbaikan yang diminta</strong>" + e(u.verificationReason), "danger") : u.verification === "pending" ? notice("<strong>Identitas sedang diperiksa</strong>Anda tetap dapat membuka toko dan mengunggah produk.", "warning") : ""}<h2>Identitas Pemilik</h2>${field("Nama lengkap sesuai KTP", "name", u.name, { required: true, attrs: 'minlength="2" maxlength="80"' })}<div class="field-group"><label class="form-label" for="identity-ktp">KTP pemilik *</label><input class="form-control" id="identity-ktp" type="file" name="ktp" accept="image/jpeg,image/png,image/webp,application/pdf" ${u.ktp ? "" : "required"}><div class="invalid-feedback">Unggah KTP pemilik.</div><p class="form-text">${u.ktp ? "Tersimpan: " + e(u.ktp.name) + ". Unggah kembali untuk mengganti." : "Wajib untuk pendaftaran pemilik. Gunakan dokumen contoh pada demo ini."}</p></div><div class="field-group"><label class="form-label" for="identity-nib">NIB / dokumen usaha <span class="text-muted">(opsional)</span></label><input class="form-control" id="identity-nib" type="file" name="nib" accept="image/jpeg,image/png,image/webp,application/pdf"><p class="form-text">${u.nib ? "Tersimpan: " + e(u.nib.name) + ". " : ""}JPG/PNG/WebP maksimal 2 MB atau PDF maksimal 1 MB.</p></div><div class="form-check"><input class="form-check-input" type="checkbox" name="consent" id="identity-consent" required><label class="form-check-label" for="identity-consent">Saya memastikan data benar dan menyetujui pemeriksaan identitas oleh admin.</label><div class="invalid-feedback">Persetujuan diperlukan.</div></div><div class="form-actions">${btn("Kembali", "akun.html", "outline-secondary")}<button class="btn btn-primary" type="submit">${reapply ? "Ajukan ulang" : "Simpan & lanjutkan"}</button></div></form></section><aside class="panel border"><h2>Usaha Anda, satu akun.</h2><p class="text-muted">KTP wajib dan NIB opsional. Dokumen hanya dapat dilihat pemilik akun dan admin.</p><ul class="rule-list"><li>Identitas diajukan sekali per akun.</li><li>Satu akun boleh punya beberapa toko.</li><li>Toko bisa langsung tayang setelah data lengkap.</li><li>Verifikasi admin berlangsung setelah pengajuan.</li></ul></aside></div></div>`,
      d,
    );
  }
  Views["owner-identity"] = identityView;
  Views["owner-create-store"] = (d) => {
    const u = Pasarin.current();
    if (u.role !== "owner") return identityView(d);
    const draft = {
      name: "",
      categoryId: "",
      description: "",
      address: "",
      city: "",
      phone: "62",
      ownerId: u.id,
    };
    return publicShell(
      `<div class="onboarding-main"><div class="onboarding-heading"><span class="category-pill mb-3">TOKO BARU ANDA</span><h1>Bawa usaha Anda lebih dekat.</h1><p>Lengkapi profil toko agar pembeli mudah mengenal dan menghubungi Anda.</p></div>${Pasarin.ownStores().length ? notice("Identitas pemilik memakai akun " + e(u.name) + ". Tidak perlu mengunggah KTP kembali.", "success") : ""}<div class="split-layout"><section class="panel border">${storeForm(draft, d)}</section>${profilePreview(draft, u, d)}</div></div>`,
      d,
    );
  };
  Views["owner-stores"] = (d) => {
    const u = Pasarin.current();
    const stores = Pasarin.ownStores();
    return workspace(
      `${pageHeader("Toko Saya", "Semua usaha lokal Anda, dikelola dari satu akun.", btn("+ Buka Toko", "umkm/buka-toko.html"))}${stores.length ? `<div class="store-cards">${stores.map((s) => `<article class="store-card"><div class="seller-identity">${storeLogo(s)}<div><h2>${e(s.name)}</h2><p>${e(s.city)}</p></div></div><div class="d-flex flex-wrap gap-2">${Pasarin.visibleStore(s) ? badge("Toko aktif", "success") : badge("Tidak tampil", "danger")}${UI.verification(u)}</div><p>${e(s.description)}</p><small class="text-muted">${d.products.filter((p) => p.storeId === s.id).length} produk · ${e(category(d, s.categoryId))}</small><div class="store-card-actions"><button class="btn btn-primary" data-action="manage-store" data-id="${s.id}">Kelola toko</button>${btn("Lihat toko ↗", "toko.html?id=" + s.id, "outline-primary", 'target="_blank" rel="noopener"')}</div></article>`).join("")}</div>` : `<div class="panel">${empty("Buka toko pertama Anda", "Identitas pemilik sudah tersimpan. Lengkapi data toko untuk mulai menampilkan produk.", btn("Buka Toko", "umkm/buka-toko.html"))}</div>`}`,
      d,
    );
  };
  Views["owner-dashboard"] = (d) => {
    const s = Pasarin.selectedStore(),
      u = Pasarin.current();
    const products = d.products.filter((p) => p.storeId === s.id);
    const active = products.filter(
      (p) => p.active && !p.moderationHidden,
    ).length;
    const status =
      u.verification === "verified"
        ? notice(
            `<strong>Identitas pemilik terverifikasi · ${e(s.name)} ${s.active ? "aktif" : "nonaktif"}</strong>`,
            "success",
            true,
          )
        : u.verification === "rejected"
          ? notice(
              `<strong>Identitas perlu diperbaiki</strong>${e(u.verificationReason)} <a href="${url("umkm/identitas.html")}">Perbaiki data →</a>`,
              "danger",
            )
          : notice(
              `<strong>Identitas sedang diperiksa</strong>Toko dan produk aktif Anda tetap dapat tampil di katalog. <a href="${url("umkm/status.html")}">Lihat status →</a>`,
              "warning",
            );
    return workspace(
      `${pageHeader("Selamat berjualan, " + u.name.split(" ")[0] + ".", "Ini kabar terbaru " + s.name + " hari ini.", btn("Lihat Toko ↗", "toko.html?id=" + s.id, "outline-primary", 'target="_blank" rel="noopener"'))}${!s.active || s.moderationHidden ? notice("<strong>Toko sedang tidak tampil</strong>" + e(s.adminReason || "Toko dibatasi melalui pengelolaan admin. Hubungi bantuan untuk informasi lebih lanjut."), "danger") : ""}${status}<div class="stats-grid">${statsCard("Total produk", products.length, `${active} aktif · ${products.length - active} tidak tampil`, "products")}${statsCard("Kunjungan toko", s.visits.toLocaleString("id-ID"), "Statistik contoh periode ini", "store")}${statsCard("Pertanyaan produk", d.chats.filter((m) => m.thread === s.id && m.from === "user").length + (s.id === "s-cafe" ? 86 : 0), "Pesan dan pertanyaan contoh", "message")}</div><section class="panel"><div class="panel-toolbar"><h2>Produk Saya</h2>${btn("+ Tambah Produk", "umkm/produk-form.html")}</div>${products.length ? productRows(products.slice(0, 5), d) : empty("Belum ada produk", "Tambahkan produk pertama agar pembeli mengenal usaha Anda.", btn("Tambah Produk", "umkm/produk-form.html"))}</section>`,
      d,
    );
  };
  Views["owner-products"] = (d) => {
    const s = Pasarin.selectedStore();
    let list = d.products.filter((p) => p.storeId === s.id);
    const query = params().get("q") || "",
      status = params().get("status") || "";
    if (query)
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );
    if (status)
      list = list.filter((p) =>
        status === "active"
          ? p.active && !p.moderationHidden
          : status === "hidden"
            ? p.moderationHidden
            : !p.active,
      );
    return workspace(
      `${pageHeader("Produk Saya", "Kelola produk yang tampil di " + s.name + ".", btn("+ Tambah Produk", "umkm/produk-form.html"))}<section class="panel"><form class="panel-toolbar" data-form="owner-product-filter"><div class="search-form">${icon("search")}<label class="visually-hidden" for="product-search">Cari produk</label><input type="search" id="product-search" name="q" value="${e(query)}" placeholder="Cari nama produk"><button type="submit" class="text-button">Cari</button></div><div class="filters"><label class="visually-hidden" for="product-status">Status produk</label><select class="form-select" name="status" id="product-status" data-action="submit-filter"><option value="">Semua status</option><option value="active" ${status === "active" ? "selected" : ""}>Aktif</option><option value="draft" ${status === "draft" ? "selected" : ""}>Draf</option><option value="hidden" ${status === "hidden" ? "selected" : ""}>Disembunyikan</option></select></div></form>${list.length ? productRows(list, d) : empty("Produk belum ditemukan", query || status ? "Coba ubah pencarian atau filter produk." : "Tambahkan produk lokal pertama ke toko Anda.", btn(query || status ? "Reset filter" : "Tambah Produk", query || status ? "umkm/produk.html" : "umkm/produk-form.html", "outline-primary"))}</section>`,
      d,
    );
  };
  Views["owner-product-form"] = (d) => {
    const id = params().get("id");
    const product = d.products.find((p) => p.id === id);
    if (
      id &&
      (!product || !Pasarin.ownStores().some((s) => s.id === product.storeId))
    )
      return workspace(
        empty(
          "Produk tidak ditemukan",
          "Pilih produk dari toko milik Anda.",
          btn("Produk Saya", "umkm/produk.html"),
        ),
        d,
      );
    const store = product
      ? d.stores.find((s) => s.id === product.storeId)
      : Pasarin.selectedStore();
    if (product) Pasarin.selectStore(store.id);
    return workspace(
      `${pageHeader(product ? "Edit Produk" : "Tambah Produk", "Tampilkan produk lokal Anda dengan informasi yang jelas.", "", "umkm/produk.html")}<div class="split-layout form-wide"><section class="panel">${productForm(product, store, d)}</section><aside class="panel"><h2>Foto yang bercerita.</h2><p class="text-muted">Gunakan pencahayaan yang baik dan tampilkan produk secara jelas.</p><ul class="rule-list"><li>Harga ditulis dalam rupiah.</li><li>Deskripsi sesuai kondisi produk.</li><li>Foto utama tampil pada katalog.</li><li>Konten aktif langsung tayang.</li></ul>${product?.moderationHidden ? notice("<strong>Produk disembunyikan admin</strong>" + e(product.adminReason || "Hubungi bantuan untuk meminta peninjauan."), "danger") : ""}</aside></div>`,
      d,
    );
  };
  Views["owner-profile"] = (d) => {
    const s = Pasarin.selectedStore(),
      u = Pasarin.current();
    return workspace(
      `${pageHeader("Profil Toko", "Ceritakan identitas toko Anda dan bangun kepercayaan pembeli.")}<div class="split-layout"><section class="panel">${storeForm(s, d)}</section>${profilePreview(s, u, d)}</div>`,
      d,
    );
  };
  Views["owner-status"] = (d) => {
    const u = Pasarin.current();
    const title =
      u.verification === "verified"
        ? "Identitas pemilik terverifikasi"
        : u.verification === "rejected"
          ? "Identitas perlu diperbaiki"
          : "Identitas sedang diperiksa";
    const status = notice(
      `<strong>${title}</strong>${u.verification === "verified" ? "Pemeriksaan identitas sudah selesai. Status ini berlaku untuk seluruh toko milik akun Anda." : u.verification === "rejected" ? e(u.verificationReason) : "Anda tetap dapat membuka toko dan mengunggah produk selama pemeriksaan berjalan."}`,
      u.verification === "verified"
        ? "success"
        : u.verification === "rejected"
          ? "danger"
          : "warning",
    );
    return workspace(
      `${pageHeader("Status UMKM", "Pantau pemeriksaan identitas pemilik akun Anda.")}<div class="split-layout"><section class="panel">${status}<h2>Identitas pemilik</h2><dl class="key-values"><div><dt>Nama pemilik</dt><dd>${e(u.name)}</dd></div><div><dt>Email</dt><dd>${e(u.email)}</dd></div><div><dt>Jumlah toko</dt><dd>${Pasarin.ownStores().length} toko</dd></div><div><dt>Status verifikasi</dt><dd>${UI.verification(u)}</dd></div><div><dt>Pengajuan terakhir</dt><dd>${date(u.submittedAt || u.createdAt)}</dd></div></dl><h2 class="form-section-title">Dokumen identitas</h2>${["ktp", "nib"].map((type) => `<div class="document-card"><strong>${type === "ktp" ? "KTP pemilik" : "NIB / dokumen usaha (opsional)"}</strong><p>${e(u[type]?.name || "Belum diunggah")}</p>${u[type] ? `<button class="text-button" data-action="show-document" data-user="${u.id}" data-doc="${type}">Lihat dokumen</button>` : ""}</div>`).join("")}${u.verification === "rejected" ? btn("Perbaiki & ajukan ulang", "umkm/identitas.html") : ""}</section><aside class="panel"><h2>Identitas dan publikasi</h2><p class="text-muted">Verifikasi dilakukan sekali per akun pemilik. Toko dan produk aktif tetap dapat tampil meskipun identitas belum diverifikasi.</p><p class="text-muted">Admin dapat membatasi konten atau akun jika ada pelanggaran.</p>${btn("Pusat Bantuan", "bantuan.html", "outline-primary")}</aside></div>`,
      d,
    );
  };
  async function storeValues(fd, old = {}) {
    const logo = await UI.imageFile(fd.get("logo"));
    const banner = await UI.imageFile(fd.get("banner"), 5 * 1024 * 1024);
    return {
      name: fd.get("name"),
      categoryId: fd.get("categoryId"),
      description: fd.get("description"),
      address: fd.get("address"),
      city: fd.get("city"),
      phone: fd.get("phone").replace(/\D/g, ""),
      logo: logo || old.logo || "",
      banner: banner || old.banner || "",
      initials: old.initials || UI.initials(fd.get("name")),
    };
  }
  async function productValues(fd, old, store) {
    const files = fd.getAll("images").filter((f) => f.size);
    if (files.length > 5) throw new Error("Maksimal 5 foto per produk.");
    const images = files.length
      ? await Promise.all(files.map((f) => UI.imageFile(f)))
      : old?.images || [];
    return {
      storeId: store.id,
      name: fd.get("name"),
      price: fd.get("price"),
      categoryId: fd.get("categoryId"),
      description: fd.get("description"),
      type: fd.get("type"),
      city: fd.get("city"),
      images,
      active: fd.get("active") === "on",
    };
  }
  Forms.identity = async (fd) => {
    const u = Pasarin.current();
    const wasOwner = u.role === "owner";
    Pasarin.submitIdentity({
      name: fd.get("name"),
      ktp: await UI.documentFile(fd.get("ktp")),
      nib: await UI.documentFile(fd.get("nib")),
    });
    location.href = url(
      wasOwner && Pasarin.ownStores().length
        ? "umkm/status.html"
        : "umkm/buka-toko.html",
    );
  };
  Forms.store = async (fd, form) => {
    const id = form.dataset.id || null;
    const old = Pasarin.snapshot().stores.find((s) => s.id === id) || {};
    const storeId = Pasarin.saveStore(await storeValues(fd, old), id);
    if (id) {
      App.render();
      UI.toast("Profil toko berhasil disimpan.");
    } else location.href = url("umkm/dashboard.html?created=" + storeId);
  };
  Forms.product = async (fd, form) => {
    const id = form.dataset.id || null;
    const d = Pasarin.snapshot();
    const old = d.products.find((p) => p.id === id),
      store = d.stores.find((s) => s.id === form.dataset.store);
    Pasarin.saveProduct(await productValues(fd, old, store), id);
    location.href = url("umkm/produk.html?saved=1");
  };
  Forms["owner-product-filter"] = (fd) => {
    const p = new URLSearchParams();
    for (const key of ["q", "status"]) if (fd.get(key)) p.set(key, fd.get(key));
    location.href = url("umkm/produk.html" + (p.size ? "?" + p : ""));
  };
  Actions["manage-store"] = (el) => {
    Pasarin.selectStore(el.dataset.id);
    location.href = url("umkm/dashboard.html");
  };
  Actions["submit-filter"] = (el) => el.closest("form").requestSubmit();
  Actions["delete-product"] = (el) => {
    const p = Pasarin.snapshot().products.find((p) => p.id === el.dataset.id);
    UI.confirm(
      "Hapus produk?",
      "Produk " + p.name + " akan dihapus dari toko dan katalog.",
      () => {
        Pasarin.deleteProduct(p.id);
        App.render();
        UI.toast("Produk berhasil dihapus.");
      },
      { submit: "Hapus Produk" },
    );
  };
  window.OwnerUI = {
    productRows,
    storeForm,
    productForm,
    profilePreview,
    storeValues,
    productValues,
  };
})();
