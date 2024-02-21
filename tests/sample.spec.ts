import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';
import { DaipresentsAgilePage } from '../pages/daipresents-agile-page';
import { allure } from "allure-playwright";

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

  // Take a screenshot
  await allure.attachment("basic-page-screen", await page.screenshot(), {
    contentType: "image/png",
  });

  // クリックできないところをクリック
  await page.locator('a', { hasText: /^Non-existent element$/ }).click();
});
