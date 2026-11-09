from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[1]
ui=root/'assets/js/ui.js'
text=ui.read_text(encoding='utf-8')
if "eye:['login_desktop'" not in text:
    text=text.replace("const icons={search:","const icons={eye:['login_desktop','imgIcon'],search:")
text=text.replace('◉</button>',"${icon('eye')}</button>")
if not re.search(r'\bconst\s+mobileMenu\s*=', text):
    mobile='''    const mobileMenu=`<div class="public-mobile-nav dropdown"><button class="public-menu-button" data-bs-toggle="dropdown" aria-expanded="false"><span aria-hidden="true">☰</span> Menu</button><ul class="dropdown-menu dropdown-menu-end">${user?`<li><span class="dropdown-item-text text-muted">${e(user.name)}</span></li><li><a class="dropdown-item" href="${url('akun.html')}">Akun saya</a></li>`:`<li><a class="dropdown-item" href="${url('masuk.html')}">Masuk</a></li><li><a class="dropdown-item" href="${url('daftar.html')}">Daftar akun</a></li>`}<li><a class="dropdown-item" href="${url(user?.role==='admin'?'admin/index.html':user?.role==='owner'?'umkm/toko-saya.html':'umkm/buka-toko.html')}">${user?.role==='admin'?'Administrasi':user?.role==='owner'?'Toko saya':'Buka toko'}</a></li><li><a class="dropdown-item" href="${url('bantuan.html')}">Pusat Bantuan</a></li>${user?'<li><button class="dropdown-item text-danger" data-action="logout">Keluar</button></li>':''}</ul></div>`;
'''
    needle="    const user=Pasarin.current();\n    return `<header"
    assert needle in text
    text=text.replace(needle,"    const user=Pasarin.current();\n"+mobile+"    return `<header",1)
    text=text.replace('<nav class="category-nav"','${mobileMenu}<nav class="category-nav"',1)
start=text.index('  function productCard(')
end=text.index('\n  function statsCard',start)
text=text[:start]+'''  function productCard(p,d,context='catalog'){
    const store=d.stores.find(s=>s.id===p.storeId);
    const n=/^p-\\d{3}$/.test(p.id)?Number(p.id.slice(2))-1:-1;
    const original=A('catalog_desktop','imgFotoProduk'+(n||''));
    const seeded=n>=0&&(p.images[0]===original||(n===0&&p.images[0]===A('product_desktop','imgFotoUtamaArabicaGayo')));
    const variants={store:{'p-001':'imgFotoProduk','p-004':'imgFotoProduk1','p-008':'imgFotoProduk2','p-016':'imgFotoProduk3'},related:{'p-004':'imgFotoProduk','p-008':'imgFotoProduk1','p-016':'imgFotoProduk2'}};
    const sourceContext=context==='related'?'product_desktop':context==='store'?'store_desktop':'catalog_desktop';
    const source=seeded&&variants[context]?.[p.id]?A(sourceContext,variants[context][p.id],p.images[0]):p.images[0];
    const crop=seeded?'photo-'+context+'-'+p.id:'';
    return `<article class="product-card"><a class="product-picture ${crop}" href="${url('produk.html?id='+p.id)}" aria-label="Lihat ${e(p.name)}"><img src="${media(source)}" alt="${e(p.name)}" loading="lazy"></a><div class="product-card-body"><h3><a href="${url('produk.html?id='+p.id)}">${e(p.name)}</a></h3><p>${e(p.type||category(d,p.categoryId))} · ${e(p.city||store?.city)}</p><strong class="product-price">${money(p.price)}</strong><a class="btn btn-outline-primary btn-sm w-100" href="${url('produk.html?id='+p.id)}">Lihat detail</a></div></article>`;
  }'''+text[end:]
ui.write_text(text,encoding='utf-8')
public=root/'assets/js/pages-public.js'
text=public.read_text(encoding='utf-8')
start=text.index('  Views.store =')
end=text.index('  function authShell',start)
store=text[start:end].replace('products.map(p=>productCard(p,d))',"products.map(p=>productCard(p,d,'store'))")
public.write_text(text[:start]+store+text[end:],encoding='utf-8')

summary=json.loads((root/'tmp/figma/reference-summary.json').read_text(encoding='utf-8'))
css=['/* Exact image-fill geometry from the saved high-fidelity Figma references. */']
contexts=[('catalog_desktop','catalog',list(range(1,17)),False),('catalog_mobile','catalog',list(range(1,17)),True),('store_desktop','store',[1,4,8,16],False),('product_desktop','related',[4,8,16],False),('product_mobile','related',[4,8,16],True)]
for context,role,ids,mobile in contexts:
    lines=[]
    for image in summary[context]['image_geometry']:
        var=image['variable']
        if not re.fullmatch(r'imgFotoProduk\d*',var):continue
        index=int(var.removeprefix('imgFotoProduk') or 0)
        if index>=len(ids):continue
        classes=re.search(r'className="([^"]+)"',image['element']).group(1)
        props={'position':'absolute','left':'0','top':'0','width':'100%','height':'100%','max-width':'none'}
        special=False
        for token,prop in [('w','width'),('h','height'),('left','left'),('top','top')]:
            match=re.search(r'(?:^|\s)'+token+r'-\[([^]]+)\]',classes)
            if match:props[prop]=match.group(1);special=True
        props['object-fit']='fill' if special else 'cover'
        selector=f'.photo-{role}-p-{ids[index]:03d} img'
        lines.append(selector+'{'+''.join(f'{k}:{v};' for k,v in props.items())+'}')
    css.append(('@media(max-width:767.98px){' if mobile else '@media(min-width:768px){')+'\n'+'\n'.join(lines)+'\n}')
(root/'assets/css/figma-crops.css').write_text('\n'.join(css),encoding='utf-8')
app=root/'assets/css/app.css'
text=app.read_text(encoding='utf-8')
marker='/* Final reference alignment */'
if marker in text:text=text.split(marker)[0]
text+='''
/* Final reference alignment */
.public-header{position:relative}.public-mobile-nav{display:none}.product-price{font-family:Inter,Arial,sans-serif}.product-card h3{min-height:22px}.product-card-body>p{font-size:13px;min-height:18px}.product-card .btn{font-size:14px;min-height:44px}.product-card-body{gap:10px}.password-toggle .app-icon{width:18px;height:18px}.product-price{line-height:1.2}
@media(min-width:1251px){.catalog-hero{grid-template-columns:625px minmax(0,1fr)}}
@media(min-width:768px){.auth-form-wrap{padding-top:40px}}
@media(max-width:767.98px){.public-header{padding-bottom:16px}.public-header .category-nav{display:none}.public-account{display:none}.public-mobile-nav{display:block;position:absolute;right:20px;top:16px;z-index:1020}.public-menu-button{display:flex;gap:8px;align-items:center;border:0;background:transparent;color:var(--blue);font-size:12px;min-height:35px}.public-menu-button>span{font-size:18px}.product-card h3{min-height:42px;font-size:14px;line-height:1.4}.product-card-body>p{font-size:12px;min-height:36px;line-height:1.5}.product-card-body{gap:10px}.product-card .btn{font-size:14px;min-height:44px}.admin-product-gallery{grid-template-columns:1fr}.admin-main-product{height:260px}}
'''
app.write_text(text,encoding='utf-8')
generator=root/'tools/generate-pages.py'
text=generator.read_text(encoding='utf-8')
if 'figma-crops.css' not in text:text=text.replace('  <link rel="stylesheet" href="{base}assets/css/app.css">','  <link rel="stylesheet" href="{base}assets/css/app.css">\n  <link rel="stylesheet" href="{base}assets/css/figma-crops.css">')
generator.write_text(text,encoding='utf-8')
print('Aligned mobile navigation, product typography, eye icon, and exact seed-photo crops.')
