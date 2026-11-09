# PASARIN Frontend

Demo frontend PASARIN menggunakan HTML, CSS, JavaScript, dan Bootstrap 5.3.8. File halaman berdiri sendiri; tidak memerlukan bundler, framework JavaScript, PHP, atau database.

## Menjalankan

Dari folder proyek:

```sh
npm start
```

Buka **http://127.0.0.1:4173/**. Tidak perlu `npm install` untuk menjalankan aplikasi. Alternatifnya, gunakan Live Server atau server statis lain dari folder ini. Jalankan melalui server statis agar semua halaman memakai penyimpanan browser yang sama.

Bootstrap, font Inter/Arimo, dan aset gambar tersedia lokal. Tidak ada URL aset Figma sementara pada aplikasi.

## Akun demo

| Peran | Email | Kata sandi |
| --- | --- | --- |
| Pembeli | pembeli@pasarin.id | Demo12345 |
| Pemilik UMKM | umkm@pasarin.id | Demo12345 |
| Admin | admin@pasarin.id | Demo12345 |
| Pemilik diblokir | diblokir@pasarin.id | Demo12345 |

Pemilik demo mempunyai **Dikala Senja Cafe** dan **Dikala Senja Roastery**. Berpindah toko melalui pemilih toko di sidebar. Akun lain juga dapat didaftarkan dari halaman Daftar.

Pilih **Panduan demo** pada footer untuk melihat akun contoh atau mereset data. Reset mengganti perubahan browser dengan data awal setelah konfirmasi.

## Perilaku yang sudah tersedia

- Katalog, pencarian nama produk/toko, filter kategori, hasil kosong, detail produk, galeri, profil toko, dan tautan WhatsApp dengan pesan produk.
- Registrasi akun umum, login/logout, akun pribadi, simulasi Google/Facebook, serta simulasi email dan reset kata sandi dengan tautan sekali pakai.
- Rating/ulasan dan laporan konten wajib login. Satu ulasan per akun untuk satu produk/toko; dapat diedit. Pemilik tidak dapat mengulas usahanya sendiri.
- Pengajuan identitas pemilik: KTP wajib, NIB opsional, cukup sekali per akun. Dokumen contoh dapat dipratinjau pada area pemilik dan admin.
- Banyak toko dalam satu akun; tambah toko, pilih toko aktif, ubah profil/logo/banner, serta dashboard per toko.
- Tambah/edit/hapus produk, unggah sampai lima foto, pratinjau foto, produk aktif/draf, dan persetujuan aturan konten.
- Toko dan produk aktif langsung tayang setelah data lengkap, termasuk saat identitas masih menunggu pemeriksaan.
- Admin: dashboard, verifikasi identitas, permintaan perbaikan dan pengajuan ulang, kategori CRUD, moderasi laporan, edit dan pembatasan toko/produk, serta blokir/buka blokir pemilik beserta alasan.
- Pemblokiran menyembunyikan seluruh toko dan produk pemilik. Membuka blokir tetap menghormati status operasional toko dan moderasi produk.
- Pusat Bantuan, FAQ, chat dengan balasan contoh, notifikasi, validasi form, modal konfirmasi, dan menu mobile.
- Penyimpanan lokal, penanganan batas kapasitas unggahan, serta sinkronisasi perubahan antarhalaman/tab.

Semua integrasi eksternal selain tautan WhatsApp masih berupa simulasi. Statistik kunjungan/pertanyaan adalah data contoh. Tidak ada transaksi atau pembayaran di dalam PASARIN.

## Batas frontend

Autentikasi dan pembatasan akses pada versi ini merupakan logika demo di browser, bukan keamanan backend. Akun, hash kata sandi demo, dokumen contoh, dan unggahan disimpan pada browser. **Gunakan data dan dokumen contoh.** Backend Laravel nantinya harus menangani autentikasi, otorisasi, penyimpanan dokumen privat, upload, moderasi, dan integrasi penyedia akun/email.

## Struktur

```text
index.html, produk.html, toko.html, ...  Halaman publik dan akun
umkm/                                  Halaman pemilik UMKM
admin/                                 Halaman administrasi
assets/css/                            Gaya bersama, font, crop acuan Figma
assets/js/data.js                      Adapter data dan aturan bisnis demo
assets/js/ui.js                        Komponen tampilan bersama
assets/js/pages-public.js              Halaman dan tindakan publik/akun
assets/js/pages-owner.js               Halaman dan tindakan UMKM
assets/js/pages-admin.js               Halaman dan tindakan admin
assets/js/app.js                       Routing halaman, event, dialog, chat
assets/js/motion.js                    Transisi, galeri, prefetch, reduced motion
assets/images/, assets/icons/          Aset asli dari Figma
assets/vendor/                         Bootstrap lokal
tools/                                 Server statis dan pemeriksaan
tests/                                 Pengujian alur browser
output/                                Diagram, screenshot, dan hasil QA
tmp/figma/                             Referensi desain untuk pengembangan
```

Fungsi pada `data.js` menjadi titik penggantian ke API Laravel. Saat migrasi ke Blade, markup halaman dan komponen bisa dipindahkan ke layout/partial tanpa mengganti gaya visual.

## Acuan desain dan pemeriksaan

Acuan utama adalah pasangan frame Desktop/Mobile dalam file Figma PASARIN yang disepakati. Referensi beresolusi tinggi dan aset berhasil diambil untuk katalog, detail produk, toko publik, login/daftar, dashboard UMKM/admin, profil toko, detail verifikasi, dan detail laporan. Gambar, logo, cutout autentikasi, dan ikon memakai file lokal dari Figma. Crop foto produk mengikuti geometri acuan.

Batas paket Starter Figma tercapai saat mengambil frame tambahan. Layar yang belum berhasil diambil dibangun menggunakan komponen acuan dan spesifikasi fitur yang disepakati; layar tersebut belum dibandingkan satu per satu dengan frame Figma masing-masing.

Pemeriksaan:

```sh
npm run check
npm test
```

`check` tidak memerlukan dependensi tambahan. Pengujian browser memerlukan Playwright dan Chrome/Chromium; pada lingkungan pengembangan Codex, runtime bawaan dipakai. Untuk lingkungan lain, pasang Playwright sebagai alat pengujian dan tentukan `PASARIN_BROWSER` jika lokasi browser berbeda. Server statis harus berjalan sebelum `npm test`.

`npm test` menjalankan audit fungsi lalu audit tampilan dan animasi. Gunakan `npm run test:functional` atau `npm run test:ui` untuk menjalankannya terpisah. `PASARIN_TEST_URL` dapat diisi bila server memakai alamat/port lain. Setiap audit memakai konteks browser terpisah sehingga tidak mengubah data browser pengguna.

Audit fungsi mencakup logout melalui klik mouse langsung selama transisi, seluruh 13 halaman admin, menu desktop/mobile, semua peran, riwayat browser, perubahan sesi di tab lain ketika form belum disimpan, serta registrasi, pemulihan sandi, katalog, ulasan, unggahan, toko, produk, verifikasi, moderasi, dan pemblokiran. Laporan dan rincian hasil tersimpan pada `output/functional-qa/QA-REPORT.md` dan `output/functional-qa/results.json`.

Audit UI mencakup halaman admin/UMKM/publik, tombol pencarian, proporsi teks, navigasi maju dan kembali, CRUD kategori, ulasan, pergantian toko, galeri, dan reduced motion pada lebar 360, 390, 768, 1024, dan 1440 piksel. Hasilnya tersimpan pada `output/ui-refinement/audit-results.json`; laporan QA implementasi awal tetap ada pada `output/qa-results.json`.

## Transisi dan perapian UI

Navigasi tetap memakai halaman HTML biasa. Cross-Document View Transitions hanya mengambil snapshot judul yang tidak interaktif. Konten lain memakai animasi DOM ringan sekitar 140–240 ms; tombol, form, header, dan sidebar tetap bisa diklik selama transisi. Preferensi reduced motion menonaktifkan animasi. Tombol, kartu, modal, menu, dan pergantian foto galeri menggunakan waktu animasi yang konsisten.

Komponen pencarian memakai input fleksibel dan tombol dengan lebar sendiri agar teks "Cari" tidak pecah. Tipografi tabel, badge, dan judul admin diselaraskan. Server lokal memakai ETag/304 untuk file yang tidak berubah serta cache gambar/font/vendor agar navigasi berulang tidak mengunduh semua aset lagi. Setelah memperbarui versi ini, refresh browser dengan Ctrl+F5.

Acuan API transisi: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document

Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/ (MIT). Font Inter dan Arimo didistribusikan dengan lisensi SIL Open Font License; lihat `assets/vendor/`.
