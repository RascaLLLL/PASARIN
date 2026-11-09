const { chromium } = require('C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({headless:true, executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
  try {
    const page=await browser.newPage({viewport:{width:1440,height:1000}});
    await page.goto('http://127.0.0.1:4174/');
    await page.waitForSelector('.product-card');
    await page.evaluate(async()=>{await Pasarin.login('admin@pasarin.id','Demo12345');});
    await page.goto('http://127.0.0.1:4174/admin/kategori.html');
    await page.waitForSelector('#admin-search');
    await page.evaluate(()=>document.fonts.ready);
    const dir=path.resolve(__dirname,'../output/ui-refinement');fs.mkdirSync(dir,{recursive:true});
    await page.screenshot({path:path.join(dir,'admin-categories-before.png'),fullPage:true});
    console.log(JSON.stringify(await page.locator('.search-form button').evaluate(el=>{
      const range=document.createRange();range.selectNodeContents(el);
      return {label:el.textContent,width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height,textLines:range.getClientRects().length};
    })));
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
