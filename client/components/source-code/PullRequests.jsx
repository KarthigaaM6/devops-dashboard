import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {Table, Icon} from 'semantic-ui-react';

const styles = {
  tableContainer: {
    border:'none',
    backgroundColor:'transparent',
    color:'white',
    textAlign:'center',
    width: '70%',
    margin: 'auto'
  },
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
  },
  icon: {
    float:"right",
    color: '#59595A',
    marginTop:"-5%"
  }
};

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
      mode: 'graph',
      dates: [],
      numberOfBuilds: []
    };
  }

  render() {
    let { mode } = this.state;
    return (
      <div>
        <div>
          <h5 style={styles.title}>no of pull requests</h5>
          {
            mode === 'graph' ?
            <Icon name="table"
              style={styles.icon} size="large"
              onClick={() => this.setState({ mode: 'table' })}
            /> :
            <Icon name="bar graph"
              style={styles.icon} size="large"
              onClick={() => this.setState({ mode: 'graph' })}
            />
          }
        </div>
        <hr style={styles.hr}/>
        <div>
          {
            mode === 'graph' ?
            <Bar
              data={data}
              options={options}
              height={230}
            /> :
            <Table size='small' style={styles.tableContainer}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Merged</Table.Cell>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                  <Table.Cell>60</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Open</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>70</Table.Cell>
                  <Table.Cell>110</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Decline</Table.Cell>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell>58</Table.Cell>
                  <Table.Cell>158</Table.Cell>
                </Table.Row>
                <Table.Row style={{ marginTop:'4%' }}>
                  <Table.HeaderCell style={{ borderTop:'none', textAlign:'center' }}>{' '}</Table.HeaderCell>
                  <Table.HeaderCell style={{ borderTop:'1px solid #7B7C7E', textAlign:'center' }}>Today</Table.HeaderCell>
                  <Table.HeaderCell style={{ borderTop:'1px solid #7B7C7E', textAlign:'center' }}>Last 7 days</Table.HeaderCell>
                  <Table.HeaderCell style={{ borderTop:'1px solid #7B7C7E', textAlign:'center' }}>Last 14 days</Table.HeaderCell>
                </Table.Row>
              </Table.Body>
            </Table>
          }
        </div>
      </div>
    );
  }
}
