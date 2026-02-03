import { chromium } from 'playwright';

async function main() {
  console.log('Checking Brilex website...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  try {
    console.log('1. Loading homepage...');
    await page.goto('https://brilex.vercel.app', { timeout: 60000, waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);
    
    // Take full page screenshot
    await page.screenshot({ path: 'screenshot-full.png', fullPage: true });
    console.log('Full page screenshot saved');
    
    // Take viewport screenshot
    await page.screenshot({ path: 'screenshot-viewport.png' });
    console.log('Viewport screenshot saved');
    
    // Scroll and take more screenshots
    console.log('2. Scrolling through sections...');
    
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-section1.png' });
    
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-section2.png' });
    
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 3));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-section3.png' });
    
    // Get page content summary
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        bodyText: document.body.innerText.substring(0, 500),
        mainSections: document.querySelectorAll('section').length,
        images: document.querySelectorAll('img').length,
        buttons: document.querySelectorAll('button').length,
      };
    });
    
    console.log('Page info:', JSON.stringify(pageInfo, null, 2));
    
    // Mobile view
    console.log('3. Checking mobile view...');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('https://brilex.vercel.app', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });
    
    console.log('Done!');
    
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await browser.close();
  }
}

main();
