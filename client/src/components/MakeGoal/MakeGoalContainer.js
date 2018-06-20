import React from 'react';
import EnterSalary from './EnterSalary';
import EnterGoal from './EnterGoal';
import DisplayGoal from './DisplayGoal';
import axios from 'axios';

export default class MakeGoalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGoalCreationSlide: 1,
      goalAmount: 0,
      userSalary: 0, 
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('handling change:', this.state)
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


 saveGoal = (e) => {
   //Goal is saved to database here and user is brought back to main dashboard
 }


 switchSlide() {
  switch(this.state.currentGoalCreationSlide) {
   case 1:
     return(<EnterSalary next={this.next} handleChange={this.handleChange} />);
    case 2:
     return(<EnterGoal next={this.next} back={this.back} handleChange={this.handleChange}/>);
    case 3:
     return(<DisplayGoal back={this.back} saveGoal={this.handleSaveGoal}/>);
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
      </div>
    )
  }
}
