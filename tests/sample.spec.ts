import { test, expect } from '@playwright/test';
import {type TestInfo } from '@playwright/test';
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

test('faied test', async ({ page }) => {
  // Base URLを開く
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();

  // クリックできないところをクリック
  await page.locator('a', { hasText: /^Non-existent element$/ }).click();
});

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
