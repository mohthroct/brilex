import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  await page.goto('https://brilex.vercel.app', { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Hero
  await page.screenshot({ path: '/tmp/final-hero.png' });
  
  // Products
  await page.evaluate(() => document.getElementById('products')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/final-products.png' });
  
  // About
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/final-about.png' });
  
  // Contact
  await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/final-contact.png' });
  
  console.log('Done!');
  await browser.close();
}

main();
