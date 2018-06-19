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
- Add Image for Dashboard when goal available
- Add graph that shows how much user can save
-Make Sidebar size not be affected by Components being displayed
 *Graph is editable to allow user to edit how much they have saved so far
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
      {console.log('link 81 goals', goals)}
    <div className="displayedComponent">
      <Route
        exact path='/dashboard'
        render={(props) => <CurrentGoal props={props} goals={goals}/>}
      />
      <Route
        exact path='/dashboard/makegoal'
        component={MakeGoalContainer}
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
      goals: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/allgoals')
      .then(res => {
       this.setState({
        goals: res.data.goals
      })
    })
  
  }

  render() {
    console.log(this.state.goals[0])
    return (
      <div>
        <SidebarExample goals={this.state.goals}/>
        <div className="header">
          <div className="header-contents">
          Welcome User By Name Here!
          </div>
        </div>
      </div>
    )
  }
}
