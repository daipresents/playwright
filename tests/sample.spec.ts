import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Base URLを開く
  await page.goto('/', {waitUntil: 'domcontentloaded' });

  // タイトルが表示されているか確認
  await expect(page.getByRole('link', { name: '旅と子育てとアジャイルコーチのブログ「世界」' })).toBeVisible();
});

test('get agile link', async ({ page }) => {
  // Base URLを開く
  await page.goto('/', {waitUntil: 'domcontentloaded' });
  
  // メニューをクリック
  await page.locator('#menu-item-32293').getByRole('link', { name: 'アジャイル' }).click();

  // 見出しにタグが表示されているか確認
  await expect(page.getByRole('heading', { name: 'タグ: アジャイル' }).locator('span')).toBeVisible();
});
