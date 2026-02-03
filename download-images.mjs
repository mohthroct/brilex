import { chromium } from 'playwright';
import https from 'https';
import fs from 'fs';
import path from 'path';

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading Brilex images...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // Get images from Brilex website
    console.log('1. Fetching from Brilex website...');
    await page.goto('https://www.brilex-dz.com/', { timeout: 30000 });
    await page.waitForTimeout(3000);
    
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => img.src).filter(src => src && !src.includes('data:'))
    );
    console.log('Found images:', images);
    
    // Download some images
    for (let i = 0; i < Math.min(images.length, 5); i++) {
      const url = images[i];
      const filename = `brilex-${i + 1}.jpg`;
      const filepath = path.join('public/images/products', filename);
      try {
        if (url.startsWith('http')) {
          console.log(`Downloading ${url}...`);
          // Use fetch for HTTPS
        }
      } catch (e) {
        console.log(`Failed to download ${url}: ${e.message}`);
      }
    }
    
    // Take screenshots of their products for reference
    await page.screenshot({ path: 'public/images/brilex-home.png', fullPage: true });
    console.log('Saved Brilex homepage screenshot');
    
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await browser.close();
  }
}

main();
