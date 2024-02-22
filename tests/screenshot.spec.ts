import { test } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';

test('take screenshots', async ({ page }, testInfo) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();

  // screenshot
  await page.screenshot({ path: testInfo.outputPath('screenshot.png') });

  // full size
  await page.screenshot({ path: testInfo.outputPath('screenshot-full.png'), fullPage: true });

  // Element screenshot
  await page.locator('a', { hasText: '旅と子育てとアジャイルコーチのブログ「世界」' }).first().screenshot({ path: testInfo.outputPath('screenshot-element.png') });
});
