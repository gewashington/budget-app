import React from 'react';
import EnterSalary from './EnterSalary';
import EnterGoal from './EnterGoal';
import DisplayGoal from './DisplayGoal';

export default class MakeGoalContainer extends React.Component {
  render() {
    return(
      <div>
        <h2>Hi from MakeGoalContainer</h2>
        <EnterSalary />
        <EnterGoal />
        <DisplayGoal />

      </div>
    )
  }
}
