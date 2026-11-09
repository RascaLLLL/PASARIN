# PASARIN — audit fungsi frontend

Tanggal: 9 November 2026. Pengujian melalui Chrome 157 dan Playwright pada server lokal. Backend Laravel, OAuth, email, dan pengiriman pesan WhatsApp belum termasuk implementasi ini.

## Hasil

- 27 dari 27 skenario fungsi lulus.
- 7 dari 7 kelompok pemeriksaan tampilan/animasi lulus, termasuk 33 pemeriksaan komponen pencarian.
- Tidak ditemukan error JavaScript yang tidak tertangani selama pengujian tersebut.
- Pemeriksaan statis lulus: 32 halaman HTML, 8 file JavaScript, 167 aset Figma lokal.
- Lebar layar yang diperiksa: 360, 390, 768, 1024, dan 1440 piksel.

Hasil mesin: [fungsi](results.json) dan [tampilan/animasi](../ui-refinement/audit-results.json). Hasil ini menyatakan alur yang diuji lulus; bukan jaminan semua kemungkinan interaksi bebas bug.

## Bug yang ditemukan dan diperbaiki

| ID | Dampak | Reproduksi sebelum perbaikan | Perbaikan dan verifikasi |
| --- | --- | --- | --- |
| BUG-01 | Tinggi: logout dan aksi utama tidak merespons klik saat transisi | Login admin, langsung klik Keluar selagi View Transition aktif. Klik mouse langsung tidak mengubah halaman; sesi tetap `u-admin`. Lapisan snapshot menghalangi hit testing tombol. | Snapshot dibatasi pada judul yang tidak interaktif. Kontrol tetap pada DOM aktif; konten memakai animasi DOM. AUTH-01 menguji tiga klik langsung, semuanya ketika transisi aktif, lalu memeriksa sesi kosong dan penolakan akses admin. UI-01 memeriksa tombol Tambah Kategori langsung setelah navigasi. |
| BUG-02 | Tinggi: identitas sesi lama masih terbaca setelah logout dari tab lain | Logout di tab kedua; penyimpanan sesi sudah kosong, tetapi `current()` di tab pertama masih mengembalikan admin dari memori. Form yang belum disimpan juga menghambat pembaruan sesi. | Ketiadaan sesi tersimpan berarti logout. Memori hanya menjadi cadangan ketika penyimpanan tidak tersedia. Perubahan identitas menutup dialog/menu dan mencabut tampilan privat, termasuk form yang belum disimpan. Logout memakai penggantian riwayat; halaman yang dipulihkan lewat Back memeriksa sesi kembali. AUTH-03/08 dan BLOCK-01 lulus. |
| BUG-03 | Sedang: tautan WhatsApp salah setelah admin mengedit nomor | Admin menyimpan nomor `081299998888`; toko menghasilkan `wa.me/081299998888`. | Pemilik dan admin memakai normalisasi nomor yang sama. Awalan `0` diubah menjadi `62` dan nomor divalidasi. ADMIN-02 menghasilkan `wa.me/6281299998888`. |
| BUG-04 | Sedang: status produk admin menyesatkan | Nonaktifkan toko, buka filter produk tersembunyi. Produk dari toko tersebut masih diberi badge Aktif. | Status produk mempertimbangkan blokir pemilik, status toko, pembatasan toko, moderasi produk, dan draf. ADMIN-03 memeriksa empat produk berlabel Toko nonaktif; BLOCK-01 memeriksa label Pemilik diblokir. Visibilitas publik dan pemulihan status ikut diuji. |

## Cakupan regresi fungsi

| Skenario | Pemeriksaan melalui UI |
| --- | --- |
| AUTH-01–04 | Klik mouse langsung saat transisi; logout dari seluruh 13 halaman admin; dropdown akun; Back; menu mobile dan pembersihan backdrop. Sesi tersimpan dan `current()` harus kosong. |
| AUTH-05–09 | Logout pemilik, pembeli desktop/mobile, akun diblokir; logout tab lain ketika form privat belum disimpan; kredensial salah; pembeli tidak dapat mengakses admin. |
| UI-01 | Tombol utama langsung dapat diklik saat navigasi berlangsung. |
| ACCOUNT-01–03 | Konfirmasi sandi, registrasi, ubah akun, persistensi setelah reload, login ulang, simulasi Google/Facebook, reset sandi sekali pakai dan login dengan sandi baru. |
| CATALOG-01 | Katalog tamu, kombinasi pencarian dan kategori, hasil kosong, detail produk, nomor dan pesan pada tautan WhatsApp. |
| REVIEW-01 | Wajib login, tambah/edit satu ulasan per akun/produk, teks berisi HTML tampil aman, pemilik tidak dapat mengulas produk sendiri. |
| OWNER-01–03 | KTP wajib, NIB opsional, unggahan invalid ditolak, dua toko dari satu akun, langsung tayang sebelum verifikasi, pilihan toko tersimpan, produk pemilik lain tidak dapat diedit. |
| PRODUCT-01–02 | Tambah draf, publikasi, ubah harga, batal hapus, hapus, visibilitas publik, harga invalid dan lebih dari lima foto ditolak. |
| ADMIN-01–03 | Kategori tambah/edit/batal/hapus, nama duplikat, kategori terpakai tidak bisa dihapus, normalisasi WhatsApp, nonaktifkan/pulihkan toko dan status produk turunannya. |
| VERIFY-01 | Alasan penolakan wajib, alasan terlihat oleh pemilik, pengajuan ulang, persetujuan dan badge terverifikasi; publikasi tetap berjalan saat pemeriksaan identitas. |
| MODERATION-01 | Kirim laporan, laporan duplikat ditolak, alasan moderasi wajib, sembunyikan/pulihkan produk dan periksa tampilan publik. |
| BLOCK-01 | Pergantian akun di tab lain mencabut form privat lama, blokir seluruh toko pemilik, status produk, penolakan akses pemilik, logout akun diblokir, buka blokir dan akses kembali. |
| HELP-01 | FAQ, kirim chat, balasan contoh, buka ulang percakapan. |

## Metode dan batas

Login, logout, penyimpanan, penghapusan, dan moderasi dijalankan lewat tombol/form. Pemeriksaan data internal digunakan untuk membaca hasil, bukan mengganti tindakan logout dengan pemanggilan layanan. Tes logout menggunakan `page.mouse.click` dan hit testing tanpa penantian actionability yang bisa menyembunyikan masalah lapisan animasi. Pada regresi akhir AUTH-01, ketiga observasi klik mencatat `hittable: true` dan `transitionActive: true`.

Setiap skenario memakai konteks browser baru. Data browser pengguna tidak direset. Karena demo menyimpan satu sesi per origin, mengganti akun di tab lain mengganti sesi untuk seluruh tab pada konteks tersebut; tes memeriksa pencabutan akses saat perubahan itu terjadi.

Audit UI memeriksa overflow, pencarian satu baris, navigasi maju/kembali, dialog, CRUD kategori, pergantian toko, galeri, dan reduced motion. Screenshot kategori desktop/mobile juga ditinjau. Browser Firefox/Safari, perangkat fisik, integrasi backend, dan layanan eksternal belum diuji.

## Menjalankan ulang

Jalankan `npm start` pada terminal pertama. Pada terminal kedua:

```sh
npm run check
npm test
```

Gunakan `npm run test:functional` untuk audit fungsi atau `npm run test:ui` untuk audit tampilan saja. Playwright dan Chrome/Chromium diperlukan. `PASARIN_TEST_URL` dan `PASARIN_BROWSER` dapat diatur sesuai lingkungan; lihat README. Sesudah memperbarui kode, gunakan Ctrl+F5 pada browser pengguna.
