(function () {
  "use strict";
  let activeChat = "help",
    chatReplyTimer;
  let renderedIdentity = "";
  const identityOf = (user) =>
    `${user?.id || "guest"}:${user?.role || ""}:${Boolean(user?.blocked)}`;
  function closeSessionOverlays() {
    clearTimeout(chatReplyTimer);
    document.querySelectorAll(".modal.show").forEach((element) => {
      window.bootstrap?.Modal.getInstance(element)?.hide();
    });
    document
      .querySelectorAll(".offcanvas.show, .offcanvas-lg.show")
      .forEach((element) => {
        window.bootstrap?.Offcanvas.getInstance(element)?.hide();
      });
    const modalBody = document.getElementById("app-modal-body");
    if (modalBody) modalBody.replaceChildren();
  }
  const { e, url, media, icon, field, notice } = UI;
  const page = document.body.dataset.page;
  window.App = {
    render() {
      const u = Pasarin.current();
      renderedIdentity = identityOf(u);
      const owner = page.startsWith("owner-"),
        admin = page.startsWith("admin-");
      if ((owner || admin || page === "account" || page === "blocked") && !u) {
        document.getElementById("app").replaceChildren();
        UI.requireLogin(undefined, { replace: true });
        return;
      }
      if (page === "blocked" && u && !u.blocked) {
        location.replace(url("akun.html"));
        return;
      }
      if (
        u?.blocked &&
        ![
          "blocked",
          "catalog",
          "product",
          "store",
          "help",
          "login",
          "forgot",
          "reset",
        ].includes(page)
      ) {
        location.replace(url("status-akun.html"));
        return;
      }
      if (admin && u?.role !== "admin") {
        document.getElementById("app").innerHTML = UI.publicShell(
          UI.empty(
            "Akses khusus admin",
            "Gunakan akun admin untuk membuka area ini.",
            UI.btn("Kembali ke katalog", "index.html"),
          ),
          Pasarin.snapshot(),
        );
        document.body.classList.remove("loading");
        window.PasarinMotion?.afterRender();
        return;
      }
      if (owner && u?.role === "admin") {
        location.replace(url("admin/index.html"));
        return;
      }
      if (
        owner &&
        u?.role !== "owner" &&
        !["owner-create-store", "owner-identity"].includes(page)
      ) {
        location.replace(url("umkm/identitas.html"));
        return;
      }
      if (
        owner &&
        u?.role === "owner" &&
        !Pasarin.selectedStore() &&
        ![
          "owner-stores",
          "owner-create-store",
          "owner-identity",
          "owner-status",
        ].includes(page)
      ) {
        location.replace(url("umkm/buka-toko.html"));
        return;
      }
      try {
        document.getElementById("app").innerHTML = (
          Views[page] || Views.notfound
        )(Pasarin.snapshot());
        document.body.classList.remove("loading");
        window.PasarinMotion?.afterRender();
      } catch (error) {
        console.error(error);
        document.getElementById("app").innerHTML = UI.publicShell(
          UI.empty(
            "Halaman belum dapat ditampilkan",
            error.message,
            UI.btn("Kembali ke katalog", "index.html"),
          ),
          Pasarin.snapshot(),
        );
      }
    },
  };
  Actions["toggle-password"] = (el) => {
    const input = document.getElementById(el.getAttribute("aria-controls"));
    input.type = input.type === "password" ? "text" : "password";
    el.setAttribute(
      "aria-label",
      input.type === "password"
        ? "Tampilkan kata sandi"
        : "Sembunyikan kata sandi",
    );
  };
  Actions.logout = () => {
    closeSessionOverlays();
    Pasarin.logout();
    document.getElementById("app").replaceChildren();
    location.replace(url("index.html"));
  };
  Actions.dismiss = (el) => el.closest(".app-alert").remove();
  Actions["select-store"] = (el) => {
    Pasarin.selectStore(el.value);
    App.render();
  };
  Actions["demo-guide"] = () =>
    UI.modal(
      "Panduan demo PASARIN",
      `${notice("Demo interaktif di browser ini. Gunakan data dan dokumen contoh.")}<div class="demo-guide-list">${[
        [
          "Pembeli",
          "pembeli@pasarin.id",
          "Memberi ulasan dan mengirim laporan.",
        ],
        [
          "Pemilik UMKM",
          "umkm@pasarin.id",
          "Mengelola dua toko, produk, dan identitas.",
        ],
        [
          "Admin",
          "admin@pasarin.id",
          "Verifikasi, kategori, moderasi, dan blokir akun.",
        ],
      ]
        .map(
          ([name, email, desc]) =>
            `<div class="demo-guide-item"><strong>${name}</strong><code>${email}</code><p class="text-muted mb-0 mt-1">${desc}</p></div>`,
        )
        .join(
          "",
        )}</div><p class="mt-3">Kata sandi semua akun contoh: <strong>Demo12345</strong></p><p class="form-text">Google/Facebook, email pemulihan, chat, dan statistik menggunakan simulasi. WhatsApp membuka tautan kontak toko.</p>`,
      `<button class="btn btn-outline-danger" data-action="reset-demo">Reset data demo</button><a class="btn btn-primary" href="${url("masuk.html")}">Pilih akun</a>`,
    );
  Actions["reset-demo"] = () =>
    UI.confirm(
      "Reset data demo?",
      "Semua perubahan, akun baru, unggahan, dan percakapan pada browser ini akan diganti dengan data contoh awal.",
      async () => {
        await Pasarin.resetDemo();
        location.href = url("index.html");
      },
      { submit: "Reset data" },
    );
  function chatContent() {
    const messages = Pasarin.chatMessages(activeChat);
    return `<div class="d-flex justify-content-between align-items-center mb-3"><strong>${activeChat === "help" ? "Bantuan PASARIN" : e(Pasarin.snapshot().stores.find((s) => s.id === activeChat)?.name || "Pesan toko")}</strong>${UI.badge("Simulasi chat", "blue")}</div><div class="chat-messages" id="chat-messages">${!messages.length ? `<div class="chat-message">Halo! Ada yang bisa kami bantu? Tanyakan tentang membuka toko, produk, ulasan, atau verifikasi.</div>` : messages.map((m) => `<div class="chat-message ${m.from === "user" ? "mine" : ""}">${e(m.text)}<small>${m.from === "user" ? "Anda" : "Asisten demo"} · ${new Date(m.createdAt).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</small></div>`).join("")}</div><form class="chat-composer" data-form="chat" novalidate><label class="visually-hidden" for="chat-input">Pesan</label><input class="form-control" id="chat-input" name="message" placeholder="Tulis pesan Anda…" required maxlength="1000" autocomplete="off"><button class="btn btn-primary" type="submit">Kirim</button></form><p class="form-text mt-2 mb-0">Percakapan ini menggunakan balasan contoh dan tersimpan pada browser Anda.</p>`;
  }
  Actions["open-chat"] = (el) => {
    activeChat = el.dataset.store || "help";
    UI.modal(
      "Pesan dan bantuan",
      chatContent(),
      '<button class="btn btn-outline-secondary" data-bs-dismiss="modal">Tutup</button>',
    );
    scrollChat();
  };
  function scrollChat() {
    setTimeout(() => {
      const el = document.getElementById("chat-messages");
      if (el) el.scrollTop = el.scrollHeight;
    }, 30);
  }
  Forms.chat = async (fd, form) => {
    const message = fd.get("message").trim();
    if (!message) return;
    Pasarin.addChat(activeChat, message);
    document.getElementById("app-modal-body").innerHTML = chatContent();
    scrollChat();
    document.getElementById("chat-input")?.focus();
    clearTimeout(chatReplyTimer);
    const thread = activeChat;
    chatReplyTimer = setTimeout(() => {
      const lower = message.toLowerCase();
      const reply = /ktp|nib|verif|identitas/.test(lower)
        ? "KTP wajib dan NIB opsional saat mendaftarkan identitas pemilik. Pengajuan cukup sekali per akun. Toko tetap bisa tayang saat pemeriksaan berjalan."
        : /buka|daftar|toko/.test(lower)
          ? "Untuk membuka toko, masuk lalu pilih Buka Toko. Satu akun dapat memiliki beberapa toko. Lengkapi identitas pemilik, kemudian isi data toko."
          : /produk|foto|harga/.test(lower)
            ? "Kelola produk dari menu Produk Saya. Tambahkan nama, kategori, harga, deskripsi, dan minimal satu foto. Produk aktif langsung tampil selama toko dan akun tidak dibatasi."
            : /rating|ulas/.test(lower)
              ? "Masuk terlebih dahulu untuk menulis ulasan. Anda dapat mengubah ulasan sendiri dan tidak dapat mengulas usaha milik sendiri."
              : /blokir|lapor|konten/.test(lower)
                ? "Gunakan Laporkan konten untuk meminta pemeriksaan admin. Admin mencatat alasan keputusan dan dapat menyembunyikan konten atau membatasi akun."
                : "Terima kasih! Anda dapat membuka Pusat Bantuan untuk panduan lengkap. Ini balasan contoh untuk simulasi chat PASARIN.";
      Pasarin.addChat(thread, reply, "bot");
      if (
        document.getElementById("app-modal")?.classList.contains("show") &&
        activeChat === thread
      ) {
        document.getElementById("app-modal-body").innerHTML = chatContent();
        scrollChat();
      }
    }, 650);
  };
  Actions["show-document"] = (el) => {
    const user = Pasarin.snapshot().users.find((u) => u.id === el.dataset.user);
    const doc = user?.[el.dataset.doc];
    const current = Pasarin.current();
    if (!current || !(current.role === "admin" || current.id === user?.id))
      throw new Error("Dokumen hanya dapat dilihat pemilik dan admin.");
    if (!doc) return;
    let body;
    if (doc.demo)
      body = `<div class="document-card"><strong>${e(doc.name)}</strong><p>Dokumen contoh untuk demonstrasi. Tidak berisi identitas asli.</p></div>${notice("Pada integrasi backend, dokumen identitas disimpan secara privat dan hanya dapat diakses pihak yang berwenang.")}`;
    else if (doc.type?.startsWith("image/"))
      body = `<img class="document-preview" src="${e(doc.data)}" alt="Pratinjau ${e(doc.name)}">`;
    else
      body = `<iframe title="Pratinjau ${e(doc.name)}" src="${e(doc.data)}" style="width:100%;height:60vh;border:1px solid var(--line)"></iframe>`;
    UI.modal(
      "Dokumen " + (el.dataset.doc === "ktp" ? "KTP" : "NIB"),
      body,
      '<button class="btn btn-outline-secondary" data-bs-dismiss="modal">Tutup</button>',
    );
  };
  document.addEventListener("click", async (event) => {
    const el = event.target.closest("[data-action]");
    if (!el || el.matches("select,input,textarea") || el.disabled) return;
    const action = Actions[el.dataset.action];
    if (!action) return;
    event.preventDefault();
    try {
      await action(el, event);
    } catch (error) {
      UI.toast(error.message || "Tindakan belum dapat dilakukan.", "danger");
    }
  });
  document.addEventListener("change", async (event) => {
    const el = event.target;
    if (el.matches("select[data-action]")) {
      try {
        await Actions[el.dataset.action]?.(el, event);
      } catch (error) {
        UI.toast(error.message, "danger");
      }
    }
    if (el.matches('input[type="file"][data-upload-preview]')) {
      const target = document.getElementById(el.dataset.uploadPreview);
      if (!target) return;
      target.innerHTML = "";
      for (const file of Array.from(el.files).slice(0, 5)) {
        if (!file.type.startsWith("image/")) continue;
        const image = document.createElement("img");
        const object = URL.createObjectURL(file);
        image.src = object;
        image.alt = "Pratinjau " + file.name;
        image.onload = () => URL.revokeObjectURL(object);
        target.append(image);
      }
    }
  });
  document.addEventListener("submit", async (event) => {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelector(":invalid")?.focus();
      return;
    }
    const handler = Forms[form.dataset.form];
    if (!handler) return;
    const submit = event.submitter;
    const original = submit?.innerHTML;
    const originalMinWidth = submit?.style.minWidth;
    if (submit) {
      submit.style.minWidth =
        Math.ceil(submit.getBoundingClientRect().width) + "px";
      submit.disabled = true;
      submit.classList.add("is-busy");
      submit.setAttribute("aria-busy", "true");
      const search = form.matches('.panel-toolbar, [role="search"]');
      submit.innerHTML = `<span class="button-spinner" aria-hidden="true"></span><span>${search ? "Cari" : "Memproses…"}</span>`;
    }
    const alert = form.querySelector(".form-alert");
    if (alert) alert.innerHTML = "";
    try {
      await handler(new FormData(form), form);
    } catch (error) {
      UI.formError(form, error.message || "Data belum dapat disimpan.");
    } finally {
      if (submit?.isConnected) {
        submit.disabled = false;
        submit.innerHTML = original;
        submit.style.minWidth = originalMinWidth;
        submit.classList.remove("is-busy");
        submit.removeAttribute("aria-busy");
      }
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key === null || event.key?.startsWith("pasarin.")) {
      Pasarin.refresh();
      const authChanged =
        event.key === "pasarin.session.v2" ||
        event.key === null ||
        identityOf(Pasarin.current()) !== renderedIdentity;
      if (authChanged) {
        closeSessionOverlays();
        App.render();
      } else if (!document.querySelector('form[data-dirty="true"]'))
        App.render();
    }
  });
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    Pasarin.refresh();
    if (identityOf(Pasarin.current()) !== renderedIdentity)
      closeSessionOverlays();
    App.render();
  });
  document.addEventListener("input", (event) => {
    event.target.closest("form")?.setAttribute("data-dirty", "true");
  });
  Pasarin.init()
    .then(() => {
      App.render();
      if (!Pasarin.persistent())
        UI.toast(
          "Penyimpanan browser tidak tersedia. Perubahan hanya bertahan selama halaman ini terbuka.",
          "danger",
        );
    })
    .catch((error) => {
      document.getElementById("app").innerHTML =
        `<main class="skeleton-shell"><h1>PASARIN belum dapat dibuka</h1><p>${e(error.message)}</p></main>`;
      console.error(error);
    });
})();
