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
    workspace,
    statsCard,
  } = UI;
  const params = () => new URLSearchParams(location.search);
  const pending = (d) =>
    d.users.filter((u) => u.role === "owner" && u.verification === "pending");
  const openReports = (d) => d.reports.filter((r) => r.status === "open");
  const firstStore = (d, id) => d.stores.find((s) => s.ownerId === id);
  const ownerStatus = (u) =>
    u.blocked
      ? badge("Diblokir", "danger")
      : u.verification === "verified"
        ? badge("Disetujui", "success")
        : u.verification === "rejected"
          ? badge("Perlu perbaikan", "danger")
          : badge("Menunggu", "warning");
  const reportStatus = (r) =>
    r.status === "hidden"
      ? badge("Disembunyikan", "danger")
      : r.status === "kept"
        ? badge("Dipertahankan", "success")
        : badge("Diperiksa", "warning");
  function table(headers, rows) {
    return `<div class="table-wrap"><table class="app-table table-cards"><thead><tr>${headers.map((h) => `<th>${e(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td>${i ? `<span class="table-mobile-label">${e(headers[i])}</span>` : ""}${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function filterForm(form, query, status, choices, extra = "") {
    return `<form class="panel-toolbar" data-form="${form}"><div class="search-form">${icon("search")}<label class="visually-hidden" for="admin-search">Cari data</label><input id="admin-search" name="q" type="search" placeholder="Cari nama atau informasi…" value="${e(query)}"><button class="text-button" type="submit">Cari</button></div><div class="filters">${choices ? `<label class="visually-hidden" for="admin-status">Status</label><select class="form-select" name="status" id="admin-status" data-action="submit-filter"><option value="">Semua status</option>${choices.map(([id, name]) => `<option value="${id}" ${status === id ? "selected" : ""}>${name}</option>`).join("")}</select>` : ""}${extra}</div></form>`;
  }
  function ownerRows(users, d) {
    return table(
      ["Toko / Pemilik", "Lokasi", "Status", "Toko", "Aksi"],
      users.map((u) => {
        const s = firstStore(d, u.id);
        return [
          `<div class="seller-identity mb-0">${storeLogo(s || { name: u.name })}<div><strong>${e(s?.name || "Belum membuka toko")}</strong><small class="text-muted">${e(u.name)}</small></div></div>`,
          e(s?.city || "—"),
          ownerStatus(u),
          String(d.stores.filter((s) => s.ownerId === u.id).length),
          `<div class="table-actions"><a href="${url("admin/verifikasi-detail.html?id=" + u.id)}">Tinjau</a></div>`,
        ];
      }),
    );
  }
  function contentTarget(r, d) {
    if (r.targetType === "product") {
      const p = d.products.find((p) => p.id === r.targetId);
      return {
        name: p?.name || "Produk sudah dihapus",
        description: p?.description || "",
        image: p?.images[0],
        store: d.stores.find((s) => s.id === p?.storeId),
        product: p,
      };
    }
    if (r.targetType === "store") {
      const s = d.stores.find((s) => s.id === r.targetId);
      return {
        name: s?.name || "Toko tidak tersedia",
        description: s?.description || "",
        image: s?.banner,
        store: s,
      };
    }
    const review = d.reviews.find((x) => x.id === r.targetId);
    return {
      name: "Ulasan " + (review?.author || "pengguna"),
      description: review?.comment || "Ulasan sudah dihapus",
      store: review
        ? Pasarin.targetStore(review.targetType, review.targetId)
        : null,
      review,
    };
  }
  Views["admin-dashboard"] = (d) => {
    const owners = d.users.filter((u) => u.role === "owner"),
      waiting = pending(d);
    return workspace(
      `${pageHeader("Ringkasan Admin", "Selamat datang, " + Pasarin.current().name.split(" ")[0] + ". Ini kabar PASARIN hari ini.", `<span class="status-badge">${icon("calendar")}${new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}</span>`)}<div class="stats-grid four">${statsCard("Total UMKM", owners.length, `${d.stores.length} toko terdaftar`, "store")}${statsCard("Produk aktif", d.products.filter(Pasarin.visibleProduct).length, `${d.products.length} produk terdaftar`, "package")}${statsCard("Perlu verifikasi", waiting.length, "Pengajuan identitas pemilik", "badge", "text-warning")}${statsCard("Kategori", d.categories.length, "Kategori tersedia", "category")}</div><div class="split-layout"><section class="panel"><div class="panel-toolbar"><h2>UMKM baru untuk ditinjau</h2>${badge(waiting.length + " menunggu", "warning")}</div>${waiting.length ? ownerRows(waiting.slice(0, 4), d) : empty("Semua pengajuan sudah ditinjau", "Pengajuan baru akan muncul di sini.")}<div class="d-flex justify-content-between mt-3"><small class="text-muted">${Math.min(4, waiting.length)} dari ${waiting.length} pengajuan menunggu</small><a href="${url("admin/verifikasi.html?status=pending")}">Lihat semua →</a></div></section><aside><section class="panel"><h2>Akses cepat</h2><div class="quick-actions"><a class="quick-action" href="${url("admin/verifikasi.html?status=pending")}">${icon("badge")}<div><strong>Verifikasi UMKM</strong><p>${waiting.length} pemilik menunggu ditinjau</p></div></a><a class="quick-action" href="${url("admin/laporan.html?status=open")}">${icon("shield")}<div><strong>Moderasi</strong><p>${openReports(d).length} laporan perlu perhatian</p></div></a><a class="quick-action" href="${url("admin/kategori.html")}">${icon("category")}<div><strong>Kelola kategori</strong><p>${d.categories.length} kategori · ${d.products.length} produk</p></div></a></div></section><div class="mt-4">${notice(`<strong>Dukung usaha lokal</strong>${owners.filter((u) => u.verification === "verified").length} dari ${owners.length} pemilik sudah terverifikasi. Bantu usaha berikutnya memulai.`, "success")}</div></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-verification"] = (d) => {
    const query = params().get("q") || "",
      status = params().get("status") || "";
    let users = d.users.filter((u) => u.role === "owner");
    if (status) users = users.filter((u) => u.verification === status);
    if (query)
      users = users.filter((u) =>
        (
          u.name +
          " " +
          u.email +
          " " +
          d.stores
            .filter((s) => s.ownerId === u.id)
            .map((s) => s.name)
            .join(" ")
        )
          .toLowerCase()
          .includes(query.toLowerCase()),
      );
    return workspace(
      `${pageHeader("Verifikasi UMKM", "Periksa identitas pemilik sekali untuk seluruh toko miliknya.")}<section class="panel">${filterForm(
        "admin-verification-filter",
        query,
        status,
        [
          ["pending", "Menunggu"],
          ["verified", "Disetujui"],
          ["rejected", "Perlu perbaikan"],
        ],
      )}${users.length ? ownerRows(users, d) : empty("Pengajuan belum ditemukan", "Ubah filter atau tunggu pengajuan identitas berikutnya.", btn("Reset filter", "admin/verifikasi.html", "outline-primary"))}</section>`,
      d,
      true,
    );
  };
  Views["admin-verification-detail"] = (d) => {
    const u = d.users.find(
      (u) => u.id === params().get("id") && u.role === "owner",
    );
    if (!u)
      return workspace(
        empty(
          "Pengajuan tidak ditemukan",
          "Pilih pemilik dari daftar verifikasi.",
          btn("Daftar verifikasi", "admin/verifikasi.html"),
        ),
        d,
        true,
      );
    const stores = d.stores.filter((s) => s.ownerId === u.id),
      s = stores[0];
    return workspace(
      `${pageHeader("Detail Verifikasi", "Pengajuan identitas pemilik · " + date(u.submittedAt || u.createdAt), ownerStatus(u), "admin/verifikasi.html")}<div class="split-layout"><section class="panel"><h2>Data pemilik dan toko</h2><div class="seller-identity">${storeLogo(s || { name: u.name })}<div><strong>${e(u.name)}</strong><p>${e(u.email)}</p></div></div><dl class="key-values"><div><dt>Nama pemilik</dt><dd>${e(u.name)}</dd></div><div><dt>Jumlah toko</dt><dd>${stores.length} toko dalam satu akun</dd></div>${s ? `<div><dt>Nomor WhatsApp toko utama</dt><dd>+${e(s.phone)}</dd></div><div><dt>Alamat toko utama</dt><dd>${e(s.address)}</dd></div>` : ""}</dl><h2 class="form-section-title">Dokumen identitas</h2>${["ktp", "nib"].map((type) => `<div class="document-card"><strong>${type === "ktp" ? "KTP pemilik · wajib" : "NIB / dokumen usaha · opsional"}</strong><p>${e(u[type]?.name || "Tidak dilampirkan")}</p>${u[type] ? `<button class="text-button" data-action="show-document" data-user="${u.id}" data-doc="${type}">Lihat dokumen</button>` : ""}</div>`).join("")}<p class="form-text">Dokumen bersifat privat dan tidak ditampilkan pada toko publik.</p>${u.verificationReason ? notice("<strong>Catatan pemeriksaan</strong>" + e(u.verificationReason), u.verification === "rejected" ? "danger" : "info") : ""}<div class="form-actions">${u.verification !== "verified" ? `<button class="btn btn-outline-danger" data-action="verify-owner" data-id="${u.id}" data-status="rejected">Minta Perbaikan</button><button class="btn btn-primary" data-action="verify-owner" data-id="${u.id}" data-status="verified">Setujui Identitas</button>` : badge("Identitas sudah disetujui", "success")}</div></section><aside><section class="panel"><h2>Toko milik pemilik</h2>${stores.length ? stores.map((store) => `<div class="document-card"><div class="seller-identity">${storeLogo(store, "sm")}<div><strong>${e(store.name)}</strong><p>${e(store.city)}</p></div></div>${Pasarin.visibleStore(store) ? badge("Toko tampil", "success") : badge("Tidak tampil", "danger")}<div class="mt-3">${btn("Lihat pratinjau ↗", "toko.html?id=" + store.id + "&preview=1", "outline-primary", 'target="_blank" rel="noopener"')}</div></div>`).join("") : notice("Pemilik belum membuka toko.")}</section><div class="mt-4">${notice("<strong>Tinjau identitas pemilik</strong>Keputusan berlaku untuk seluruh toko akun ini. Toko dapat tayang selama verifikasi berjalan.", "warning")}</div></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-categories"] = (d) => {
    const query = params().get("q") || "";
    const list = d.categories.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase()),
    );
    return workspace(
      `${pageHeader("Kelola Kategori", "Bantu pembeli menemukan produk lokal dengan kategori yang sesuai.", `<button class="btn btn-primary" data-action="category-form">+ Tambah Kategori</button>`)}<section class="panel">${filterForm("admin-category-filter", query, "", null)}${
        list.length
          ? table(
              ["Kategori", "Produk", "Toko", "Aksi"],
              list.map((c) => [
                `<div><strong>${e(c.name)}</strong><p class="text-muted mb-0 mt-1">${e(c.description)}</p></div>`,
                String(d.products.filter((p) => p.categoryId === c.id).length),
                String(d.stores.filter((s) => s.categoryId === c.id).length),
                `<div class="table-actions"><button class="text-button" data-action="category-form" data-id="${c.id}">Edit</button><button class="text-button text-danger" data-action="delete-category" data-id="${c.id}">Hapus</button></div>`,
              ]),
            )
          : empty(
              "Kategori belum ditemukan",
              "Tambahkan kategori atau ubah pencarian.",
            )
      }</section>`,
      d,
      true,
    );
  };
  Views["admin-reports"] = (d) => {
    const query = params().get("q") || "",
      status = params().get("status") || "";
    let list = d.reports.filter((r) => !status || r.status === status);
    if (query)
      list = list.filter((r) =>
        (contentTarget(r, d).name + " " + r.reason + " " + r.id)
          .toLowerCase()
          .includes(query.toLowerCase()),
      );
    return workspace(
      `${pageHeader("Moderasi Konten", "Tinjau laporan dengan adil dan catat alasan setiap keputusan.")}<section class="panel">${filterForm(
        "admin-report-filter",
        query,
        status,
        [
          ["open", "Diperiksa"],
          ["kept", "Dipertahankan"],
          ["hidden", "Disembunyikan"],
        ],
      )}${
        list.length
          ? table(
              ["Konten / Laporan", "Alasan", "Diterima", "Status", "Aksi"],
              list.map((r) => {
                const t = contentTarget(r, d);
                return [
                  `<div><strong>${e(t.name)}</strong><p class="text-muted mb-0 mt-1">${e(r.id.toUpperCase())} · ${r.targetType === "product" ? "Produk" : r.targetType === "store" ? "Toko" : "Ulasan"}</p></div>`,
                  e(r.reason),
                  date(r.createdAt),
                  reportStatus(r),
                  `<div class="table-actions"><a href="${url("admin/laporan-detail.html?id=" + r.id)}">Tinjau</a></div>`,
                ];
              }),
            )
          : empty(
              "Tidak ada laporan pada filter ini",
              "Laporan baru akan muncul untuk diperiksa.",
              btn(
                "Lihat semua laporan",
                "admin/laporan.html",
                "outline-primary",
              ),
            )
      }</section>`,
      d,
      true,
    );
  };
  Views["admin-report-detail"] = (d) => {
    const report = d.reports.find((r) => r.id === params().get("id"));
    if (!report)
      return workspace(
        empty(
          "Laporan tidak ditemukan",
          "Pilih laporan dari daftar moderasi.",
          btn("Daftar laporan", "admin/laporan.html"),
        ),
        d,
        true,
      );
    const t = contentTarget(report, d),
      reporter = d.users.find((u) => u.id === report.reporterId);
    return workspace(
      `${pageHeader("Detail Laporan", report.id.toUpperCase() + " · " + date(report.createdAt), reportStatus(report), "admin/laporan.html")}<div class="split-layout"><section class="panel"><h2>Konten yang dilaporkan</h2>${t.image ? `<img class="moderation-image" src="${media(t.image)}" alt="${e(t.name)}">` : ""}<h3 class="mt-3">${e(t.name)}</h3>${t.product ? `<strong class="product-price">${money(t.product.price)}</strong>` : ""}<p class="mt-3">${e(t.description)}</p>${t.review ? `<div class="stars mb-3">${"★".repeat(t.review.rating)}${"☆".repeat(5 - t.review.rating)}</div>` : ""}${t.store ? `<div class="seller-panel"><div class="seller-identity mb-0">${storeLogo(t.store)}<div><strong>${e(t.store.name)}</strong><p>${e(t.store.city)}</p></div></div></div>` : ""}<h2 class="form-section-title">Tentukan keputusan</h2><p class="text-muted">Periksa konten dan alasan laporan sebelum mengambil keputusan. Setiap keputusan memerlukan alasan.</p>${report.decisionReason ? notice("<strong>Keputusan terakhir</strong>" + e(report.decisionReason), report.status === "hidden" ? "danger" : "success") : ""}<div class="heading-actions"><button class="btn btn-outline-primary" data-action="moderate" data-id="${report.id}" data-decision="kept">${report.status === "hidden" ? "Tampilkan kembali" : "Pertahankan"}</button><button class="btn btn-danger" data-action="moderate" data-id="${report.id}" data-decision="hidden">Sembunyikan</button></div></section><aside><section class="panel"><h2>Identitas pelapor</h2><div class="seller-identity">${UI.avatar(reporter?.name || "Pengguna")}<div><strong>${e(reporter?.name || "Pengguna tidak tersedia")}</strong><small class="text-muted">${e(reporter?.email || "")}</small></div></div><dl class="key-values"><div><dt>Diterima</dt><dd>${date(report.createdAt)}</dd></div><div><dt>Alasan laporan</dt><dd>${e(report.reason)}</dd></div><div><dt>Keterangan</dt><dd>${e(report.description)}</dd></div></dl></section><div class="mt-4">${notice("<strong>Dampak keputusan</strong>Pertahankan: konten mengikuti status tayangnya. Sembunyikan: konten tidak tampil kepada publik dan dapat ditampilkan kembali.", "warning")}</div></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-stores"] = (d) => {
    const query = params().get("q") || "",
      status = params().get("status") || "";
    let list = d.stores.filter(
      (s) =>
        (!query ||
          (
            s.name +
            " " +
            s.city +
            " " +
            d.users.find((u) => u.id === s.ownerId)?.name
          )
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        (!status ||
          (status === "active"
            ? Pasarin.visibleStore(s)
            : !Pasarin.visibleStore(s))),
    );
    return workspace(
      `${pageHeader("Kelola Toko", "Tinjau data dan status toko pada PASARIN.")}<section class="panel">${filterForm(
        "admin-store-filter",
        query,
        status,
        [
          ["active", "Tampil"],
          ["inactive", "Tidak tampil"],
        ],
      )}${
        list.length
          ? table(
              ["Toko / Pemilik", "Lokasi", "Produk", "Status", "Aksi"],
              list.map((s) => [
                `<div class="seller-identity mb-0">${storeLogo(s, "sm")}<div><strong>${e(s.name)}</strong><small class="text-muted">${e(d.users.find((u) => u.id === s.ownerId)?.name)}</small></div></div>`,
                e(s.city),
                String(d.products.filter((p) => p.storeId === s.id).length),
                d.users.find((u) => u.id === s.ownerId)?.blocked
                  ? badge("Pemilik diblokir", "danger")
                  : Pasarin.visibleStore(s)
                    ? badge("Aktif", "success")
                    : badge("Tidak tampil", "danger"),
                `<div class="table-actions"><a href="${url("admin/toko-detail.html?id=" + s.id)}">Detail</a><a href="${url("admin/toko-edit.html?id=" + s.id)}">Edit</a></div>`,
              ]),
            )
          : empty(
              "Toko belum ditemukan",
              "Ubah pencarian atau filter status toko.",
            )
      }</section>`,
      d,
      true,
    );
  };
  Views["admin-store-detail"] = (d) => {
    const s = d.stores.find((s) => s.id === params().get("id"));
    if (!s)
      return workspace(
        empty(
          "Toko tidak ditemukan",
          "Pilih toko dari daftar.",
          btn("Daftar toko", "admin/toko.html"),
        ),
        d,
        true,
      );
    const u = d.users.find((u) => u.id === s.ownerId);
    return workspace(
      `${pageHeader("Detail Toko", "Informasi dan status toko pada platform.", Pasarin.visibleStore(s) ? badge("Aktif", "success") : badge("Tidak tampil", "danger"), "admin/toko.html")}<div class="split-layout"><section class="panel"><div class="seller-identity">${storeLogo(s, "lg")}<div><h2 class="mb-2">${e(s.name)}</h2>${UI.verification(u)}</div></div>${s.banner ? `<img class="admin-store-banner" src="${media(s.banner)}" alt="Banner toko">` : ""}<p class="mt-3">${e(s.description)}</p><dl class="key-values"><div><dt>Pemilik</dt><dd><a href="${url("admin/verifikasi-detail.html?id=" + u.id)}">${e(u.name)}</a></dd></div><div><dt>Kategori</dt><dd>${e(category(d, s.categoryId))}</dd></div><div><dt>Alamat toko</dt><dd>${e(s.address)}</dd></div><div><dt>Lokasi</dt><dd>${e(s.city)}</dd></div><div><dt>WhatsApp</dt><dd>+${e(s.phone)}</dd></div></dl>${s.adminReason ? notice("<strong>Catatan admin</strong>" + e(s.adminReason), "warning") : ""}${u.blocked ? notice("<strong>Pemilik diblokir</strong>" + e(u.blockReason), "danger") : ""}<div class="form-actions">${btn("Edit Toko", "admin/toko-edit.html?id=" + s.id)}<button class="btn ${s.active ? "btn-outline-danger" : "btn-outline-primary"}" data-action="toggle-content" data-type="store" data-id="${s.id}" data-enable="${s.active ? "0" : "1"}">${s.active ? "Nonaktifkan" : "Aktifkan"} Toko</button></div></section><aside class="panel"><h2>Pratinjau publik</h2><p class="text-muted">${d.products.filter((p) => p.storeId === s.id).length} produk terdaftar.</p>${btn("Lihat pratinjau ↗", "toko.html?id=" + s.id + "&preview=1", "outline-primary", 'target="_blank" rel="noopener"')}<hr><p class="form-text">Nonaktifkan toko menyembunyikan seluruh produknya. Pemblokiran pemilik berlaku untuk semua toko miliknya.</p><a href="${url("admin/pemilik.html?q=" + encodeURIComponent(u.name))}">Kelola akun pemilik →</a></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-store-edit"] = (d) => {
    const s = d.stores.find((s) => s.id === params().get("id"));
    if (!s)
      return workspace(
        empty(
          "Toko tidak ditemukan",
          "Pilih toko dari daftar.",
          btn("Daftar toko", "admin/toko.html"),
        ),
        d,
        true,
      );
    return workspace(
      `${pageHeader("Edit Toko", "Perbarui informasi toko secara bertanggung jawab.", "", "admin/toko-detail.html?id=" + s.id)}<div class="split-layout"><section class="panel">${OwnerUI.storeForm(s, d, true)}</section>${OwnerUI.profilePreview(
        s,
        d.users.find((u) => u.id === s.ownerId),
        d,
      )}</div>`,
      d,
      true,
    );
  };
  Views["admin-products"] = (d) => {
    const query = params().get("q") || "",
      status = params().get("status") || "";
    let list = d.products.filter(
      (p) =>
        (!query ||
          (p.name + " " + d.stores.find((s) => s.id === p.storeId)?.name)
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        (!status ||
          (status === "active"
            ? Pasarin.visibleProduct(p)
            : !Pasarin.visibleProduct(p))),
    );
    return workspace(
      `${pageHeader("Kelola Produk", "Tinjau informasi dan visibilitas produk pada katalog.")}<section class="panel">${filterForm(
        "admin-product-filter",
        query,
        status,
        [
          ["active", "Tampil"],
          ["hidden", "Tidak tampil"],
        ],
      )}${list.length ? OwnerUI.productRows(list, d, true) : empty("Produk belum ditemukan", "Coba kata kunci atau status yang berbeda.")}</section>`,
      d,
      true,
    );
  };
  Views["admin-product-detail"] = (d) => {
    const p = d.products.find((p) => p.id === params().get("id"));
    if (!p)
      return workspace(
        empty(
          "Produk tidak ditemukan",
          "Pilih produk dari daftar.",
          btn("Daftar produk", "admin/produk.html"),
        ),
        d,
        true,
      );
    const s = d.stores.find((s) => s.id === p.storeId);
    return workspace(
      `${pageHeader("Detail Produk", "Informasi dan status produk pada platform.", Pasarin.visibleProduct(p) ? badge("Tampil", "success") : badge("Tidak tampil", "danger"), "admin/produk.html")}<div class="split-layout"><section class="panel"><div class="admin-product-gallery"><img class="admin-main-product" src="${media(p.images[0])}" alt="${e(p.name)}"><div><h2>${e(p.name)}</h2><strong class="product-price">${money(p.price)}</strong><p class="mt-3">${e(p.description)}</p></div></div><dl class="key-values"><div><dt>Kategori</dt><dd>${e(category(d, p.categoryId))}</dd></div><div><dt>Toko</dt><dd><a href="${url("admin/toko-detail.html?id=" + s.id)}">${e(s.name)}</a></dd></div><div><dt>Status pemilik</dt><dd>${d.users.find((u) => u.id === s.ownerId)?.blocked ? badge("Diblokir", "danger") : badge("Aktif", "success")}</dd></div><div><dt>Status produk</dt><dd>${p.active ? "Aktif" : "Draf"}${p.moderationHidden ? " · disembunyikan admin" : ""}</dd></div></dl>${p.adminReason ? notice("<strong>Catatan admin</strong>" + e(p.adminReason), "warning") : ""}<div class="form-actions">${btn("Edit Produk", "admin/produk-edit.html?id=" + p.id)}<button class="btn ${p.moderationHidden ? "btn-outline-primary" : "btn-outline-danger"}" data-action="toggle-content" data-type="product" data-id="${p.id}" data-enable="${p.moderationHidden ? "1" : "0"}">${p.moderationHidden ? "Tampilkan" : "Sembunyikan"} Produk</button></div></section><aside class="panel"><h2>Pratinjau produk</h2>${btn("Lihat pratinjau ↗", "produk.html?id=" + p.id + "&preview=1", "outline-primary", 'target="_blank" rel="noopener"')}<hr><p class="text-muted">Visibilitas mengikuti status produk, toko, moderasi, dan akun pemilik.</p></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-product-edit"] = (d) => {
    const p = d.products.find((p) => p.id === params().get("id"));
    if (!p)
      return workspace(
        empty(
          "Produk tidak ditemukan",
          "Pilih produk dari daftar.",
          btn("Daftar produk", "admin/produk.html"),
        ),
        d,
        true,
      );
    const s = d.stores.find((s) => s.id === p.storeId);
    return workspace(
      `${pageHeader("Edit Produk", "Perbarui informasi produk pada katalog.", "", "admin/produk-detail.html?id=" + p.id)}<div class="split-layout form-wide"><section class="panel">${OwnerUI.productForm(p, s, d, true)}</section><aside class="panel"><h2>Toko pemilik</h2><div class="seller-identity">${storeLogo(s)}<div><strong>${e(s.name)}</strong><p>${e(s.city)}</p></div></div><p class="text-muted">Perubahan admin terlihat pada area pemilik dan katalog.</p></aside></div>`,
      d,
      true,
    );
  };
  Views["admin-owners"] = (d) => {
    const query = params().get("q") || "",
      status = params().get("status") || "";
    const owners = d.users.filter(
      (u) =>
        u.role === "owner" &&
        (!query ||
          (u.name + " " + u.email)
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        (!status || (status === "blocked" ? u.blocked : !u.blocked)),
    );
    return workspace(
      `${pageHeader("Akun Pemilik", "Kelola pembatasan akun untuk menjaga kepercayaan pengguna.")}<section class="panel">${filterForm(
        "admin-owner-filter",
        query,
        status,
        [
          ["active", "Aktif"],
          ["blocked", "Diblokir"],
        ],
      )}${
        owners.length
          ? table(
              ["Pemilik", "Toko", "Verifikasi", "Status akun", "Aksi"],
              owners.map((u) => [
                `<div><strong>${e(u.name)}</strong><p class="text-muted mb-0 mt-1">${e(u.email)}</p>${u.blocked ? `<small class="text-danger">${e(u.blockReason)}</small>` : ""}</div>`,
                String(d.stores.filter((s) => s.ownerId === u.id).length),
                UI.verification(u),
                u.blocked
                  ? badge("Diblokir", "danger")
                  : badge("Aktif", "success"),
                `<div class="table-actions"><button class="text-button ${u.blocked ? "" : "text-danger"}" data-action="block-owner" data-id="${u.id}" data-block="${u.blocked ? "0" : "1"}">${u.blocked ? "Buka blokir" : "Blokir akun"}</button></div>`,
              ]),
            )
          : empty(
              "Akun pemilik belum ditemukan",
              "Coba ubah filter atau pencarian.",
            )
      }</section>`,
      d,
      true,
    );
  };
  const filterRoutes = {
    "admin-verification-filter": "admin/verifikasi.html",
    "admin-category-filter": "admin/kategori.html",
    "admin-report-filter": "admin/laporan.html",
    "admin-store-filter": "admin/toko.html",
    "admin-product-filter": "admin/produk.html",
    "admin-owner-filter": "admin/pemilik.html",
  };
  Object.entries(filterRoutes).forEach(
    ([name, route]) =>
      (Forms[name] = (fd) => {
        const p = new URLSearchParams();
        for (const key of ["q", "status"])
          if (fd.get(key)) p.set(key, fd.get(key));
        location.href = url(route + (p.size ? "?" + p : ""));
      }),
  );
  Forms["admin-store"] = async (fd, form) => {
    const s = Pasarin.snapshot().stores.find((s) => s.id === form.dataset.id);
    Pasarin.adminSaveStore(await OwnerUI.storeValues(fd, s), s.id);
    location.href = url("admin/toko-detail.html?id=" + s.id + "&saved=1");
  };
  Forms["admin-product"] = async (fd, form) => {
    const d = Pasarin.snapshot(),
      p = d.products.find((p) => p.id === form.dataset.id),
      s = d.stores.find((s) => s.id === p.storeId);
    Pasarin.saveProduct(await OwnerUI.productValues(fd, p, s), p.id, true);
    location.href = url("admin/produk-detail.html?id=" + p.id + "&saved=1");
  };
  Actions["category-form"] = (el) => {
    const c = Pasarin.snapshot().categories.find((c) => c.id === el.dataset.id);
    UI.formModal(
      c ? "Edit kategori" : "Tambah kategori",
      `${field("Nama kategori", "name", c?.name || "", { required: true, attrs: 'minlength="2" maxlength="60"' })}${field("Deskripsi", "description", c?.description || "", { area: true, attrs: 'maxlength="300"' })}`,
      "Simpan kategori",
      (fd) => {
        Pasarin.saveCategory(fd.get("name"), fd.get("description"), c?.id);
        App.render();
        UI.toast("Kategori berhasil disimpan.");
      },
    );
  };
  Actions["delete-category"] = (el) => {
    const c = Pasarin.snapshot().categories.find((c) => c.id === el.dataset.id);
    UI.confirm(
      "Hapus kategori?",
      "Kategori " +
        c.name +
        " akan dihapus. Kategori yang masih digunakan toko atau produk tidak dapat dihapus.",
      () => {
        Pasarin.deleteCategory(c.id);
        App.render();
        UI.toast("Kategori berhasil dihapus.");
      },
      { submit: "Hapus kategori" },
    );
  };
  Actions["verify-owner"] = (el) => {
    const approved = el.dataset.status === "verified";
    UI.confirm(
      approved ? "Setujui identitas pemilik?" : "Minta perbaikan identitas?",
      approved
        ? "Persetujuan berlaku untuk seluruh toko milik akun ini."
        : "Jelaskan informasi atau dokumen yang perlu diperbaiki pemilik.",
      (fd) => {
        Pasarin.verifyOwner(
          el.dataset.id,
          el.dataset.status,
          fd.get("reason") || "Identitas pemilik telah diperiksa.",
        );
        App.render();
        UI.toast(
          approved
            ? "Identitas pemilik disetujui."
            : "Permintaan perbaikan telah dicatat.",
        );
      },
      {
        reason: !approved,
        kind: approved ? "primary" : "danger",
        submit: approved ? "Setujui Identitas" : "Kirim permintaan",
      },
    );
  };
  Actions.moderate = (el) => {
    const hidden = el.dataset.decision === "hidden";
    UI.confirm(
      hidden ? "Sembunyikan konten?" : "Pertahankan konten?",
      hidden
        ? "Konten tidak akan ditampilkan pada area publik. Keputusan dapat ditinjau kembali."
        : "Konten akan mengikuti status aktif, toko, dan akun pemiliknya.",
      (fd) => {
        Pasarin.moderate(el.dataset.id, el.dataset.decision, fd.get("reason"));
        App.render();
        UI.toast("Keputusan moderasi berhasil disimpan.");
      },
      {
        reason: true,
        kind: hidden ? "danger" : "primary",
        submit: hidden ? "Sembunyikan konten" : "Simpan keputusan",
      },
    );
  };
  Actions["toggle-content"] = (el) => {
    const enable = el.dataset.enable === "1";
    const type = el.dataset.type;
    UI.confirm(
      (enable ? "Aktifkan " : "Batasi ") +
        (type === "store" ? "toko?" : "produk?"),
      type === "store"
        ? "Status operasional toko berlaku untuk seluruh produk di toko ini."
        : "Visibilitas produk tetap mengikuti status aktif/draf, toko, dan akun pemilik.",
      (fd) => {
        Pasarin.adminToggle(type, el.dataset.id, enable, fd.get("reason"));
        App.render();
        UI.toast("Status berhasil diperbarui.");
      },
      {
        reason: true,
        kind: enable ? "primary" : "danger",
        submit: enable ? "Aktifkan" : "Simpan pembatasan",
      },
    );
  };
  Actions["block-owner"] = (el) => {
    const blocked = el.dataset.block === "1";
    UI.confirm(
      blocked ? "Blokir akun pemilik?" : "Buka blokir akun pemilik?",
      blocked
        ? "Seluruh toko dan produk milik akun ini akan disembunyikan. Pemilik hanya dapat mengakses informasi pembatasan dan bantuan."
        : "Akun dapat kembali mengelola toko. Visibilitas tetap mengikuti pengaturan masing-masing toko dan produk.",
      (fd) => {
        Pasarin.blockOwner(el.dataset.id, blocked, fd.get("reason"));
        App.render();
        UI.toast(blocked ? "Akun pemilik diblokir." : "Blokir akun dibuka.");
      },
      {
        reason: true,
        kind: blocked ? "danger" : "primary",
        submit: blocked ? "Blokir akun" : "Buka blokir",
      },
    );
  };
})();
