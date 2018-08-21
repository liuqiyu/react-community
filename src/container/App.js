import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Topbar from './../components/topbar/topbar';
import './App.less';
import { login } from './../store/loginStatus/action'

const loadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div></div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Overview = Loadable({
    loader: () => import('./../views/overview/overview'),
    loading: loadingComponent
});

const Overview1 = Loadable({
    loader: () => import('./../views/overview/overview'),
    loading: loadingComponent
});

class App extends Component {
  render() {
    return (
      <div className="App">
          <Topbar></Topbar>
          <div className="App-body wrap m-auto">
              <Router>
                  <Switch>
                      <Route path='/' component={Overview} exact></Route>
                      <Route path='/overview' component={Overview1}></Route>
                  </Switch>
              </Router>
          </div>
      </div>
    );
  }
}

export default connect(state => ({
    loginStatus: state.loginStatus.loginStatus,
}), {
    login,
})(App);
