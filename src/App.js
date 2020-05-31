import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    );
  }
}

export default App;