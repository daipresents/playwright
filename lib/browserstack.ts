import { test as base } from '@playwright/test';
import 'dotenv/config'

const caps = {
    // ビルド番号を作成
    'build': 'playwright-build-' + new Date().toJSON(),
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
    'browser': 'chrome',
    'os': 'Windows',
    'os_version': '11',
    'resolution': '1280x800',
};

const test = base.extend({
    page: async ({ playwright }, use, testInfo) => {
        const vBrowser = await playwright.chromium.connect({ wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,});
        const vContext = await vBrowser.newContext(testInfo.project.use);
        const vPage = await vContext.newPage();
        await use(vPage);
        await vPage.close();
        await vBrowser.close();
    }
});

export default test;
