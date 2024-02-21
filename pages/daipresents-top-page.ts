import { expect, type Locator, type Page } from '@playwright/test';

export class DaipresentsTopPage {
  readonly page: Page;
  readonly titleLink: Locator;
  readonly menuAgileLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLink = page.locator('a', { hasText: '旅と子育てとアジャイルコーチのブログ「世界」' }).first();
    this.menuAgileLink = page.locator('ul.menu li > a', { hasText: /^アジャイル$/ });
  }

  async goto() {
    await this.page.goto('/', {waitUntil: 'domcontentloaded' });
  }
}
