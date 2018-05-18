import React from 'react';
import Landing from './Auth/Landing';
import { Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Dashboard from './Dashboard';
// import MakeGoalContainer from './MakeGoal/MakeGoalContainer';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <p>Hi from Home!</p>
        <Route path="/landing" component={Landing} />
      </div>
    )
  }
}
