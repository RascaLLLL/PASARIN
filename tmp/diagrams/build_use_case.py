from pathlib import Path
from math import atan2, cos, sin, pi
from html import escape
import json
import xml.etree.ElementTree as ET

from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A3

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'output' / 'diagrams'
PDF_OUT = ROOT / 'output' / 'pdf'
OUT.mkdir(parents=True, exist_ok=True)
PDF_OUT.mkdir(parents=True, exist_ok=True)
for name, path in [('Arial', 'arial.ttf'), ('Arial-Bold', 'arialbd.ttf'), ('Arial-Italic', 'ariali.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path('C:/Windows/Fonts') / path)))

W, H = 1600, 2200
INK, MUTED, LIGHT = '#202A31', '#59636B', '#C6CDD2'
PDF_PATH = PDF_OUT / 'PASARIN-Use-Case-UML.pdf'
pdf = canvas.Canvas(str(PDF_PATH), pagesize=A3)
pdf.setTitle('PASARIN - Use Case UML, Revisi 2')
pdf.setAuthor('PASARIN')
pdf.setSubject('Katalog, akun, multi-toko, verifikasi identitas, dan moderasi PASARIN')
mxfile = ET.Element('mxfile', {'host': 'app.diagrams.net', 'version': '24.7.17', 'type': 'device'})
manifest = []


class Page:
    def __init__(self, index, title, filename):
        self.index, self.title, self.filename = index, title, filename
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(title)}">', '<rect width="100%" height="100%" fill="white"/>']
        self.usecases, self.actors, self.edges, self.boxes = [], [], [], []
        self.ports, self.mx_edges = {}, []
        self.counter = 0
        d = ET.SubElement(mxfile, 'diagram', {'id': f'pasarin-{index}', 'name': f'{index:02d} {title}'})
        self.model = ET.SubElement(d, 'mxGraphModel', {'dx': str(W), 'dy': str(H), 'grid': '1', 'gridSize': '10', 'guides': '1', 'tooltips': '1', 'connect': '1', 'arrows': '1', 'fold': '1', 'page': '1', 'pageScale': '1', 'pageWidth': str(W), 'pageHeight': str(H), 'math': '0', 'shadow': '0'})
        self.root = ET.SubElement(self.model, 'root')
        ET.SubElement(self.root, 'mxCell', {'id': '0'})
        ET.SubElement(self.root, 'mxCell', {'id': '1', 'parent': '0'})
        pw, ph = A3
        scale = min((pw - 38) / W, (ph - 38) / H)
        pdf.saveState()
        pdf.translate((pw - W * scale) / 2, (ph - H * scale) / 2)
        pdf.scale(scale, scale)
        self.text(W / 2, 80, 'Use Case Diagram PASARIN', 40, True)
        self.text(W / 2, 121, 'Platform katalog dan promosi UMKM lokal', 22, color=MUTED)
        self.text(W / 2, 166, f'{index:02d} / 04  -  {title}', 22, True)

    def uid(self):
        self.counter += 1
        return f'p{self.index}-{self.counter}'

    def cell(self, value, style, x, y, w, h):
        cid = self.uid()
        c = ET.SubElement(self.root, 'mxCell', {'id': cid, 'value': value, 'style': style, 'vertex': '1', 'parent': '1'})
        ET.SubElement(c, 'mxGeometry', {'x': str(x), 'y': str(y), 'width': str(w), 'height': str(h), 'as': 'geometry'})
        return cid

    def text(self, x, y, content, size=22, bold=False, color=INK, align='center', italic=False, editable=True):
        font = 'Arial-Bold' if bold else ('Arial-Italic' if italic else 'Arial')
        width = pdfmetrics.stringWidth(content, font, size)
        if align == 'center': px = x - width / 2
        elif align == 'right': px = x - width
        else: px = x
        pdf.setFillColor(color)
        pdf.setFont(font, size)
        pdf.drawString(px, H - y, content)
        anchor = {'center': 'middle', 'left': 'start', 'right': 'end'}[align]
        weight = 'bold' if bold else 'normal'
        style = 'italic' if italic else 'normal'
        self.svg.append(f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{weight}" font-style="{style}" fill="{color}">{escape(content)}</text>')
        if editable:
            self.cell(escape(content), f'text;html=1;strokeColor=none;fillColor=none;align={align};verticalAlign=middle;whiteSpace=wrap;rounded=0;fontFamily=Arial;fontSize={size};fontColor={color};fontStyle={1 if bold else (2 if italic else 0)};', px - 3, y - size - 3, width + 6, size + 10)

    def line(self, points, dashed=False, arrow=None, color=INK, width=1.7, editable=True, label=None):
        pdf.setStrokeColor(color)
        pdf.setLineWidth(width)
        pdf.setDash(7, 5) if dashed else pdf.setDash()
        p = pdf.beginPath()
        p.moveTo(points[0][0], H - points[0][1])
        for x, y in points[1:]: p.lineTo(x, H - y)
        pdf.drawPath(p)
        pdf.setDash()
        dash = ' stroke-dasharray="7 5"' if dashed else ''
        self.svg.append(f'<polyline points="{" ".join(f"{x},{y}" for x,y in points)}" fill="none" stroke="{color}" stroke-width="{width}"{dash}/>')
        if arrow:
            tx, ty = points[-1]
            px, py = points[-2]
            angle = atan2(ty - py, tx - px)
            length, half = (23, 11) if arrow == 'generalization' else (15, 7)
            bx, by = tx - length*cos(angle), ty - length*sin(angle)
            a = (bx + half*cos(angle + pi/2), by + half*sin(angle + pi/2))
            b = (bx - half*cos(angle + pi/2), by - half*sin(angle + pi/2))
            pts = [a, (tx, ty), b]
            if arrow == 'generalization':
                self.polygon(pts, fill='white', stroke=color, width=width)
            else:
                self.line(pts, color=color, width=width, editable=False)
        if editable:
            eid = self.uid()
            end = 'block;endFill=0;endSize=18' if arrow == 'generalization' else ('open;endFill=0;endSize=12' if arrow else 'none')
            e = ET.SubElement(self.root, 'mxCell', {'id': eid, 'value': label or '', 'edge': '1', 'parent': '1', 'style': f'edgeStyle=none;rounded=0;html=1;strokeColor={color};strokeWidth={width};dashed={1 if dashed else 0};startArrow=none;endArrow={end};fontFamily=Arial;fontSize=19;labelBackgroundColor=#FFFFFF;'})
            g = ET.SubElement(e, 'mxGeometry', {'relative': '1', 'as': 'geometry'})
            ET.SubElement(g, 'mxPoint', {'x': str(points[0][0]), 'y': str(points[0][1]), 'as': 'sourcePoint'})
            ET.SubElement(g, 'mxPoint', {'x': str(points[-1][0]), 'y': str(points[-1][1]), 'as': 'targetPoint'})
            if len(points) > 2:
                arr = ET.SubElement(g, 'Array', {'as': 'points'})
                for x,y in points[1:-1]: ET.SubElement(arr, 'mxPoint', {'x': str(x), 'y': str(y)})
            self.mx_edges.append((e, points))
            self.edges.append({'points': points, 'kind': arrow or ('comment' if dashed else 'association')})

    def polygon(self, points, fill='white', stroke=INK, width=1.7):
        pdf.setStrokeColor(stroke); pdf.setFillColor(fill); pdf.setLineWidth(width)
        p = pdf.beginPath(); p.moveTo(points[0][0], H - points[0][1])
        for x,y in points[1:]: p.lineTo(x, H - y)
        p.close(); pdf.drawPath(p, stroke=1, fill=1)
        self.svg.append(f'<polygon points="{" ".join(f"{x},{y}" for x,y in points)}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>')

    def boundary(self, x, y, w, h):
        self.line([(x,y),(x+w,y),(x+w,y+h),(x,y+h),(x,y)], width=2.1, editable=False)
        self.cell('', f'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor={INK};strokeWidth=2;', x,y,w,h)
        self.text(x+w/2, y+39, 'Sistem PASARIN', 25, True)
        self.bound = (x,y,w,h)

    def uc(self, code, label, cx, cy, w=380, h=84):
        x, y = cx-w/2, cy-h/2
        pdf.setStrokeColor(INK); pdf.setFillColor('white'); pdf.setLineWidth(1.8)
        pdf.ellipse(x, H-y-h, x+w, H-y, fill=1, stroke=1)
        self.svg.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{w/2}" ry="{h/2}" fill="white" stroke="{INK}" stroke-width="1.8"/>')
        lines = label.split('\n')
        start = cy - 15 if len(lines) == 1 else cy - 25
        self.text(cx, start, code, 16, color=MUTED, editable=False)
        for i, item in enumerate(lines):
            assert pdfmetrics.stringWidth(item, 'Arial', 22) < w - 42, (code, item, w)
            self.text(cx, start+27+25*i, item, 22, editable=False)
        value = f'<span style="font-size:16px;color:{MUTED}">{escape(code)}</span><br/>' + '<br/>'.join(escape(s) for s in lines)
        cid = self.cell(value, f'ellipse;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor={INK};strokeWidth=1.8;fontFamily=Arial;fontSize=22;spacing=8;', x,y,w,h)
        self.usecases.append({'id': code, 'name': label.replace('\n',' '), 'box': [x,y,w,h], 'cell': cid})
        self.boxes.append((x,y,w,h,code))
        ports = {'left': (x,cy), 'right': (x+w,cy), 'top': (cx,y), 'bottom': (cx,y+h)}
        for point in ports.values(): self.ports[point] = (cid, x, y, w, h)
        return ports

    def actor(self, x, y, name, sub=None, side=False, italic=False):
        radius = 14
        pdf.setStrokeColor(INK); pdf.setFillColor('white'); pdf.setLineWidth(2)
        pdf.circle(x,H-y,radius,stroke=1,fill=1)
        self.svg.append(f'<circle cx="{x}" cy="{y}" r="14" fill="white" stroke="{INK}" stroke-width="2"/>')
        for p in [[(x,y+14),(x,y+62)],[(x-28,y+34),(x+28,y+34)],[(x,y+62),(x-25,y+92)],[(x,y+62),(x+25,y+92)]]:
            self.line(p,width=2,editable=False)
        if side:
            self.text(x+82,y+46,name,23,bold=not italic,italic=italic,align='left',editable=False)
        else:
            for i,s in enumerate(name.split('\n')): self.text(x,y+128+28*i,s,23,True,editable=False)
            if sub:
                for j,s in enumerate(sub.split('\n')):
                    self.text(x,y+128+28*len(name.split('\n'))+26*j,s,18,color=MUTED,editable=False)
        value = '<br/>'.join(escape(s) for s in name.split('\n'))
        if sub: value += f'<br/><span style="font-size:18px">{"<br/>".join(escape(s) for s in sub.split(chr(10)))}</span>'
        cid = self.cell(value, f'shape=umlActor;verticalLabelPosition={"middle" if side else "bottom"};verticalAlign={"middle" if side else "top"};labelPosition={"right" if side else "center"};html=1;outlineConnect=0;fillColor=#FFFFFF;strokeColor={INK};strokeWidth=2;fontFamily=Arial;fontSize=23;fontStyle={2 if italic else 1};', x-28,y-14,56,106)
        self.actors.append(name.replace('\n',' '))
        ports = {'left': (x-28,y+34),'right':(x+28,y+34),'top':(x,y-14),'bottom':(x,y+92),'body':(x,y+62)}
        for point in ports.values(): self.ports[point] = (cid, x-28, y-14, 56, 106)
        return ports

    def note(self,x,y,w,h,lines,title=None):
        fold=18
        self.polygon([(x,y),(x+w-fold,y),(x+w,y+fold),(x+w,y+h),(x,y+h)],stroke=MUTED,width=1.3)
        self.line([(x+w-fold,y),(x+w-fold,y+fold),(x+w,y+fold)],color=MUTED,width=1.3,editable=False)
        cursor=y+32
        if title:
            self.text(x+18,cursor,title,20,True,align='left',editable=False); cursor+=31
        for s in lines:
            assert pdfmetrics.stringWidth(s,'Arial',19) < w-35,(s,w)
            self.text(x+18,cursor,s,19,align='left',editable=False);cursor+=28
        assert cursor-22 <= y+h,(title,cursor,y+h)
        value=(f'<b>{escape(title)}</b><br/>' if title else '')+'<br/>'.join(escape(s) for s in lines)
        self.cell(value,f'shape=note;whiteSpace=wrap;html=1;size=18;fillColor=#FFFFFF;strokeColor={MUTED};strokeWidth=1.3;fontFamily=Arial;fontSize=19;align=left;verticalAlign=top;spacing=15;',x,y,w,h)

    def finish(self, footer):
        self.text(800,2040,footer,19,color=MUTED)
        self.line([(100,2090),(1500,2090)],color=LIGHT,width=1,editable=False)
        self.text(100,2130,'PASARIN  |  Revisi 2  |  Ruang lingkup FE interaktif',18,color=MUTED,align='left')
        self.text(1500,2130,f'{self.index} / 4',18,color=MUTED,align='right')
        for i,a in enumerate(self.boxes):
            for b in self.boxes[i+1:]:
                assert not (a[0]<b[0]+b[2] and a[0]+a[2]>b[0] and a[1]<b[1]+b[3] and a[1]+a[3]>b[1]),(a[4],b[4])
        for edge, points in self.mx_edges:
            style = edge.attrib['style']
            for attr, point, prefix in [('source', points[0], 'exit'), ('target', points[-1], 'entry')]:
                if point in self.ports:
                    cid, x, y, w, h = self.ports[point]
                    edge.set(attr, cid)
                    style += f'{prefix}X={(point[0]-x)/w};{prefix}Y={(point[1]-y)/h};{prefix}Dx=0;{prefix}Dy=0;{prefix}Perimeter=0;'
            edge.set('style', style)
        self.svg.append('</svg>')
        path=OUT/f'{self.filename}.svg';path.write_text('\n'.join(self.svg),encoding='utf-8')
        ET.parse(path)
        manifest.append({'page':self.index,'title':self.title,'svg':str(path),'actors':self.actors,'usecases':self.usecases,'relationships':self.edges})
        pdf.restoreState();pdf.showPage()


# 01: The three actors are roles. One person may act as a buyer and a store owner.
p=Page(1,'Gambaran utama','01-diagram-utama')
p.boundary(230,210,1140,1760)
p.text(510,301,'Katalog, akun, dan interaksi',21,True)
p.text(1090,301,'Operasional UMKM',21,True)
buyer=p.actor(95,920,'Pembeli','Pengunjung /\nterdaftar')
owner=p.actor(1505,645,'Pemilik\nUMKM')
admin=p.actor(1505,1515,'Admin')
public=[('UC-01','Lihat katalog produk'),('UC-02','Cari produk'),('UC-03','Filter berdasarkan\nkategori'),('UC-04','Lihat detail\nproduk dan toko'),('UC-05','Hubungi penjual\nvia WhatsApp'),('UC-06','Daftar akun'),('UC-07','Masuk'),('UC-08','Keluar'),('UC-09','Pulihkan kata sandi'),('UC-10','Beri / ubah rating\ndan ulasan'),('UC-11','Laporkan konten'),('UC-12','Dapatkan bantuan')]
for i,(code,label) in enumerate(public):
    cy=360+i*122
    p.line([buyer['right'],(320,cy)])
    p.uc(code,label,510,cy)
seller=[('UC-13','Daftarkan identitas\npemilik'),('UC-14','Buka toko'),('UC-15','Kelola profil toko'),('UC-16','Kelola produk'),('UC-17','Lihat dashboard UMKM'),('UC-18','Pantau status verifikasi'),('UC-19','Perbaiki dan ajukan\nulang identitas')]
for i,(code,label) in enumerate(seller):
    cy=360+i*122
    p.line([owner['left'],(1280,cy)])
    p.uc(code,label,1090,cy)
p.text(1090,1200,'Administrasi',21,True)
management=[('UC-20','Lihat dashboard admin'),('UC-21','Verifikasi identitas\npemilik'),('UC-22','Kelola kategori'),('UC-23','Moderasi konten'),('UC-24','Kelola toko dan produk'),('UC-25','Blokir / buka blokir\nakun pemilik')]
for i,(code,label) in enumerate(management):
    cy=1280+i*122
    p.line([admin['left'],(1280,cy)])
    p.uc(code,label,1090,cy)
p.note(285,1780,460,170,['UC-01 s.d. UC-05: tanpa login.','UC-10 dan UC-11: wajib login.','UC-12: Pusat Bantuan dan chat.','Akses akun semua peran: diagram 02.'])
p.finish('Garis solid = asosiasi. Satu orang dapat menjalankan peran Pembeli dan Pemilik UMKM.')


# 02: Shared authentication is shown by actor generalization, not by includes on every private goal.
p=Page(2,'Akses akun lintas peran','02-akses-akun')
p.boundary(180,210,1240,1090)
visitor=p.actor(85,355,'Pengunjung')
p.line([visitor['right'],(580,410)])
p.uc('UC-06','Daftar akun',800,410,440,90)
p.note(545,515,510,115,['Akun yang sama dapat digunakan untuk','menjelajah, mengulas, dan membuka toko.'])
pw=p.uc('UC-07','Masuk',430,900,300,90)
lo=p.uc('UC-08','Keluar',800,900,300,90)
rs=p.uc('UC-09','Pulihkan kata sandi',1170,900,340,90)
p.note(260,680,350,120,['Alternatif: kata sandi,','Google, atau Facebook.'])
p.line([(430,800),pw['top']],dashed=True,color=MUTED,width=1.2)
p.note(1010,660,345,145,['Pemulihan melalui email','dan pengaturan ulang','kata sandi.'])
p.line([(1170,805),rs['top']],dashed=True,color=MUTED,width=1.2)
account=p.actor(800,1410,'Pengguna akun',side=True,italic=True)
for endpoint in [pw['bottom'],lo['bottom'],rs['bottom']]: p.line([account['top'],endpoint])
registered=p.actor(350,1820,'Pembeli\nterdaftar')
owner=p.actor(800,1820,'Pemilik\nUMKM')
admin=p.actor(1250,1820,'Admin')
p.line([registered['top'],(660,1610),(772,1444)],arrow='generalization')
p.line([owner['top'],account['bottom']],arrow='generalization')
p.line([admin['top'],(940,1610),(828,1444)],arrow='generalization')
p.finish('Segitiga kosong menunjuk peran umum. Integrasi Google, Facebook, dan email disimulasikan pada FE.')


# 03: KTP is mandatory once at owner onboarding; it is not an include of opening every store.
p=Page(3,'Operasional pemilik UMKM','03-operasional-umkm')
p.boundary(235,210,1140,1740)
owner=p.actor(100,1000,'Pemilik\nUMKM')
operations=[('UC-13','Daftarkan identitas\npemilik'),('UC-14','Buka toko'),('UC-15','Kelola profil toko'),('UC-16.1','Tambah produk'),('UC-16.2','Ubah produk'),('UC-16.3','Hapus produk'),('UC-17','Lihat dashboard UMKM'),('UC-18','Pantau status verifikasi'),('UC-19','Perbaiki dan ajukan\nulang identitas')]
for i,(code,label) in enumerate(operations):
    cy=360+i*170
    p.line([owner['right'],(435,cy)])
    p.uc(code,label,650,cy,430,88)
ktp=p.uc('UC-13.1','Unggah KTP',1110,360,260,88)
p.line([(865,360),ktp['left']],dashed=True,arrow='include')
p.text(923,339,'«include»',18)
p.note(930,550,355,205,['KTP wajib; NIB opsional.','Identitas diajukan sekali','per akun pemilik. Toko lain','memakai identitas yang sama.'],title='Identitas pemilik')
p.line([(1110,404),(1110,550)],dashed=True,color=MUTED,width=1.2)
p.note(930,835,355,205,['Toko dan produk dapat tayang','setelah data wajib lengkap.','Persetujuan admin bukan','prasyarat publikasi.'],title='Publikasi langsung')
p.note(930,1120,355,205,['Satu akun dapat memiliki','beberapa toko. Produk dan','dashboard mengikuti toko','yang sedang dikelola.'],title='Kepemilikan toko')
p.note(930,1410,355,177,['Sesi pemilik aktif.','Akun tidak diblokir.','Hanya mengelola toko sendiri.'],title='Prasyarat akses')
p.finish('UC-16 dirinci menjadi tambah, ubah, dan hapus. NIB opsional dicatat sebagai aturan dokumen.')


# 04: Verification, publication, moderation, and account sanctions are separate goals.
p=Page(4,'Administrasi dan moderasi','04-administrasi')
p.boundary(235,210,1140,1740)
admin=p.actor(100,930,'Admin')
operations=[('UC-20','Lihat dashboard admin'),('UC-21','Verifikasi identitas\npemilik'),('UC-22','Kelola kategori'),('UC-23','Moderasi konten'),('UC-24.1','Kelola toko'),('UC-24.2','Kelola produk'),('UC-25','Blokir / buka blokir\nakun pemilik')]
for i,(code,label) in enumerate(operations):
    cy=350+i*220
    p.line([admin['right'],(440,cy)])
    p.uc(code,label,665,cy,450,92)
p.note(980,420,330,205,['Pemeriksaan sekali per akun.','Setujui atau minta perbaikan','beserta alasan. Publikasi','toko berjalan terpisah.'],title='Verifikasi identitas')
p.note(980,725,330,233,['Tinjau laporan produk, toko,','atau ulasan. Pertahankan,','sembunyikan, atau tampilkan','kembali konten dengan','alasan keputusan.'],title='Moderasi setelah tayang')
p.note(980,1060,330,205,['Toko: ubah data, aktifkan,','atau nonaktifkan.','Produk: ubah data,','sembunyikan / tampilkan.'],title='Kelola toko dan produk')
p.note(980,1370,330,205,['Blokir berlaku pada seluruh','toko dan produk pemilik.','Alasan wajib dicatat.','Admin dapat membuka blokir.'],title='Pemblokiran pemilik')
p.note(410,1800,550,115,['Prasyarat: sesi admin aktif. Akun admin disediakan','sistem; bukan melalui pendaftaran publik.'])
p.finish('UC-24 dirinci menjadi kelola toko dan kelola produk. Pemeriksaan konten tidak menahan publikasi awal.')

pdf.save()
drawio=OUT/'PASARIN-Use-Case-UML.drawio'
ET.indent(mxfile,space='  ')
ET.ElementTree(mxfile).write(drawio,encoding='utf-8',xml_declaration=True)
ET.parse(drawio)
(OUT/'diagram-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
assert len(manifest)==4
assert len(manifest[0]['usecases'])==25
assert len({u['id'] for u in manifest[0]['usecases']})==25
assert sum(e['kind']=='include' for e in manifest[2]['relationships'])==1
print(json.dumps({'pdf':str(PDF_PATH),'drawio':str(drawio),'pages':4,'overview_usecases':25,'svg_files':[m['svg'] for m in manifest]},ensure_ascii=False))
