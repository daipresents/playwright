[README](../README.md) > Report Portal

# Report Portal

## Install Docker
See https://reportportal.io/installation

## Configure and deploy ReportPortal

```
cd report-portal
curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
docker-compose -p reportportal up -d --force-recreate
```

## Launch ReportPortal

![](./images/report-portal01.png)

Open `http://localhost:8080`.

Login by 

1. user: id `default`, pass `1q2w3e`
2. admin: id `superadmin`, pass `erebus`

Create project on http://localhost:8080/ui/#administrate/projects and set the member (e.g. default user or superadmin user) and assign the role as `Project Manager`(Requires member or higher role. Please see permission map on http://localhost:8080/ui/#playwrightwithreportportalproject/members).


## Integrate with Playwright
See https://github.com/reportportal/agent-js-playwright

Install agent:

```
cd playwright
npm install --save-dev @reportportal/agent-js-playwright
```

Get API Key from http://localhost:8080/ui/#userProfile/apiKeys
And add the key to `.env` like below:

```
REPORT_PORTAL_API_KEY='${API_KEY}'
```

Add the config to `playwright.config.ts`:

Sample: https://github.com/reportportal/examples-js/blob/main/example-playwright/playwright.config.ts

```
import { PlaywrightTestConfig } from '@playwright/test';

const RPconfig = {
  apiKey: process.env.REPORT_PORTAL_API_KEY,
  endpoint: 'https://localhost:8080/api/v1',
  project: 'Playwright with ReportPortal Project',
  launch: 'E2E Teest by Playwright',
  description: 'This is for E2E testing by Playwright with ReportPortal',
};

const config: PlaywrightTestConfig = {
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  testDir: './tests',
};
```

Add script to `package.json` file:

```
{
  "scripts": {
    "test": "npx playwright test --config=playwright.config.ts"
  }
}
```

Run test.

```
npx playwright test ./tests/sample.spec.ts
```

If you can see certificate error like this:

```
Error: self-signed certificate
URL: https://localhost:8080/api/v1/PlaywrightWithReportPortalProject/launch
method: POST
    at /Users/daipresents/Work/playwright/node_modules/@reportportal/client-javascript/lib/rest.js:43:15
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
Failed to start launch. Error: self-signed certificate
URL: https://localhost:8080/api/v1/PlaywrightWithReportPortalProject/launch
```

Add this setting to `playwright.config.ts`.
But this setting cannot be used in production due to security issues, please use only for localhost.

```
// See https://stackoverflow.com/questions/45088006/nodejs-error-self-signed-certificate-in-certificate-chain
// NOTICE: This setting cannot be used in production due to security issues
// NOTICE: Please use only for localhost
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
```

After this setting, you can see Warning log like this:

```
(node:70078) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
```
