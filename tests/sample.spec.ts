import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';
import { DaipresentsAgilePage } from '../pages/daipresents-agile-page';
import { screenshotOnFailure } from '../lib/screenshot';
test.afterEach(screenshotOnFailure);

test('has title', async ({ page }) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();
  
  // タイトルが表示されているか確認
  await expect(daipresentsTopPage.titleLink).toBeVisible();
});

test('get agile link', async ({ page }) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();
  
  // メニューをクリック
  await daipresentsTopPage.menuAgileLink.click();

  // 見出しにタグが表示されているか確認
  const daipresentsAgilePage = new DaipresentsAgilePage(page);
  await expect(daipresentsAgilePage.tagTitle).toBeVisible();
});
