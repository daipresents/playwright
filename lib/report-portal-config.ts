import 'dotenv/config'

// See https://github.com/reportportal/agent-js-playwright?tab=readme-ov-file#configuration
const reportPortalConfig = {
  apiKey: process.env.REPORT_PORTAL_API_KEY,
  endpoint: process.env.REPORT_PORTAL_API_URL,
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

export default reportPortalConfig;
