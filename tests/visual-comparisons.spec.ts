import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';

test('visual comparisons test', async ({ page }) => {
  const daipresentsTopPage: DaipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();

  // Take a screenshot for visual comparisons.
  await expect(page).toHaveScreenshot();
});
