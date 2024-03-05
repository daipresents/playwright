import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from 'playwright-slack-report/dist/src'
import ReportPortalClient from './report-portal-client'
require('dotenv').config();

const reportPortalClient = new ReportPortalClient(
  {
    apiKey: process.env.REPORT_PORTAL_API_KEY,
    endpoint: process.env.REPORT_PORTAL_API_URL,
    project: process.env.REPORT_PORTAL_PROJECT_NAME,
    launch: process.env.REPORT_PORTAL_LAUNCH_NAME,
  },
  { name: "DAIPRESENTS AGENT", version: "1.0" }
);

async function reportLink() {
  try {
    const launchID = await reportPortalClient.getLaunchID();
    console.log('reportPortalLaunchLink.launchID: ' + launchID);

    const launchURL = process.env.REPORT_PORTAL_BASE_URL + '/ui/#' +
                      process.env.REPORT_PORTAL_PROJECT_NAME + '/launches/all/' +
                      launchID;
    return launchURL;

  } catch (err) {
    console.log("🔥🔥 Error", err);
  }
}


export async function generateCustomLayoutAsync (summaryResults: SummaryResults): Promise<Array<KnownBlock | Block>> {
  const { tests } = summaryResults;
  const header = {
    type: "header",
    text: {
      type: "plain_text",
      text: "🎭 *Playwright E2E Test Results*",
      emoji: true,
    },
  };

  const permalink = await reportLink();
  const summary = {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `✅ *${summaryResults.passed}* | ❌ *${summaryResults.failed}* | ⏩ *${summaryResults.skipped}* \nSee: <${permalink}>`,
    },
  };

  const fails: Array<KnownBlock | Block> = [];
  for (const t of tests) {
    if (t.status === "failed" || t.status === "timedOut") {
      fails.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `👎 *[${t.browser}] | ${t.suiteName.replace(/\W/gi, "-")}*`,
        },
      });
    }
  }

  return [header, summary, { type: "divider" }, ...fails]
}
