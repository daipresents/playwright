import { expect } from '@playwright/test';
import { test } from '../lib/browserstack';

test('has title', async ({ page }) => {
  await page.goto('/', {waitUntil: 'domcontentloaded' });
});
