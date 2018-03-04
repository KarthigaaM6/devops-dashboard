import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { WidgetCI } from './ci-server';
import { WidgetSCM } from './source-code';
import Header from './Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Grid className='main_content'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <WidgetCI />
            </Grid.Column>
            <Grid.Column>
              <WidgetSCM />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
