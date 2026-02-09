import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  console.log('Loading premium Brilex site...');
  await page.goto('https://brilex.vercel.app', { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(4000);
  
  // Hero
  await page.screenshot({ path: '/tmp/premium-hero.png' });
  console.log('Hero captured');
  
  // Products
  await page.evaluate(() => document.getElementById('products')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/premium-products.png' });
  console.log('Products captured');
  
  // Factory
  await page.evaluate(() => document.getElementById('factory')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/premium-factory.png' });
  console.log('Factory captured');
  
  // Contact
  await page.evaluate(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/premium-contact.png' });
  console.log('Contact captured');
  
  console.log('Done!');
  await browser.close();
}

main();
