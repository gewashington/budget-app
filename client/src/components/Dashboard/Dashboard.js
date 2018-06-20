/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */


import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CurrentGoal from './CurrentGoal';
import SettingsContainer from '../Settings/SettingsContainer';
import MakeGoalContainer from '../MakeGoal/MakeGoalContainer';
import axios from 'axios';
import LogOut from './LogOut';
import './Dashboard.css';
/*
TO-DO:
- User sees weekly contribution suggestion on Display Goal Page ( create formula )
- User can create goal 
- Graph is editable to allow user to edit how much they have saved so far
- Placeholder forms on settings page
- Clean code
- Re-do UI
- Make Routes Protected so User Cannot see pages without being logged in 
*/


// const routes = [
//   {
//     path: '/dashboard',
//     exact: true,
//     render: (props, goals) => <div><CurrentGoal props={props} goals={goals}/></div>,
//     // main: () => <h2>Dashboard</h2>

//   },

//   {
//     path: '/dashboard/makegoal',
//     render: () => <div><MakeGoalContainer/></div>,
//     // main: () => <h2>Make A Goal</h2>
//   },

//   {
//     path: '/dashboard/settings',
//     render: () => <div><SettingsContainer /></div>,
//     // main: () => <h2>Settings</h2>
//   },


// ];


const SidebarExample = ({goals}) => (
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
        render={(props) => <CurrentGoal props={props} goals={goals} addMoney={this.addMoney}/>}
      />
      <Route
        exact path='/dashboard/makegoal'
        render={(props) => <MakeGoalContainer props={props} saveGoal={this.handleSaveGoal}/>}
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
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/allgoals')
      .then(res => (
        this.setState({
          goals: res.data.goals,
        })
      ));
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
  addMoney() {

  }

  //For MakeGoalComponent 
  percentSaved = (percent) => {
    return this.state.goals[0].goal_amount / (this.state.goals[0].weekly_salary * percent)
  }

  calculateWeeks = () => {
    let suggestedPercents = [ 0.10, 0.15, 0.20];
    let week = '';
    let weeks = suggestedPercents.map(num => {
     return ((Math.floor(this.percentSaved(num))))
    });
    for (var i= 0; i < weeks.length; i++) {
      week += `If you save ${suggestedPercents[i] * 100}% a week ($${this.state.goals[0].weekly_salary * suggestedPercents[i]} a week), it will take you ${String(weeks[i])} weeks to reach your goal! \n`
    }
    console.log(week)
    return week
   }

  handleSaveGoal = (weeklySalary, goalAmount) => {
    axios.post('/goals', {
      user_id: this.state.user_id,
      weekly_salary: weeklySalary,
      goal_amount: goalAmount,
      weekly_contribution: 0,
      complete: false,
      current_amount: 0,
    }
    .then({
      //redirect here
    })
  )
  }


  render() {
    console.log(this.state.username)
    return (
      <div>
        <SidebarExample goals={this.state.goals}/>
        <div className="header">
          <div className="header-contents">
            Hi {this.state.full_name ? this.state.full_name : ''}!
          </div>
        </div>
      </div>
    )
  }
}
