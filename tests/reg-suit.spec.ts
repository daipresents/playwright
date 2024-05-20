import { test } from '@playwright/test';

test('take screenshots for reg-suit', async ({ page }, testInfo) => {
  // Base URLを開く
  await page.goto('https://www.amazon.co.jp/', {waitUntil: 'domcontentloaded' });

  // screenshot
  await page.screenshot({ path: './actual_images/amazon-top.png' });
});


