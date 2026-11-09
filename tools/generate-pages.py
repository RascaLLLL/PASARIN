from pathlib import Path
from html import escape
root=Path(__file__).resolve().parents[1]
pages={
 'index.html':('catalog','Katalog Produk Lokal'),
 'produk.html':('product','Detail Produk'),
 'toko.html':('store','Profil Toko'),
 'masuk.html':('login','Masuk'),
 'daftar.html':('register','Daftar Akun'),
 'lupa-sandi.html':('forgot','Lupa Kata Sandi'),
 'reset-sandi.html':('reset','Atur Ulang Kata Sandi'),
 'akun.html':('account','Akun Saya'),
 'bantuan.html':('help','Pusat Bantuan'),
 'status-akun.html':('blocked','Status Akun'),
 '404.html':('notfound','Halaman Tidak Ditemukan'),
 'umkm/toko-saya.html':('owner-stores','Toko Saya'),
 'umkm/buka-toko.html':('owner-create-store','Buka Toko'),
 'umkm/identitas.html':('owner-identity','Identitas Pemilik'),
 'umkm/dashboard.html':('owner-dashboard','Dashboard UMKM'),
 'umkm/produk.html':('owner-products','Produk Saya'),
 'umkm/produk-form.html':('owner-product-form','Form Produk'),
 'umkm/profil-toko.html':('owner-profile','Profil Toko'),
 'umkm/status.html':('owner-status','Status UMKM'),
 'admin/index.html':('admin-dashboard','Ringkasan Admin'),
 'admin/verifikasi.html':('admin-verification','Verifikasi UMKM'),
 'admin/verifikasi-detail.html':('admin-verification-detail','Detail Verifikasi'),
 'admin/kategori.html':('admin-categories','Kelola Kategori'),
 'admin/laporan.html':('admin-reports','Moderasi Konten'),
 'admin/laporan-detail.html':('admin-report-detail','Detail Laporan'),
 'admin/toko.html':('admin-stores','Kelola Toko'),
 'admin/toko-detail.html':('admin-store-detail','Detail Toko'),
 'admin/toko-edit.html':('admin-store-edit','Edit Toko'),
 'admin/produk.html':('admin-products','Kelola Produk'),
 'admin/produk-detail.html':('admin-product-detail','Detail Produk Admin'),
 'admin/produk-edit.html':('admin-product-edit','Edit Produk Admin'),
 'admin/pemilik.html':('admin-owners','Akun Pemilik')
}
scripts=['vendor/bootstrap.bundle.min.js','js/figma-assets.js','js/data.js','js/ui.js','js/pages-public.js','js/pages-owner.js','js/pages-admin.js','js/app.js']
for name,(page,title) in pages.items():
    base='../' if '/' in name else ''
    script_tags='\n'.join(f'  <script src="{base}assets/{s}" defer'+(' blocking="render"' if s=='js/app.js' else '')+'></script>' for s in scripts)
    text=f'''<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#006ffd">
  <meta name="description" content="PASARIN, platform katalog dan promosi UMKM lokal. Temukan produk pilihan dan hubungi toko secara langsung.">
  <title>{escape(title)} | PASARIN</title>
  <link rel="stylesheet" href="{base}assets/vendor/bootstrap.min.css">
  <link rel="stylesheet" href="{base}assets/css/fonts.css">
  <link rel="stylesheet" href="{base}assets/css/app.css">
  <link rel="stylesheet" href="{base}assets/css/figma-crops.css">
  <link rel="stylesheet" href="{base}assets/css/motion.css">
  <script src="{base}assets/js/motion.js"></script>
{script_tags}
</head>
<body data-page="{page}" data-base="{base}" class="loading">
  <a class="skip-link" href="#main-content">Lewati ke konten</a>
  <div id="app"><main class="skeleton-shell"><h1>PASARIN</h1><p>Menyiapkan pilihan lokal untuk Anda…</p></main></div>
  <noscript><p class="alert alert-warning m-4">Aktifkan JavaScript untuk mencoba katalog dan fitur interaktif PASARIN.</p></noscript>
  <div class="modal fade" id="app-modal" tabindex="-1" aria-labelledby="app-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header"><h2 class="modal-title" id="app-modal-title"></h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button></div>
        <div class="modal-body" id="app-modal-body"></div>
        <div class="modal-footer" id="app-modal-footer"></div>
      </div>
    </div>
  </div>
  <div id="toast-region" class="toast-container position-fixed bottom-0 end-0 p-3" aria-live="polite" aria-atomic="true"></div>
</body>
</html>
'''
    dest=root/name
    dest.parent.mkdir(parents=True,exist_ok=True)
    dest.write_text(text,encoding='utf-8')
print(f'Generated {len(pages)} standalone HTML pages.')
