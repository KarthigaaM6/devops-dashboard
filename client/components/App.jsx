import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { WidgetCI } from './ci-server';
import { WidgetSCM } from './source-code';
import Header from './Header.jsx';

const jenkinsBuilds = [
  {
    label: 'Failed Builds',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(80,14,14,0.72)',
    borderColor: 'rgba(80,14,14,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(80,14,14,0.82)',
    pointHoverBorderColor: 'rgba(80,14,14,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [150, 158, 70, 50, 98, 0, 200]

  },
  {
    label: 'Successful Builds',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(42, 173, 20,0.4)',
    borderColor: 'rgba(42, 173, 20,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(42, 173, 20,0.6)',
    pointHoverBorderColor: 'rgba(42, 173, 20,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [300, 208, 170, 270, 128, 55, 210]
  }
];

const jenkinsPullRequests = [
  {
    label:'Failed Pull Requests',
    backgroundColor: 'rgba(189,27,27,0.2)',
    borderColor: 'rgba(189,27,27,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(189,27,27,0.6)',
    hoverBorderColor: 'rgba(189,27,27,1)',
    data: [45, 29, 50, 91, 96, 45, 10]
  },
  {
    label: 'Successful Pull Requests',
    backgroundColor: 'rgba(42, 173, 20,0.2)',
    borderColor: 'rgba(110, 255, 86,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(42, 173, 20,0.4)',
    hoverBorderColor: 'rgba(110, 255, 86,1)',
    data: [95, 109, 180, 181, 156, 155, 140]
  }
];

const bambooBuilds = [
  {
    label: 'Failed Builds',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(80,14,14,0.72)',
    borderColor: 'rgba(80,14,14,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(80,14,14,0.82)',
    pointHoverBorderColor: 'rgba(80,14,14,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [50, 58, 100, 120, 88, 120, 200]

  },
  {
    label: 'Successful Builds',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(42, 173, 20,0.4)',
    borderColor: 'rgba(42, 173, 20,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(42, 173, 20,0.6)',
    pointHoverBorderColor: 'rgba(42, 173, 20,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [350, 258, 180, 200, 58, 155, 400]
  }
];

const bambooPullRequests = [
  {
    label:'Failed Pull Requests',
    backgroundColor: 'rgba(189,27,27,0.2)',
    borderColor: 'rgba(189,27,27,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(189,27,27,0.6)',
    hoverBorderColor: 'rgba(189,27,27,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: 'Successful Pull Requests',
    backgroundColor: 'rgba(42, 173, 20,0.2)',
    borderColor: 'rgba(110, 255, 86,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(42, 173, 20,0.4)',
    hoverBorderColor: 'rgba(110, 255, 86,1)',
    data: [95, 109, 180, 181, 156, 155, 140]
  }
];

const gitlabCommits = [
  {
    label: 'Total Commits',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [150, 158, 80, 100, 158, 155, 200]
  }
];

const bitbucketCommits = [
  {
    label: 'Total Commits',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [350, 258, 180, 200, 58, 155, 400]
  }
];

const gitlabPullRequests = [
  {
    label:'Merged Pull Requests',
    backgroundColor: 'rgba(52,152,219,0.2)',
    borderColor: 'rgba(52,152,219,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(52,152,219,0.4)',
    hoverBorderColor: 'rgba(52,152,219,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: 'Open Pull Requests',
    backgroundColor: 'rgba(241, 196, 15,0.2)',
    borderColor: 'rgba(241, 196, 15,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(241, 196, 15,0.4)',
    hoverBorderColor: 'rgba(241, 196, 15,1)',
    data: [95, 109, 180, 181, 156, 155, 140]
  },
  {
    label: 'Declined Pull Requests',
    backgroundColor: 'rgba(189,27,27,0.2)',
    borderColor: 'rgba(189,27,27,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(189,27,27,0.5)',
    hoverBorderColor: 'rgba(189,27,27,1)',
    data: [120, 149, 200, 281, 186, 185, 150]
  }
];

const bitbucketPullRequests = [
  {
    label:'Merged Pull Requests',
    backgroundColor: 'rgba(52,152,219,0.2)',
    borderColor: 'rgba(52,152,219,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(52,152,219,0.4)',
    hoverBorderColor: 'rgba(52,152,219,1)',
    data: [35, 159, 180, 181, 156, 155, 240]
  },
  {
    label: 'Open Pull Requests',
    backgroundColor: 'rgba(241, 196, 15,0.2)',
    borderColor: 'rgba(241, 196, 15,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(241, 196, 15,0.4)',
    hoverBorderColor: 'rgba(241, 196, 15,1)',
    data: [45, 129, 80, 81, 56, 255, 240]
  },
  {
    label: 'Declined Pull Requests',
    backgroundColor: 'rgba(189,27,27,0.2)',
    borderColor: 'rgba(189,27,27,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(189,27,27,0.5)',
    hoverBorderColor: 'rgba(189,27,27,1)',
    data: [220, 249, 100, 81, 86, 85, 50]
  }
];

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Grid className='main_content'>
          <Grid.Row columns={4}>
            <Grid.Column>
              <WidgetCI title={'bamboo'}
                builds={bambooBuilds} pullRequests={bambooPullRequests}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetCI title={'jenkins'}
                builds={jenkinsBuilds} pullRequests={jenkinsPullRequests}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetSCM title={'gitlab'}
                commits={gitlabCommits} pullRequests={gitlabPullRequests}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetSCM title={'bitbucket'}
                commits={bitbucketCommits} pullRequests={bitbucketPullRequests}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
