import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['22-Feb','23-Feb', '24-Feb', '25-Feb', '26-Feb', '27-Feb', '28-Feb'],
  datasets: [
    {
      label:'Failed pull requests',
      backgroundColor: 'rgba(189,27,27,0.2)',
      borderColor: 'rgba(189,27,27,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(189,27,27,0.6)',
      hoverBorderColor: 'rgba(189,27,27,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Successful pull requests',
      backgroundColor: 'rgba(42, 173, 20,0.2)',
      borderColor: 'rgba(110, 255, 86,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(42, 173, 20,0.4)',
      hoverBorderColor: 'rgba(110, 255, 86,1)',
      data: [95, 109, 180, 181, 156, 155, 140]
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'bottom'
  },
  title: {
    display: false,
    text: 'Commits per day',
    textAlign: 'left'
  },
  tooltips: {
    mode: 'label'
  },
  hover: {
    mode: 'dataset'
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Days',
          color:'silver'
        },
        gridLines: {
          display: false,
          color: 'silver'
        },
        barPercentage: 0.5
      }
    ],
    yAxes: [
      {
        stacked: true,
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'No. of pull requests',
          color:'silver'
        },
        gridLines: {
          display: false,
          color: 'silver'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 250
        }
      }
    ]
  }
}

export default class PullRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      numberOfBuilds: []
    };
  }

  render() {
    return (
      <div>
        <Bar
          data={data}
          options={options}
          height={230}
        />
      </div>
    );
  }
}
