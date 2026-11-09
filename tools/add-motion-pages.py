"""Add the shared motion assets without replacing existing page content."""
from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
files=list(root.glob('*.html'))+list((root/'admin').glob('*.html'))+list((root/'umkm').glob('*.html'))
for file in files:
    text=file.read_text(encoding='utf-8')
    base='../' if file.parent!=root else ''
    if 'assets/css/motion.css' not in text:
        link=re.search(r'<link\b[^>]*href="[^"]*assets/css/figma-crops\.css"[^>]*>',text,re.S)
        assert link,file
        insert=f'\n    <link rel="stylesheet" href="{base}assets/css/motion.css">\n    <script src="{base}assets/js/motion.js"></script>'
        text=text[:link.end()]+insert+text[link.end():]
    text=re.sub(r'<script\b[^>]*src="[^"]*assets/js/app\.js"[^>]*>',lambda m:m[0] if 'blocking=' in m[0] else m[0][:-1]+' blocking="render">',text,flags=re.S)
    file.write_text(text,encoding='utf-8')
print(f'Updated {len(files)} pages; existing HTML content preserved.')
