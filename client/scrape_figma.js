const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    console.log("Navigating to Figma...");
    await page.goto('https://www.figma.com/proto/FQkyqQ2TMKpxFn8YX0rWBI/New-Green-Agro-Coal--Final-design?page-id=0%3A1&node-id=1-73&viewport=1734%2C1142%2C0.33&t=Mcs4Q4rJIHyFmsDW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A73', {waitUntil: 'networkidle2', timeout: 60000});
    
    console.log("Waiting 15 seconds for Figma to render prototype canvas...");
    await new Promise(r => setTimeout(r, 15000));
    
    await page.screenshot({path: 'figma_screenshot.png'});
    console.log("Screenshot saved to figma_screenshot.png");
    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
