import React, { Fragment } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';

const App = () => (
  <Fragment>
    <h1>Neven Recchia</h1>
    <h2>Home</h2>
    <h2>About Me</h2>
    <h2>Contact</h2>
    <h2>LinkedIn</h2>
    <h2>Github</h2>
    <Columns>
      <Columns.Column>Hello</Columns.Column>
      <Columns.Column>Testing</Columns.Column>
      <Columns.Column>Columns</Columns.Column>
    </Columns>
  </Fragment>
);

export default App;
