import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Builds from './Builds.jsx';
import PullRequests from './PullRequests.jsx';

export default class Widget extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Builds />
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
