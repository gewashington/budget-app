/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */


import React from 'react';
import { Route, Link } from 'react-router-dom';
import CurrentGoal from './CurrentGoal';
import SettingsContainer from '../Settings/SettingsContainer';
import MakeGoalContainer from '../MakeGoal/MakeGoalContainer';
import axios from 'axios';
import LogOut from './LogOut';
import './Dashboard.css';
/*
TO-DO:
- Placeholder forms on settings page
- Clean code
- Re-do UI
- Make Routes Protected so User Cannot see pages without being logged in 
- Make goal percent only show up to two decimal spots
- Alter later to just update state in front end 
- Map multiple goals 
*/

const SidebarExample = ({ goals, addMoney, handleAddedMoneyInput, handleGoalChange, handleSaveGoal, calculateWeeks }) => ( 
  <div className="sidebar">
    <div className="sidebar-contents">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/dashboard" className="sidebar-links">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/makegoal" className="sidebar-links">Make A Goal</Link>
        </li>
        <li>
          <Link to="/dashboard/settings" className="sidebar-links">Settings</Link>
        </li>
        <li>
          <Link to="/dashboard/logout" className="sidebar-links">Log Out</Link>
        </li>
      </ul>

      {/* {routes.map((route, index) => (
        // You can render a <Route> in as many places
        // as you want in your app. It will render along
        // with any other <Route>s that also match the URL.
        // So, a sidebar or breadcrumbs or anything else
        // that requires you to render multiple things
        // in multiple places at the same URL is nothing
        // more than multiple <Route>s.
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))} */}
      </div>

    <div className="displayedComponent">
      <Route
        exact path='/dashboard'
        render={(props) => <CurrentGoal props={props} goals={goals} addMoney={addMoney} handleAddedMoneyInput={handleAddedMoneyInput} calculateWeeks={calculateWeeks}/>}
      />
      <Route
        exact path='/dashboard/makegoal'
        render={(props) => <MakeGoalContainer props={props} handleSaveGoal={handleSaveGoal} handleGoalChange={handleGoalChange}/>}
      />
      <Route
        exact path='/dashboard/settings'
        component={SettingsContainer}
      />
      <Route 
        exact path='/dashboard/logout'
        component={LogOut}
      />
      </div>
    </div>
);

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [],
      user_id: '',
      username: '',
      full_name: '',
      //For making goal
      userSalary: '',
      goalAmount: '',
      //For adding money to goal
      addedMoney: '',
    };
  }

  getGoals() {
    axios.get('/allgoals')
      .then(res => (
        this.setState({
          goals: res.data.goals,
        }),
        console.log('goals', this.state.goals)
      ));
  }

  componentDidMount() {
    this.getGoals()
    axios.get('/users/getUser')
      .then(res => (
        this.setState({
          user_id: res.data.user['user_id'],
          username: res.data.user['username'],
          full_name: res.data.user['full_name'],
        })
      ));
  }

  //For Adding Money To Goal 
  handleAddedMoneyInput = (e) => {
    e.preventDefault();
    this.setState({
      addedMoney: e.target.value
    })
  }

  addMoney = (e) => {
    e.preventDefault();
    console.log("addMoney - goal state:", this.state.goals[0])
    const updatedAmount = Number(this.state.addedMoney) + Number(this.state.goals[0].current_amount);
    console.log('addMoney - updatedAmount:', updatedAmount)
    axios.put(`/goals/${this.state.goals[0].id}`, {
      id: this.state.goals[0].id,
      weekly_salary: this.state.goals[0].weekly_salary,
      goal_amount: this.state.goals[0].goal_amount,
      weekly_contribution: this.state.goals[0].weekly_contribution,
      current_amount: updatedAmount,
      complete: this.state.goals[0].goal_amount === updatedAmount,
    })
    .then(() => { 
      console.log('money should have been added')
      this.getGoals()
    })

  }


  //For MakeGoalComponent 
  percentSaved = (percent) => {
    return (this.state.goals[0].goal_amount - this.state.goals[0].current_amount) / (this.state.goals[0].weekly_salary * percent)
  }

  calculateWeeks = () => {
    let suggestedPercents = [ 0.10, 0.15, 0.20];
    let week = [];
    let weeks = suggestedPercents.map(num => {
     return ((Math.floor(this.percentSaved(num))))
    });
    for (var i= 0; i < weeks.length; i++) {
      week.push( `If you save ${suggestedPercents[i] * 100}% a week ($${this.state.goals[0].weekly_salary * suggestedPercents[i]} a week), it will take you ${String(weeks[i])} weeks to reach your goal!`)
    }
    return week.map( str => <p>{str}</p> )
   }

   handleGoalChange = (e) => {
     console.log(e)
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('handling change:', this.state)
  }


  handleSaveGoal = (e) => {
    console.log('handleSaveGoal clicked!')
    axios.post('/goals', {
      user_id: this.state.user_id,
      weekly_salary: this.state.userSalary,
      goal_amount: this.state.goalAmount,
      weekly_contribution: 0,
      complete: false,
      current_amount: 0,
    })
    .then(() => {
      console.log('goal should be saved');
      this.getGoals();
      this.props.history.push('/dashboard');
    
    })
  }


  render() {
    return (
      <div>
        <SidebarExample goals={this.state.goals} addMoney={this.addMoney} handleAddedMoneyInput={this.handleAddedMoneyInput} handleGoalChange={this.handleGoalChange} handleSaveGoal={this.handleSaveGoal} calculateWeeks={this.calculateWeeks}/>
        <div className="header">
          <div className="header-contents">
            Hi {this.state.full_name ? this.state.full_name : ''}!
          </div>
        </div>
      </div>
    )
  }
}
