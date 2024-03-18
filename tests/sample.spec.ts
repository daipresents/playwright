import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';
import { DaipresentsAgilePage } from '../pages/daipresents-agile-page';
import { screenshotOnFailure } from '../lib/screenshot';
test.afterEach(screenshotOnFailure);

test.describe('Test sample tests', () => {
  test('has title', async ({ page }) => {
    const daipresentsTopPage: DaipresentsTopPage = new DaipresentsTopPage(page);

    await test.step('Base URLを開く', async () => {
      await daipresentsTopPage.goto();
    });

    await test.step('タイトルが表示されているか確認', async () => {
      await expect(daipresentsTopPage.titleLink).toBeVisible();
    });
  });

  test('get agile link', async ({ page }) => {
    const daipresentsTopPage: DaipresentsTopPage = new DaipresentsTopPage(page);

    await test.step('Base URLを開く', async () => {
      await daipresentsTopPage.goto();
    });
    
    await test.step('メニューをクリック', async () => {
      await daipresentsTopPage.menuAgileLink.click();
    });

    await test.step('見出しにタグが表示されているか確認', async () => {
      const daipresentsAgilePage: DaipresentsAgilePage = new DaipresentsAgilePage(page);
      await expect(daipresentsAgilePage.tagTitle).toBeVisible();
    });
  });
});
