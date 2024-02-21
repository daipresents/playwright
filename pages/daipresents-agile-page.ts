import { expect, type Locator, type Page } from '@playwright/test';

export class DaipresentsAgilePage {
  readonly page: Page;
  readonly tagTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tagTitle = page.getByRole('heading', { name: 'タグ: アジャイル' }).locator('span');
  }

  async goto() {
    await this.page.goto('/tag/agile/', {waitUntil: 'domcontentloaded' });
  }
}
