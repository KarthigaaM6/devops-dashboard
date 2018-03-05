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

export default class Commits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      numberOfCommits: []
    };
  }

  render() {
    const data = {
      labels: DATE.getLastNDates(7),
      datasets: [
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
              labelString: 'No. of commits',
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
        <h5 style={styles.title}>commits per day</h5>
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
