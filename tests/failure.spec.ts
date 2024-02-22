import { test } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';
import { screenshotOnFailure } from '../lib/screenshot';
test.afterEach(screenshotOnFailure);

test('failure test', async ({ page }) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();

  // クリックできないところをクリック
  await page.locator('a', { hasText: /^Non-existent element$/ }).click();
});
