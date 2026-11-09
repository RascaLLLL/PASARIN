const path=require('node:path');
const fs=require('node:fs');
const {chromium}=require(process.env.PASARIN_PLAYWRIGHT_PATH||'C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright');
(async()=>{
 const root=path.resolve(__dirname,'..');fs.mkdirSync(path.join(root,'output/screenshots'),{recursive:true});
 const browser=await chromium.launch({headless:true,executablePath:process.env.PASARIN_BROWSER||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 for(const [name,route] of [['catalog',''],['product','produk.html?id=p-001'],['store','toko.html?id=s-cafe'],['login','masuk.html']]){
  await page.goto('http://127.0.0.1:4173/'+route);await page.waitForFunction(()=>document.body.classList.contains('loading')===false);
  await page.evaluate(()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');return document.fonts.ready;});await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete));
  await page.screenshot({path:path.join(root,'output/screenshots',name+'-desktop.png'),fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});
 for(const [name,route] of [['catalog',''],['product','produk.html?id=p-001'],['login','masuk.html']]){
  await page.goto('http://127.0.0.1:4173/'+route);await page.waitForFunction(()=>!document.body.classList.contains('loading'));await page.evaluate(()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');return document.fonts.ready;});await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete));
  await page.screenshot({path:path.join(root,'output/screenshots',name+'-mobile.png'),fullPage:true});
 }
 for(const [role,email] of [['owner','umkm@pasarin.id'],['admin','admin@pasarin.id']]){
  await page.setViewportSize({width:1440,height:1000});await page.goto('http://127.0.0.1:4173/masuk.html');await page.waitForSelector('[name="login"]');await page.locator('[name="login"]').fill(email);await page.locator('[name="password"]').fill('Demo12345');await page.locator('form[data-form="login"] button[type="submit"]').click();await page.waitForURL(url=>!url.pathname.endsWith('masuk.html'));await page.waitForSelector('.workspace');await page.evaluate(()=>document.fonts.ready);await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete));await page.screenshot({path:path.join(root,'output/screenshots',role+'-dashboard-desktop.png'),fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(root,'output/screenshots',role+'-dashboard-mobile.png'),fullPage:true});
 }
 console.log(JSON.stringify({pageErrors:errors,catalogImages:await page.locator('img').count()}));
 await browser.close();
})().catch(error=>{console.error(error);process.exit(1);});
