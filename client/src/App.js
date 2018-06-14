import React, { Component } from 'react';
import Landing from './components/Auth/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import './App.css';


//Goal: When button is clicked, component is changed to sign in
class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
