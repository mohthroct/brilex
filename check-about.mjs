import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  await page.goto('https://brilex.vercel.app', { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Scroll to About section
  await page.evaluate(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/brilex-about.png' });
  
  // Scroll more to see timeline
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/brilex-timeline.png' });
  
  // Contact section
  await page.evaluate(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/brilex-contact.png' });
  
  console.log('Done!');
  await browser.close();
}

main();
