require('dotenv').config();
import RPClient from '@reportportal/client-javascript/lib/report-portal-client'
import RestClient from '@reportportal/client-javascript/lib/rest'

export default class ReportPortalClient extends RPClient {
  async getLatestLaunchByName() {
    const url = this.config.endpoint + 
                '/' + this.config.project +
                '/launch/latest?' +
                'filter.eq.name=' + this.config.launch;

    const launch = await RestClient.request('GET', url, {}, { headers: this.headers });

    // Only return latest launch.
    return launch.content[0];
  }
}


