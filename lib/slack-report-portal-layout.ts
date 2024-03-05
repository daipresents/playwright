import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from 'playwright-slack-report/dist/src'
import ReportPortalClient from './report-portal-client'
require('dotenv').config();

export default function generateReportPortalLayout(
  summaryResults: SummaryResults,
): Array<(Block | KnownBlock)> {

  const launchID = getLaunchID();
  console.log('launchID: ' + launchID);

  const message = createMessage(summaryResults, launchID);
  console.log('message: ' + message);

  console.log('return block');

  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: message,
      },
    },
  ];
}

async function getLaunchID() {
  const reportPortalClient = new ReportPortalClient({
    apiKey: process.env.REPORT_PORTAL_API_KEY,
    endpoint: process.env.REPORT_PORTAL_API_URL,
    project: process.env.REPORT_PORTAL_PROJECT_NAME,
    launch: process.env.REPORT_PORTAL_LAUNCH_NAME,
  });

  const launch = await reportPortalClient.getLatestLaunchByName();
  return launch.id;
}

function createMessage(summaryResults, launchID) {
  let message = '';
  if(summaryResults.failed === 0){
    message = ':tada: All tests passed!';
  } else {
    message = `😭${summaryResults.failed} failure(s) out of ${summaryResults.tests.length} tests.`
  }

  const launchURL = process.env.REPORT_PORTAL_BASE_URL + '/ui/#' +
                    process.env.REPORT_PORTAL_PROJECT_NAME + '/launches/all/' +
                    launchID;
  message = message + `\nPlease check here: ${launchURL}`;
  return message;
}