require('dotenv').config();
import RPClient from '@reportportal/client-javascript/lib/report-portal-client'
import RestClient from '@reportportal/client-javascript/lib/rest'

export class ReportPortalClient extends RPClient {
  constructor(options: any, agentParams: any) {
    super(options, agentParams);
  }

  async getLaunchID(): Promise<string> {
    const url = 
      `${this.config.endpoint}/${this.config.project}/launch/latest?filter.eq.name=${this.config.launch}`;

    try {
      const launch = await RestClient.request('GET', url, {}, { headers: this.headers });
      console.log(`ReportPortalClient.getLatestLaunchByName launchID: ${launch.content[0].id}`);
      return launch.content[0].id;
    } catch (error) {
      console.error('Error getting data: ', error);
    }

    // return ''
    return '';
  }
}
