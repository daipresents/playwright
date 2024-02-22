import { test } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';

test('has title', async ({ page }) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();
  
  // いろいろ開く
  await page.goto('https://www.google.co.jp/');
  await page.goto('https://playwright.dev/');

  // debug
  const path = await page.video()?.path();
  console.log(path);
});
