import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['22-Feb','23-Feb', '24-Feb', '25-Feb', '26-Feb', '27-Feb', '28-Feb'],
  datasets: [
    {
      label:'Merged pull requests',
      backgroundColor: 'rgba(52,152,219,0.2)',
      borderColor: 'rgba(52,152,219,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(52,152,219,0.4)',
      hoverBorderColor: 'rgba(52,152,219,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Open pull requests',
      backgroundColor: 'rgba(241, 196, 15,0.2)',
      borderColor: 'rgba(241, 196, 15,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(241, 196, 15,0.4)',
      hoverBorderColor: 'rgba(241, 196, 15,1)',
      data: [95, 109, 180, 181, 156, 155, 140]
    },
    {
      label: 'Declined pull requests',
      backgroundColor: 'rgba(189,27,27,0.2)',
      borderColor: 'rgba(189,27,27,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(189,27,27,0.5)',
      hoverBorderColor: 'rgba(189,27,27,1)',
      data: [120, 149, 200, 281, 186, 185, 150]
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
    text: 'Pull request per day',
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
