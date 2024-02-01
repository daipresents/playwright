// BrowserStack実行の場合は以下を使う
import { expect } from '@playwright/test';
import { test } from '../browserstack';

// ローカルで動かす場合は以下を使う
//import { test, expect } from '@playwright/test';

test('ブログを開いてメニューページを開く', async ({ page }) => {
  // Base URLを開く
  await page.goto('/');
  // タイトルが表示されているか確認
  await expect(page.getByRole('link', { name: '旅と子育てとアジャイルコーチのブログ「世界」' })).toBeVisible();

  // メニューをクリック
  await page.locator('#menu-item-32293').getByRole('link', { name: 'アジャイル' }).click();
  // 見出しにタグが表示されているか確認
  await expect(page.getByRole('heading', { name: 'タグ: アジャイル' }).locator('span')).toBeVisible();
});
