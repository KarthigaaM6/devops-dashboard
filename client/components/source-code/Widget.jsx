import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Commits from './Commits.jsx';
import PullRequests from './PullRequests.jsx';

const styles = {
  widgetContainer: {
    border: '0.5px solid #59595A'
  },
  widgetTitle: {
    fontWeight:'bolder',
    textAlign:'left',
    marginTop:'0%',
    fontSize:'15px',
    color: '#59595A'
  },
  hr: {
    marginTop: '-1px',
    border: '2px solid #59595A'
  }
};

export default class Widget extends Component {
  render() {
    return (
      <Grid style={styles.widgetContainer}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <h5 style={styles.widgetTitle}>
              Bitbucket
            </h5>
            <hr style={styles.hr}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Commits />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <PullRequests />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
