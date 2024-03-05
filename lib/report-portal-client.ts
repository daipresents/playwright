require('dotenv').config();
import RPClient from '@reportportal/client-javascript/lib/report-portal-client'
import RestClient from '@reportportal/client-javascript/lib/rest'

export default class ReportPortalClient extends RPClient {
  async getLaunchID(): Promise<string> {
    const url = this.config.endpoint + 
                '/' + this.config.project +
                '/launch/latest?' +
                'filter.eq.name=' + this.config.launch;

    const response = 
      await RestClient.request('GET', url, {}, { headers: this.headers });
    
    const launchID = response.content[0].id;
    console.log('ReportPortalClient.getLaunchID() launchID: ' + launchID)
    return launchID;
  }
}


