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
    let { datasets } = this.props;

    const data = {
      labels: DATE.getLastNDates(7),
      datasets: datasets
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
