import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const js=fs.readdirSync(path.join(root,'assets/js')).filter(x=>x.endsWith('.js'));
for(const file of js){const result=spawnSync(process.execPath,['--check',path.join(root,'assets/js',file)],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);}
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'assets/js/figma-assets.js'),'utf8'),sandbox);
const assets=[...new Set(Object.values(sandbox.window.PASARIN_ASSETS).flatMap(Object.values))];
for(const asset of assets){if(/^https?:/.test(asset))throw new Error('Remote runtime asset: '+asset);if(!fs.statSync(path.join(root,asset)).size)throw new Error('Empty asset: '+asset);}
let htmlCount=0;
for(const directory of ['','umkm','admin'])for(const file of fs.readdirSync(path.join(root,directory)).filter(x=>x.endsWith('.html'))){const full=path.join(root,directory,file),html=fs.readFileSync(full,'utf8');htmlCount++;for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(/^(?:https?:|data:)/.test(match[1]))continue;const dest=path.resolve(path.dirname(full),match[1].split('?')[0]);if(!fs.existsSync(dest))throw new Error('Missing HTML dependency: '+dest);}}
for(const file of js){if(fs.readFileSync(path.join(root,'assets/js',file),'utf8').includes('figma.com/api/mcp/asset'))throw new Error('Temporary Figma URL in runtime code.');}
console.log(JSON.stringify({htmlPages:htmlCount,javascriptFiles:js.length,localFigmaAssets:assets.length,syntax:'passed',dependencies:'passed'}));
