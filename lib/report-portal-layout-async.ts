import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from 'playwright-slack-report/dist/src';
import { generateBlocks } from 'playwright-slack-report/dist/src/LayoutGenerator';
import { ReportPortalClient } from './report-portal-client';
require('dotenv').config();

const reportPortalClient = new ReportPortalClient(
  {
    apiKey: process.env.REPORT_PORTAL_API_KEY,
    endpoint: process.env.REPORT_PORTAL_API_URL,
    project: process.env.REPORT_PORTAL_PROJECT_NAME,
    launch: process.env.REPORT_PORTAL_LAUNCH_NAME,
  },
  { name: 'DAIPRESENTS AGENT', version: '1.0' }
);

async function getReportLink(): Promise<string> {
  let launchURL: string = 
    `${process.env.REPORT_PORTAL_BASE_URL}/ui/#${process.env.REPORT_PORTAL_PROJECT_NAME}/launches/all`;
  
  try {
    const launchID: string = await reportPortalClient.getLaunchID();
    return `${launchURL}/${launchID}`;
    
  } catch (error) {
    console.error('🔥🔥 Error', error);
    return launchURL;
  }
}

export async function generateReportPortalLayoutAsync (summaryResults: SummaryResults): Promise<Array<KnownBlock | Block>> {
  const blocks: (Block | KnownBlock)[] = await generateBlocks(summaryResults, summaryResults.failed);
  const permalink: string = await getReportLink();

  // add link to summary
  blocks[1]['text']['text'] = `${blocks[1]['text']['text']}\nSee: <${permalink}>`;
  return blocks;
}
