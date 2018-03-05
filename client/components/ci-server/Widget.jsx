import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Builds from './Builds.jsx';
import PullRequests from './PullRequests.jsx';

const styles = {
  widgetContainer: {
    border: '0.5px solid #59595A'
  },
  widgetTitle: {
    textTransform: 'capitalize',
    fontWeight:'bolder',
    textAlign:'left',
    marginTop:'0%',
    fontSize:'15px',
    color: '#59595A'
  },
  hr: {
    marginTop: '-1px',
    border: '2px solid #59595A'
  },
  icon: {
    float:"right",
    marginTop:"-1%"
  }
};

export default class Widget extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }
  render() {
    let { title } = this.props;
    let { show } = this.state;
    return (
      <Grid style={styles.widgetContainer}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div>
              <h5 style={styles.widgetTitle}>
                {title}
                {
                  show ?
                  <Icon name="minus circle"
                    style={styles.icon} size="large"
                    onClick={() => this.setState({ show: false })}
                  /> :
                  <Icon name="plus circle"
                    style={styles.icon} size="large"
                    onClick={() => this.setState({ show: true })}
                  />
                }
              </h5>
            </div>
            <hr style={styles.hr}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className={show ? '' : 'hidden'}>
          <Grid.Column>
            <Builds />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} className={show ? '' : 'hidden'}>
          <Grid.Column>
            <PullRequests />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
