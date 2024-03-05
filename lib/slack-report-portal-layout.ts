import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from 'playwright-slack-report/dist/src'
import ReportPortalClient from './report-portal-client'
require('dotenv').config();

export default function generateReportPortalLayout(
  summaryResults: SummaryResults,
): Array<(Block | KnownBlock)> {

  const launchID: Promise<string> = getLaunchID().then((value) => String(value));
  console.log('launchID: ' + launchID);

  const message = createMessage(summaryResults, launchID);
  console.log('message: ' + message);

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

function getLaunchID() {
  const reportPortalClient = new ReportPortalClient({
    apiKey: process.env.REPORT_PORTAL_API_KEY,
    endpoint: process.env.REPORT_PORTAL_API_URL,
    project: process.env.REPORT_PORTAL_PROJECT_NAME,
    launch: process.env.REPORT_PORTAL_LAUNCH_NAME,
  });

  return reportPortalClient.getLaunchID();
  //let launchID = '';
  // reportPortalClient.getLaunchID().then((response) => {
  //   console.log('You have successfully connected to the server. ReportPortalClient.getLaunchID()');
  //   launchID = response.content[0].id;
  //   console.log('getLaunchID() launchID: ' + launchID);
  //   return launchID;
  // }, (error) => {
  //   const errorMessage = 'Error connection to server. ReportPortalClient.getLaunchID()';
  //   console.log(errorMessage);
  //   console.dir(error);
  //   throw new Error(errorMessage);
  // });
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
  console.log('createMessage() message: ' + message);
  return message;
}