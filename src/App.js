import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux';

import * as actions from './store/actions/index'
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/auth'
import Logout from './components/Auth/logout';
import History from './components/History/history'


const App = props => {

  const { onAuthCheck } = props

  useEffect(() => {
    onAuthCheck()
  }, [onAuthCheck])

  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/auth" exact component={Auth} />
          {props.isAuth ? <Route path='/logout' component={Logout} /> : null}
          {props.isAuth ? <Route path='/history' component={History} />: null}
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    isAuth: state.authReducer.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(actions.authCheck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);