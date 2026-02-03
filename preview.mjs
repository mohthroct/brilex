import { chromium } from 'playwright';

async function main() {
  console.log('Previewing updated Brilex website...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  try {
    console.log('Loading site...');
    await page.goto('https://brilex.vercel.app', { timeout: 60000, waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);
    
    // Hero section
    await page.screenshot({ path: '/tmp/brilex-hero.png' });
    console.log('Hero screenshot saved');
    
    // Products section
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/brilex-products.png' });
    console.log('Products screenshot saved');
    
    // Before/After section
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2.5));
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/tmp/brilex-effect.png' });
    console.log('Effect section screenshot saved');
    
    // Full page
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/brilex-full.png', fullPage: true });
    console.log('Full page screenshot saved');
    
    // Mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('https://brilex.vercel.app', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/tmp/brilex-mobile.png' });
    console.log('Mobile screenshot saved');
    
    console.log('Done!');
    
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await browser.close();
  }
}

main();
