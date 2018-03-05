import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
let DATE = require('../../utils/DATE.js');

const styles = {
  title: {
    fontWeight:'bolder',
    textAlign:'left',
    marginTop:'0%',
    textTransform:'uppercase',
    fontSize:'12px',
    color: '#59595A'
  },
  hr: {
    borderTop: '1px dotted #59595A'
  }
};

export default class Builds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      numberOfBuilds: []
    };
  }

  render() {
    const data = {
      labels: DATE.getLastNDates(7),
      datasets: [
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
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'Days',
              color:'silver'
            },
            gridLines: {
              display: false,
              color: 'silver'
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'No. of builds',
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
    return (
      <div>
        <h5 style={styles.title}>builds per day</h5>
        <hr style={styles.hr}/>
        <div>
          <Line
            data={data}
            options={options}
          />
        </div>
      </div>
    );
  }
}
