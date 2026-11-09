from pathlib import Path
from urllib.request import Request, urlopen
import re

root = Path(__file__).resolve().parents[1]
dest = root / 'assets' / 'fonts'
dest.mkdir(parents=True, exist_ok=True)
url = 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap'
request = Request(url, headers={'User-Agent': 'Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36'})
css = urlopen(request, timeout=45).read().decode()
blocks = re.findall(r'/\* latin \*/\s*(@font-face\s*\{[^}]+\})', css) or re.findall(r'@font-face\s*\{[^}]+\}', css)
assert blocks, 'No font faces returned'
mapping = {}
for block in blocks:
    for source in re.findall(r'url\(([^)]+)\)', block):
        if source not in mapping:
            extension = '.woff2' if '.woff2' in source else '.ttf'
            name = f'font-{len(mapping)+1}{extension}'
            (dest/name).write_bytes(urlopen(source, timeout=45).read())
            mapping[source] = name
for source, name in mapping.items():
    blocks = [b.replace(source, '../fonts/'+name) for b in blocks]
(root/'assets/css/fonts.css').write_text('\n\n'.join(blocks), encoding='utf-8')
print(f'Downloaded {len(mapping)} local font files for {len(blocks)} font faces.')
