import React from 'react';
import EnterSalary from './EnterSalary';
import EnterGoal from './EnterGoal';
import DisplayGoal from './DisplayGoal';

export default class MakeGoalContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      currentGoalCreationSlide: 1
    }
  }

  next = (e) => {
   let currentGoalCreationSlide = this.state.currentGoalCreationSlide;
   if (currentGoalCreationSlide >= 2) {
     currentGoalCreationSlide = 3;
    console.log(currentGoalCreationSlide)
   } else {
     currentGoalCreationSlide = currentGoalCreationSlide + 1;
    console.log(currentGoalCreationSlide)
   }

   this.setState({
     currentGoalCreationSlide: currentGoalCreationSlide
   });
 }

 back = (e) => {
   let currentGoalCreationSlide = this.state.currentGoalCreationSlide;
   if (currentGoalCreationSlide <= 1) {
     currentGoalCreationSlide = 1;
     console.log(currentGoalCreationSlide)
   } else {
     currentGoalCreationSlide = currentGoalCreationSlide - 1;
     console.log(currentGoalCreationSlide)
   }

   this.setState({
     currentGoalCreationSlide: currentGoalCreationSlide
   });
 }

 switchSlide() {
  switch(this.state.currentGoalCreationSlide) {
   case 1:
     return(<EnterSalary />);
    case 2:
     return(<EnterGoal />);
    case 3:
     return(<DisplayGoal/>);
   default:
     return(<EnterSalary />);
  }
}

  render() {
    return(
      <div>
        <h2>Hi from MakeGoalContainer</h2>
          <div> {this.switchSlide()}</div>
          <br></br>
         <button onClick={this.next}>Next</button>
         <button onClick={this.back}>Back</button>
      </div>
    )
  }
}
