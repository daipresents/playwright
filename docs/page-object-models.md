[README](../README.md) > Page Object Models

# Page Object Models
See <https://playwright.dev/docs/pom>

## Usage

1. Create pages in `pages` directory.
2. User page object on the spec file like this:

```
import { test, expect } from '@playwright/test';
import { DaipresentsTopPage } from '../pages/daipresents-top-page';

test('has title', async ({ page }) => {
  const daipresentsTopPage = new DaipresentsTopPage(page);
  await daipresentsTopPage.goto();
});
```
