import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout>
          hello
        </Layout>
      </div>
    );
  }
}

export default App;