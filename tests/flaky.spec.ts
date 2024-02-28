import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';
import { DaipresentsAgilePage } from '../pages/daipresents-agile-page';
import { screenshotOnFailure } from '../lib/screenshot';
test.afterEach(screenshotOnFailure);

test.describe('Test flaky tests', () => {
  test('flaky test', async ({ page }) => {
    const daipresentsTopPage = new DaipresentsTopPage(page);

    await test.step('Base URLを開く', async () => {
      await daipresentsTopPage.goto();
    });

    await test.step('たまに失敗するチェック', async () => {
      const random = Math.random();
      console.log('random: ' + random);
      if (0.1 < random) {
        // Pass
        await expect(daipresentsTopPage.titleLink).toBeVisible();
      } else {
        // Fail
        await expect(page.locator('a', { hasText: 'こんなタイトルありません' }).first()).toBeVisible();
      }
    });
  });
});
