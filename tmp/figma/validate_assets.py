from pathlib import Path
import hashlib
import json
import re
import xml.etree.ElementTree as ET
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
TMP = ROOT / 'tmp' / 'figma'
frames = {}
records = []
summaries = {}
hashes = {}
for source in sorted(TMP.glob('*.tsx')):
    if source.stem.endswith('-cached') and source.with_name(source.stem.removesuffix('-cached')+'.tsx').exists():
        continue
    name = source.stem
    frame = name.replace('-', '_')
    code = source.read_text(encoding='utf-8')
    frames[frame] = {}
    frame_records = []
    for var, url in re.findall(r'const\s+(img\w+)\s*=\s*"(https://[^"]+)";', code):
        ext = url.rsplit('.', 1)[-1].split('?')[0]
        base = re.sub(r'([a-z0-9])([A-Z])', r'\1-\2', var[3:]).lower()
        relative = f'assets/{"icons" if ext == "svg" else "images"}/{name}-{base}.{ext}'
        path = ROOT / relative
        assert path.is_file(), f'Missing {relative}'
        data = path.read_bytes()
        assert data, f'Empty {relative}'
        sha = hashlib.sha256(data).hexdigest()
        record = {'frame': frame, 'variable': var, 'url': url, 'path': relative, 'bytes': len(data), 'sha256': sha}
        if sha in hashes:
            record['sameBytesAs'] = hashes[sha]
        else:
            hashes[sha] = relative
        if ext == 'svg':
            svg = ET.fromstring(data)
            record['dimensions'] = {k:svg.get(k) for k in ('width', 'height', 'viewBox')}
        else:
            with Image.open(path) as image:
                record['dimensions'] = {'width':image.width, 'height':image.height, 'format':image.format}
        frames[frame][var] = relative
        frame_records.append(record)
        records.append(record)
    labels = [re.sub(r'\s+', ' ', text.strip()) for text in re.findall(r'<(?:p|h[1-6]|span|button)\b[^>]*>([^<>]+)</(?:p|h[1-6]|span|button)>', code)]
    labels = list(dict.fromkeys(text for text in labels if text and not text.startswith('{')))
    image_geometry = []
    for match in re.finditer(r'<img\b[^>]*src=\{(img\w+)\}[^>]*/>', code):
        image_geometry.append({'variable':match.group(1), 'element':match.group(0), 'preceding_context':code[max(0,match.start()-500):match.start()]})
    summaries[frame] = {'reference':str(source.relative_to(ROOT)), 'screenshot':str(source.with_suffix('.png').relative_to(ROOT)) if source.with_suffix('.png').exists() else None, 'asset_count':len(frame_records), 'labels':labels, 'image_geometry':image_geometry}

(ROOT/'assets/js/figma-assets.js').write_text('window.PASARIN_ASSETS = '+json.dumps(frames,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
(TMP/'asset-sources.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
(TMP/'reference-summary.json').write_text(json.dumps(summaries,ensure_ascii=False,indent=2),encoding='utf-8')
(TMP/'icon-dimensions.json').write_text(json.dumps([{'frame':r['frame'],'variable':r['variable'],'path':r['path'],**r['dimensions']} for r in records if r['path'].endswith('.svg')],ensure_ascii=False,indent=2),encoding='utf-8')
assert 'figma.com' not in (ROOT/'assets/js/figma-assets.js').read_text()
print(json.dumps({'frames':len(frames),'assets':len(records),'unique_content':len(hashes),'screenshots':len(list(TMP.glob('*.png'))),'total_mb':round(sum(r['bytes'] for r in records)/1024/1024,2),'keys':list(frames)},indent=2))
