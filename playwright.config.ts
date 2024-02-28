import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

// See https://github.com/reportportal/agent-js-playwright?tab=readme-ov-file#configuration
export const rpConfig = {
  apiKey: process.env.REPORT_PORTAL_API_KEY,
  endpoint: process.env.REPORT_PORTAL_URL,
  project: process.env.REPORT_PORTAL_PROJECT_NAME,
  launch : process.env.REPORT_PORTAL_LAUNCH_NAME,
  attributes: [
    {
      key: 'platform',
      value: 'web',
    },
    {
      key: 'testType',
      value: 'e2e',
    },
  ],
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    //['list', { printSteps: true }],
    //['line'],
    //['dot'],
    //['html', { open: 'on-failure' }],
    //['blob', { outputDir: 'test-results/blob' }],
    //['json', { outputFile: 'test-results/results.json' }],
    //['allure-playwright', { outputFolder: 'test-results/allure' }],
    ['@reportportal/agent-js-playwright', rpConfig],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    
    /* Basic Auth */
    // httpCredentials: {
    //   username: process.env.BASIC_AUTH_ID as string,
    //   password: process.env.BASIC_AUTH_PASS as string,
    // },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // See https://playwright.dev/docs/videos#record-video
    // video: {
    //   mode: 'on',
    //   size: { width: 640, height: 400 }
    // }
  },

  /* Setting timeout */
  // When using BrowserStack, if the timeout is short, 
  // you will get an error "Session is terminated abruptly".
  // Therefore, the timeout period is set longer.
  //timeout: 60 * 1000,
  expect: {
    timeout: 3 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
