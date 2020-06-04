import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux';

import * as actions from './store/actions/index'
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage'
import Logout from './components/Auth/logout';


const LazyAuth = lazy(() => {
  return import('./components/Auth/auth')
})

const LazyHistory = lazy(() => {
  return import('./components/History/history')
})

const App = props => {

  const { onAuthCheck } = props

  useEffect(() => {
    onAuthCheck()
  }, [onAuthCheck])

  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/auth" exact render={(props) => <Suspense fallback={<div></div>}> <LazyAuth {...props} /> </Suspense>} />
          {props.isAuth ? <Route path='/logout' component={Logout} /> : null}
          {props.isAuth ? <Route path='/history' render={(props) => <Suspense fallback={<div></div>}> <LazyHistory {...props} /> </Suspense> } />: null}
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