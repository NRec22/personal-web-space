import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import PageFooter from '../components/PageFooter';

const App = () => (
  <Fragment>
    <Banner />
    <Switch>
      <Route exact path="/" render={() => <div>Welcome!</div>} />
      <Route exact path="/about" render={() => <div>Hello.</div>} />
      <Route exact path="*" render={() => <div>OOPS!</div>} />
    </Switch>
    <PageFooter />
  </Fragment>
);

export default App;
