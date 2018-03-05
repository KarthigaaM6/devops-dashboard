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
          <Grid.Row columns={4}>
            <Grid.Column>
              <WidgetCI title={'bamboo'}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetCI title={'jenkins'}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetSCM title={'gitlab'}/>
            </Grid.Column>
            <Grid.Column>
              <WidgetSCM title={'bitbucket'}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
