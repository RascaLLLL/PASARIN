/* Demo repository. Replace this adapter with Laravel API calls during BE integration. */
(function () {
  "use strict";
  const KEY = "pasarin.demo.v2";
  const SESSION = "pasarin.session.v2";
  const AS = window.PASARIN_ASSETS || {};
  const A = (context, key, fallback = "") => AS[context]?.[key] || fallback;
  const catImage = (i) => A("catalog_desktop", "imgFotoProduk" + (i || ""));
  const clone = (x) => JSON.parse(JSON.stringify(x));
  const uid = (prefix) =>
    prefix +
    "-" +
    (window.crypto?.randomUUID?.() ||
      Date.now().toString(36) + Math.random().toString(36).slice(2));
  const now = () => new Date().toISOString();
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  let db,
    memorySession = null,
    memoryOnlySession = false,
    persistent = true;
  async function digest(value) {
    if (window.crypto?.subtle) {
      const bytes = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(value),
      );
      return Array.from(new Uint8Array(bytes), (b) =>
        b.toString(16).padStart(2, "0"),
      ).join("");
    }
    // Compatibility for browser file previews. This is a local demo, not authentication security.
    return "demo:" + btoa(unescape(encodeURIComponent(value)));
  }
  async function seed() {
    const passwordHash = await digest("Demo12345");
    const users = [
      {
        id: "u-buyer",
        name: "Raka Pratama",
        username: "raka",
        email: "pembeli@pasarin.id",
        role: "buyer",
        verification: "none",
      },
      {
        id: "u-sari",
        name: "Sari Wulandari",
        username: "sari",
        email: "umkm@pasarin.id",
        role: "owner",
        verification: "verified",
        ktp: { name: "KTP-contoh.pdf", demo: true },
        nib: { name: "NIB-contoh.pdf", demo: true },
      },
      {
        id: "u-admin",
        name: "Aditya Prakoso",
        username: "admin",
        email: "admin@pasarin.id",
        role: "admin",
        verification: "none",
      },
      {
        id: "u-laras",
        name: "Laras Puspita",
        username: "laras",
        email: "laras@pasarin.id",
        role: "owner",
        verification: "pending",
        ktp: { name: "KTP-Laras-contoh.pdf", demo: true },
      },
      {
        id: "u-anyam",
        name: "Rizky Hidayat",
        username: "rizky",
        email: "rizky@pasarin.id",
        role: "owner",
        verification: "pending",
        ktp: { name: "KTP-Rizky-contoh.pdf", demo: true },
      },
      {
        id: "u-rona",
        name: "Dewi Anggraini",
        username: "dewi",
        email: "dewi@pasarin.id",
        role: "owner",
        verification: "pending",
        ktp: { name: "KTP-Dewi-contoh.pdf", demo: true },
      },
      {
        id: "u-aren",
        name: "Bagas Saputra",
        username: "bagas",
        email: "bagas@pasarin.id",
        role: "owner",
        verification: "verified",
        ktp: { name: "KTP-Bagas-contoh.pdf", demo: true },
      },
      {
        id: "u-mode",
        name: "Nadia Putri",
        username: "nadia",
        email: "nadia@pasarin.id",
        role: "owner",
        verification: "verified",
        ktp: { name: "KTP-Nadia-contoh.pdf", demo: true },
      },
      {
        id: "u-snack",
        name: "Fajar Ramadhan",
        username: "fajar",
        email: "fajar@pasarin.id",
        role: "owner",
        verification: "verified",
        ktp: { name: "KTP-Fajar-contoh.pdf", demo: true },
      },
      {
        id: "u-blocked",
        name: "Bima Contoh",
        username: "bima",
        email: "diblokir@pasarin.id",
        role: "owner",
        verification: "rejected",
        blocked: true,
        blockReason:
          "Akun contoh dibatasi karena informasi usaha perlu diperiksa.",
        verificationReason: "Mohon unggah kembali identitas yang terbaca.",
        ktp: { name: "KTP-contoh.pdf", demo: true },
      },
    ].map((u) => ({
      blocked: false,
      createdAt: "2026-11-08T02:12:00.000Z",
      passwordHash,
      ...u,
    }));
    const categories = [
      {
        id: "c-home",
        name: "Rumah & gaya hidup",
        description: "Pilihan untuk keseharian dan rumah Anda.",
      },
      {
        id: "c-food",
        name: "Makanan & minuman",
        description: "Rasa lokal dari tangan pelaku UMKM.",
      },
      {
        id: "c-fashion",
        name: "Busana",
        description: "Pakaian dan aksesori buatan lokal.",
      },
      {
        id: "c-craft",
        name: "Kerajinan & hadiah",
        description: "Karya tangan dan hadiah bermakna.",
      },
    ];
    const stores = [
      {
        id: "s-cafe",
        ownerId: "u-sari",
        name: "Dikala Senja Cafe",
        categoryId: "c-food",
        city: "Jakarta Selatan",
        address: "Jl. Sudirman No. 28, Jakarta Selatan, DKI Jakarta 55153",
        phone: "6281234567890",
        initials: "dsc.",
        description:
          "Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami, kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu.",
        banner: A("store_desktop", "imgBannerDikalaSenjaCafe"),
        visits: 1284,
      },
      {
        id: "s-roastery",
        ownerId: "u-sari",
        name: "Dikala Senja Roastery",
        categoryId: "c-food",
        city: "Jakarta Selatan",
        address: "Jl. Senja No. 12, Jakarta Selatan",
        phone: "6281234567890",
        initials: "dsr.",
        description: "Toko kedua Dikala Senja untuk pilihan kopi rumahan.",
        visits: 126,
      },
      {
        id: "s-laras",
        ownerId: "u-laras",
        name: "Laras Batik Studio",
        categoryId: "c-fashion",
        city: "Yogyakarta",
        initials: "LB",
        description: "Cerita Nusantara dalam setiap helai batik.",
      },
      {
        id: "s-anyam",
        ownerId: "u-anyam",
        name: "Anyam Nusantara",
        categoryId: "c-craft",
        city: "Tasikmalaya",
        initials: "AN",
        description: "Kerajinan bambu dari tangan perajin lokal.",
      },
      {
        id: "s-rona",
        ownerId: "u-rona",
        name: "Ruang Rona",
        categoryId: "c-home",
        city: "Jakarta",
        initials: "RR",
        description: "Hal kecil yang merawat hari-harimu.",
      },
      {
        id: "s-aren",
        ownerId: "u-aren",
        name: "Aren Nusantara",
        categoryId: "c-food",
        city: "Banten",
        initials: "AR",
        description: "Manis alami dari kebun dan dapur lokal.",
      },
      {
        id: "s-mode",
        ownerId: "u-mode",
        name: "Rona Lokal",
        categoryId: "c-fashion",
        city: "Bandung",
        initials: "RL",
        description: "Busana dan aksesori untuk langkah sehari-hari.",
      },
      {
        id: "s-snack",
        ownerId: "u-snack",
        name: "Camilan Sahabat",
        categoryId: "c-food",
        city: "Bandung",
        initials: "CS",
        description: "Camilan renyah untuk menemani waktu bersama.",
      },
      {
        id: "s-blocked",
        ownerId: "u-blocked",
        name: "Toko Contoh Dibatasi",
        categoryId: "c-home",
        city: "Jakarta",
        initials: "TC",
        description: "Contoh toko dengan akun pemilik diblokir.",
      },
    ].map((s) => ({
      active: true,
      moderationHidden: false,
      phone: "6281234567890",
      address: s.city,
      logo: "",
      banner: "",
      visits: 120,
      createdAt: "2026-11-08T02:12:00.000Z",
      ...s,
    }));
    const specs = [
      ["Arabica Gayo", 65000, "s-cafe", "c-food", "Biji kopi", "Jakarta"],
      ["Coconut Sugar", 30000, "s-aren", "c-food", "Gula kelapa", "Banten"],
      ["Hand Cream", 45000, "s-rona", "c-home", "Krim tangan", "Jakarta"],
      ["Pure Matcha", 13000, "s-cafe", "c-food", "Matcha", "Jakarta"],
      [
        "Kipas Anyaman Bambu",
        25000,
        "s-anyam",
        "c-craft",
        "Kipas bambu",
        "Tasikmalaya",
      ],
      ["Kain Batik", 35000, "s-laras", "c-fashion", "Kain batik", "Yogyakarta"],
      [
        "Crispy Banana",
        15000,
        "s-snack",
        "c-food",
        "Keripik pisang",
        "Bandung",
      ],
      ["Kopi Susu Sahabat", 15000, "s-cafe", "c-food", "Kopi susu", "Jakarta"],
      ["Popcorn Pop", 20000, "s-snack", "c-food", "Popcorn", "Jakarta"],
      [
        "Singkong Crispy",
        15000,
        "s-snack",
        "c-food",
        "Keripik singkong",
        "Bogor",
      ],
      ["Kemeja Pria", 105000, "s-mode", "c-fashion", "Kemeja pria", "Jakarta"],
      [
        "Kemeja Linen",
        150000,
        "s-mode",
        "c-fashion",
        "Kemeja linen",
        "Jakarta",
      ],
      [
        "Jam Tangan Glardo",
        235000,
        "s-mode",
        "c-fashion",
        "Jam tangan",
        "Tangerang",
      ],
      ["Cardigan", 125000, "s-mode", "c-fashion", "Kardigan wanita", "Bandung"],
      ["Cloudy Bag", 199000, "s-mode", "c-fashion", "Tas wanita", "Jakarta"],
      ["Orange Juice", 15000, "s-cafe", "c-food", "Jus jeruk botol", "Jakarta"],
    ];
    const products = specs.map((p, i) => ({
      id: "p-" + String(i + 1).padStart(3, "0"),
      name: p[0],
      price: p[1],
      storeId: p[2],
      categoryId: p[3],
      type: p[4],
      city: p[5],
      description: `${p[0]} pilihan dari pelaku usaha lokal. Dibuat dengan perhatian pada bahan dan kualitas. Hubungi penjual untuk informasi ukuran, varian, dan ketersediaan produk.`,
      images: [catImage(i)],
      active: true,
      moderationHidden: false,
      createdAt: "2026-11-08T02:12:00.000Z",
    }));
    products[0].description =
      "Lahir dari tanah pegunungan tinggi Aceh Tengah, Arabica Gayo menghadirkan cita rasa klasik yang kaya, seimbang, dan berkarakter kuat. Ditanam secara organik di atas ketinggian 1.200–1.500 mdpl, setiap bijinya memetik nutrisi alami tanah vulkanis untuk menciptakan cangkir kopi yang intens namun tetap lembut di mulut.";
    products[0].images = [
      A("product_desktop", "imgFotoUtamaArabicaGayo", catImage(0)),
      ...["imgFotoGaleri", "imgFotoGaleri1", "imgFotoGaleri2"]
        .map((k) => A("product_desktop", k))
        .filter(Boolean),
    ];
    const reviews = Array.from({ length: 48 }, (_, i) => ({
      id: "r-seed-" + i,
      userId: "u-review-" + i,
      author: [
        "Nadia Putri",
        "Andi Saputra",
        "Dina Maharani",
        "Rizky Pratama",
        "Ayu Lestari",
        "Fajar Nugraha",
      ][i % 6],
      targetType: "store",
      targetId: "s-cafe",
      rating: i < 5 ? 4 : 5,
      comment: [
        "Produknya sesuai deskripsi, penjual ramah dan responsif.",
        "Pilihan lokal yang berkualitas. Akan pesan lagi.",
        "Suka dengan kualitas dan perhatian pada kemasannya.",
      ][i % 3],
      createdAt:
        "2026-11-" + String(8 - (i % 7)).padStart(2, "0") + "T03:00:00.000Z",
      hidden: false,
    }));
    reviews.push(
      ...Array.from({ length: 12 }, (_, i) => ({
        id: "rp-seed-" + i,
        userId: "u-rp-" + i,
        author: ["Nadia Putri", "Andi Saputra", "Dina Maharani"][i % 3],
        targetType: "product",
        targetId: "p-001",
        rating: i === 0 ? 4 : 5,
        comment:
          "Aromanya segar dan rasanya seimbang. Penjual membantu menjelaskan pilihan kopinya.",
        createdAt: "2026-11-08T03:00:00.000Z",
        hidden: false,
      })),
    );
    const reports = [
      {
        id: "lap-001",
        targetType: "product",
        targetId: "p-001",
        reason: "Kategori tidak sesuai",
        description: "Mohon ditinjau kesesuaian konten dengan kategori produk.",
        reporterId: "u-buyer",
      },
      {
        id: "lap-002",
        targetType: "store",
        targetId: "s-anyam",
        reason: "Informasi tidak sesuai",
        description:
          "Mohon periksa kembali informasi kontak usaha pada profil toko.",
        reporterId: "u-buyer",
      },
      {
        id: "lap-003",
        targetType: "review",
        targetId: "r-seed-1",
        reason: "Spam",
        description: "Ada ulasan yang perlu diperiksa oleh moderator.",
        reporterId: "u-laras",
      },
    ].map((r) => ({
      status: "open",
      createdAt: "2026-11-08T02:12:00.000Z",
      decisionReason: "",
      ...r,
    }));
    return {
      version: 2,
      users,
      categories,
      stores,
      products,
      reviews,
      reports,
      chats: [],
      recovery: [],
      audit: [],
    };
  }
  function save(next) {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch (error) {
      if (error.name === "QuotaExceededError")
        throw new Error(
          "Penyimpanan demo penuh. Gunakan gambar lebih kecil atau hapus data yang tidak dipakai.",
        );
      persistent = false;
    }
    db = next;
    window.dispatchEvent(new CustomEvent("pasarin:data"));
  }
  function change(fn) {
    const next = clone(db);
    const result = fn(next);
    save(next);
    return result;
  }
  function current() {
    let id = memorySession;
    if (!memoryOnlySession) {
      try {
        // An absent stored session is logout, never a reason to revive memory.
        id = localStorage.getItem(SESSION);
        memorySession = id;
      } catch (_) {
        memoryOnlySession = true;
      }
    }
    return db.users.find((u) => u.id === id) || null;
  }
  function setSession(id) {
    memorySession = id;
    try {
      if (id) localStorage.setItem(SESSION, id);
      else localStorage.removeItem(SESSION);
      memoryOnlySession = false;
    } catch (_) {
      memoryOnlySession = true;
    }
  }
  function normalizePhone(value) {
    let phone = String(value || "").replace(/\D/g, "");
    if (phone.startsWith("0")) phone = "62" + phone.slice(1);
    assert(/^[1-9]\d{8,14}$/.test(phone), "Nomor WhatsApp tidak valid.");
    return phone;
  }
  function userGuard() {
    const u = current();
    assert(u, "Silakan masuk terlebih dahulu.");
    assert(!u.blocked, "Akun Anda sedang diblokir.");
    return u;
  }
  function adminGuard() {
    const u = userGuard();
    assert(u.role === "admin", "Akses hanya untuk admin.");
    return u;
  }
  function ownerGuard(storeId) {
    const u = userGuard();
    assert(u.role === "owner", "Lengkapi identitas pemilik terlebih dahulu.");
    if (storeId)
      assert(
        db.stores.some((s) => s.id === storeId && s.ownerId === u.id),
        "Toko ini bukan milik Anda.",
      );
    return u;
  }
  function log(d, action, targetId, reason = "") {
    d.audit.unshift({
      id: uid("a"),
      actorId: current()?.id,
      action,
      targetId,
      reason,
      createdAt: now(),
    });
  }
  function visibleStore(s) {
    return (
      !!s &&
      s.active &&
      !s.moderationHidden &&
      !db.users.find((u) => u.id === s.ownerId)?.blocked
    );
  }
  function visibleProduct(p) {
    return (
      !!p &&
      p.active &&
      !p.moderationHidden &&
      visibleStore(db.stores.find((s) => s.id === p.storeId))
    );
  }
  function ownStores() {
    const u = current();
    return db.stores.filter((s) => s.ownerId === u?.id);
  }
  function selectedStore() {
    let id;
    try {
      id = localStorage.getItem("pasarin.store." + current()?.id);
    } catch (_) {}
    return ownStores().find((s) => s.id === id) || ownStores()[0] || null;
  }
  function targetStore(type, id) {
    if (type === "store") return db.stores.find((s) => s.id === id);
    if (type === "product")
      return db.stores.find(
        (s) => s.id === db.products.find((p) => p.id === id)?.storeId,
      );
    if (type === "review") {
      const r = db.reviews.find((r) => r.id === id);
      return r ? targetStore(r.targetType, r.targetId) : null;
    }
  }
  const S = (window.Pasarin = {
    A,
    uid,
    now,
    persistent: () => persistent,
    snapshot: () => clone(db),
    current,
    ownStores,
    selectedStore,
    visibleStore,
    visibleProduct,
    targetStore,
    async init() {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (
            parsed.version === 2 &&
            Array.isArray(parsed.users) &&
            Array.isArray(parsed.products)
          )
            db = parsed;
        }
      } catch (_) {
        persistent = false;
      }
      if (!db) save(await seed());
      return S;
    },
    refresh() {
      try {
        const fresh = JSON.parse(localStorage.getItem(KEY));
        if (fresh?.version === 2) db = fresh;
      } catch (_) {}
    },
    selectStore(id) {
      ownerGuard(id);
      try {
        localStorage.setItem("pasarin.store." + current().id, id);
      } catch (_) {}
    },
    async login(login, password) {
      const u = db.users.find(
        (u) =>
          u.email.toLowerCase() === login.trim().toLowerCase() ||
          u.username.toLowerCase() === login.trim().toLowerCase(),
      );
      assert(
        u && u.passwordHash === (await digest(password)),
        "Nama pengguna/email atau kata sandi tidak sesuai.",
      );
      setSession(u.id);
      return clone(u);
    },
    socialLogin(provider, id) {
      assert(
        ["Google", "Facebook"].includes(provider),
        "Penyedia akun tidak dikenali.",
      );
      const u = db.users.find(
        (u) => u.id === id && ["u-buyer", "u-sari"].includes(id),
      );
      assert(u, "Pilih akun contoh yang tersedia.");
      setSession(u.id);
      return clone(u);
    },
    logout() {
      setSession(null);
    },
    async register(values) {
      const name = values.name.trim(),
        username = values.username.trim(),
        email = values.email.trim().toLowerCase();
      assert(name.length >= 2, "Nama minimal 2 karakter.");
      assert(
        /^[a-zA-Z0-9_.]{3,30}$/.test(username),
        "Nama pengguna terdiri dari 3–30 huruf, angka, titik, atau garis bawah.",
      );
      assert(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        "Masukkan alamat email yang valid.",
      );
      assert(
        !db.users.some(
          (u) =>
            u.email.toLowerCase() === email ||
            u.username.toLowerCase() === username.toLowerCase(),
        ),
        "Email atau nama pengguna sudah terdaftar.",
      );
      assert(values.password.length >= 8, "Kata sandi minimal 8 karakter.");
      const passwordHash = await digest(values.password);
      const u = {
        id: uid("u"),
        name,
        username,
        email,
        passwordHash,
        role: "buyer",
        verification: "none",
        blocked: false,
        createdAt: now(),
      };
      change((d) => d.users.push(u));
      setSession(u.id);
      return u;
    },
    async updateAccount(values) {
      const u = userGuard();
      const email = values.email.trim().toLowerCase();
      assert(
        !db.users.some((x) => x.id !== u.id && x.email.toLowerCase() === email),
        "Email sudah dipakai akun lain.",
      );
      let passwordHash;
      if (values.password) {
        assert(values.password.length >= 8, "Kata sandi minimal 8 karakter.");
        assert(
          u.passwordHash === (await digest(values.currentPassword)),
          "Kata sandi saat ini tidak sesuai.",
        );
        passwordHash = await digest(values.password);
      }
      change((d) => {
        const x = d.users.find((x) => x.id === u.id);
        x.name = values.name.trim();
        x.email = email;
        if (passwordHash) x.passwordHash = passwordHash;
      });
    },
    requestRecovery(email) {
      const user = db.users.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
      );
      const token = uid("reset");
      change((d) => {
        if (user) {
          d.recovery = d.recovery.filter((r) => r.userId !== user.id);
          d.recovery.push({
            token,
            userId: user.id,
            expires: Date.now() + 3600000,
          });
        }
      });
      return user ? token : null;
    },
    validRecovery(token) {
      return db.recovery.some(
        (r) => r.token === token && r.expires > Date.now(),
      );
    },
    async resetPassword(token, password) {
      const r = db.recovery.find(
        (r) => r.token === token && r.expires > Date.now(),
      );
      assert(r, "Tautan pemulihan tidak valid atau sudah kedaluwarsa.");
      assert(password.length >= 8, "Kata sandi minimal 8 karakter.");
      const hash = await digest(password);
      change((d) => {
        d.users.find((u) => u.id === r.userId).passwordHash = hash;
        d.recovery = d.recovery.filter((x) => x.token !== token);
      });
    },
    submitIdentity(values) {
      const u = userGuard();
      assert(u.role !== "admin", "Akun admin tidak dapat membuka toko.");
      assert(values.ktp || u.ktp, "KTP wajib diunggah.");
      change((d) => {
        const x = d.users.find((x) => x.id === u.id);
        x.name = values.name.trim();
        x.ktp = values.ktp || x.ktp;
        x.nib = values.nib || x.nib || null;
        x.role = "owner";
        x.verification = "pending";
        x.verificationReason = "";
        x.submittedAt = now();
      });
    },
    saveStore(values, id) {
      const u = ownerGuard(id);
      assert(values.name.trim().length >= 3, "Nama toko minimal 3 karakter.");
      assert(
        db.categories.some((c) => c.id === values.categoryId),
        "Pilih kategori toko.",
      );
      const phone = normalizePhone(values.phone);
      assert(
        values.address.trim() && values.city.trim(),
        "Alamat dan kota wajib diisi.",
      );
      const storeId = id || uid("s");
      change((d) => {
        const old = d.stores.find((s) => s.id === id);
        const data = {
          ...values,
          name: values.name.trim(),
          phone,
          ownerId: u.id,
        };
        if (old) Object.assign(old, data);
        else
          d.stores.push({
            id: storeId,
            active: true,
            moderationHidden: false,
            logo: "",
            banner: "",
            visits: 0,
            createdAt: now(),
            ...data,
          });
      });
      S.selectStore(storeId);
      return storeId;
    },
    saveProduct(values, id, asAdmin = false) {
      const u = asAdmin ? adminGuard() : ownerGuard(values.storeId);
      const old = db.products.find((p) => p.id === id);
      if (id) assert(old, "Produk tidak ditemukan.");
      if (!asAdmin && old)
        assert(
          db.stores.find((s) => s.id === old.storeId)?.ownerId === u.id,
          "Produk ini bukan milik Anda.",
        );
      assert(values.name.trim().length >= 3, "Nama produk minimal 3 karakter.");
      assert(Number(values.price) > 0, "Harga harus lebih dari Rp0.");
      assert(
        values.description.trim().length >= 10,
        "Deskripsi minimal 10 karakter.",
      );
      assert(
        db.categories.some((c) => c.id === values.categoryId),
        "Pilih kategori produk.",
      );
      assert(values.images?.length, "Tambahkan minimal satu foto produk.");
      const productId = id || uid("p");
      change((d) => {
        const data = {
          ...values,
          name: values.name.trim(),
          price: Number(values.price),
          updatedAt: now(),
        };
        if (old)
          Object.assign(
            d.products.find((p) => p.id === id),
            data,
          );
        else
          d.products.push({
            id: productId,
            active: true,
            moderationHidden: false,
            createdAt: now(),
            ...data,
          });
        if (asAdmin) log(d, "Ubah produk", productId);
      });
      return productId;
    },
    deleteProduct(id) {
      const p = db.products.find((p) => p.id === id);
      assert(p, "Produk tidak ditemukan.");
      ownerGuard(p.storeId);
      change((d) => {
        d.products = d.products.filter((p) => p.id !== id);
        d.reviews = d.reviews.filter(
          (r) => !(r.targetType === "product" && r.targetId === id),
        );
        log(d, "Hapus produk", id);
      });
    },
    saveReview(type, id, rating, comment) {
      const u = userGuard();
      const store = targetStore(type, id);
      assert(store && visibleStore(store), "Toko tidak tersedia.");
      if (type === "product")
        assert(
          visibleProduct(db.products.find((p) => p.id === id)),
          "Produk tidak tersedia.",
        );
      assert(
        store.ownerId !== u.id,
        "Anda tidak dapat mengulas toko atau produk milik sendiri.",
      );
      assert(Number(rating) >= 1 && Number(rating) <= 5, "Pilih rating 1–5.");
      assert(comment.trim().length >= 10, "Ulasan minimal 10 karakter.");
      change((d) => {
        const existing = d.reviews.find(
          (r) =>
            r.userId === u.id && r.targetType === type && r.targetId === id,
        );
        if (existing) {
          existing.rating = Number(rating);
          existing.comment = comment.trim();
          existing.updatedAt = now();
        } else
          d.reviews.unshift({
            id: uid("r"),
            userId: u.id,
            author: u.name,
            targetType: type,
            targetId: id,
            rating: Number(rating),
            comment: comment.trim(),
            hidden: false,
            createdAt: now(),
          });
      });
    },
    report(type, id, reason, description) {
      const u = userGuard();
      assert(
        !db.reports.some(
          (r) =>
            r.reporterId === u.id &&
            r.targetType === type &&
            r.targetId === id &&
            r.status === "open",
        ),
        "Laporan Anda untuk konten ini sedang diperiksa.",
      );
      assert(
        reason && description.trim().length >= 10,
        "Pilih alasan dan isi keterangan minimal 10 karakter.",
      );
      change((d) =>
        d.reports.unshift({
          id: uid("lap"),
          reporterId: u.id,
          targetType: type,
          targetId: id,
          reason,
          description: description.trim(),
          status: "open",
          decisionReason: "",
          createdAt: now(),
        }),
      );
    },
    verifyOwner(id, status, reason) {
      adminGuard();
      assert(
        ["verified", "rejected"].includes(status),
        "Status keputusan tidak valid.",
      );
      if (status === "rejected")
        assert(
          reason.trim().length >= 5,
          "Jelaskan alasan perbaikan minimal 5 karakter.",
        );
      change((d) => {
        const u = d.users.find((u) => u.id === id && u.role === "owner");
        assert(u, "Pemilik tidak ditemukan.");
        u.verification = status;
        u.verificationReason = reason.trim();
        u.reviewedAt = now();
        log(d, "Verifikasi " + status, id, reason);
      });
    },
    saveCategory(name, description, id) {
      adminGuard();
      const clean = name.trim();
      assert(clean.length >= 2, "Nama kategori minimal 2 karakter.");
      assert(
        !db.categories.some(
          (c) => c.id !== id && c.name.toLowerCase() === clean.toLowerCase(),
        ),
        "Nama kategori sudah digunakan.",
      );
      change((d) => {
        const existing = d.categories.find((c) => c.id === id);
        if (existing)
          Object.assign(existing, {
            name: clean,
            description: description.trim(),
          });
        else
          d.categories.push({
            id: uid("c"),
            name: clean,
            description: description.trim(),
          });
      });
    },
    deleteCategory(id) {
      adminGuard();
      assert(
        !db.products.some((p) => p.categoryId === id) &&
          !db.stores.some((s) => s.categoryId === id),
        "Kategori masih digunakan toko atau produk. Pindahkan kategorinya terlebih dahulu.",
      );
      change((d) => (d.categories = d.categories.filter((c) => c.id !== id)));
    },
    moderate(id, decision, reason) {
      adminGuard();
      assert(reason.trim().length >= 5, "Alasan keputusan minimal 5 karakter.");
      change((d) => {
        const r = d.reports.find((r) => r.id === id);
        assert(r, "Laporan tidak ditemukan.");
        assert(["kept", "hidden"].includes(decision), "Keputusan tidak valid.");
        r.status = decision;
        r.decisionReason = reason.trim();
        r.decidedAt = now();
        const list =
          r.targetType === "product"
            ? d.products
            : r.targetType === "store"
              ? d.stores
              : d.reviews;
        const item = list.find((x) => x.id === r.targetId);
        if (item) {
          if (r.targetType === "review") item.hidden = decision === "hidden";
          else item.moderationHidden = decision === "hidden";
        }
        log(d, "Moderasi " + decision, r.targetId, reason);
      });
    },
    adminToggle(type, id, enabled, reason) {
      adminGuard();
      assert(reason.trim().length >= 5, "Alasan tindakan minimal 5 karakter.");
      change((d) => {
        const list = type === "store" ? d.stores : d.products;
        const x = list.find((x) => x.id === id);
        assert(x, "Data tidak ditemukan.");
        if (type === "store") x.active = enabled;
        else x.moderationHidden = !enabled;
        x.adminReason = reason.trim();
        log(d, (enabled ? "Aktifkan " : "Nonaktifkan ") + type, id, reason);
      });
    },
    adminSaveStore(values, id) {
      adminGuard();
      const phone = normalizePhone(values.phone);
      assert(
        db.categories.some((c) => c.id === values.categoryId),
        "Pilih kategori toko.",
      );
      assert(
        values.city.trim() && values.address.trim(),
        "Alamat dan kota wajib diisi.",
      );
      change((d) => {
        const s = d.stores.find((s) => s.id === id);
        assert(s, "Toko tidak ditemukan.");
        assert(values.name.trim().length >= 3, "Nama toko minimal 3 karakter.");
        Object.assign(s, values, { name: values.name.trim(), phone });
        log(d, "Ubah toko", id);
      });
    },
    blockOwner(id, blocked, reason) {
      adminGuard();
      assert(reason.trim().length >= 5, "Alasan tindakan minimal 5 karakter.");
      change((d) => {
        const u = d.users.find((u) => u.id === id && u.role === "owner");
        assert(u, "Pemilik tidak ditemukan.");
        u.blocked = blocked;
        u.blockReason = reason.trim();
        log(d, blocked ? "Blokir akun" : "Buka blokir akun", id, reason);
      });
    },
    addChat(thread, text, from = "user") {
      assert(text.trim(), "Pesan belum diisi.");
      const identity = current()?.id || "guest";
      change((d) =>
        d.chats.push({
          id: uid("msg"),
          userId: identity,
          thread,
          text: text.trim().slice(0, 1000),
          from,
          createdAt: now(),
        }),
      );
    },
    chatMessages(thread) {
      const identity = current()?.id || "guest";
      return db.chats.filter(
        (m) => m.userId === identity && m.thread === thread,
      );
    },
    async resetDemo() {
      const fresh = await seed();
      S.logout();
      save(fresh);
    },
  });
})();
