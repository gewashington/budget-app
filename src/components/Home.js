import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import MakeGoalContainer from './MakeGoal/MakeGoalContainer';

export default class Home extends React.Component {
  render() {
    return(
      <div>
      <Login />
      <Signup/>
      <Dashboard />
      <MakeGoalContainer/>
      </div>
    )
  }
}
