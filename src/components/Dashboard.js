import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  CurrentGoal from './CurrentGoal';
import SettingsContainer from '../components/Settings/SettingsContainer';
import MakeGoalContainer from '../components/MakeGoal/MakeGoalContainer';
import LogOut from './LogOut';


const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: () => <div><CurrentGoal /></div>,
    // main: () => <h2>Dashboard</h2>

},

{
    path: "/dashboard/makegoal",
    component: () => <div><MakeGoalContainer/></div>,
    // main: () => <h2>Make A Goal</h2>
  },

{
    path: "/dashboard/settings",
    component: () => <div><SettingsContainer /></div>,
    // main: () => <h2>Settings</h2>
  },

];


const SidebarExample = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/makegoal">Make A Goal</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
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
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h3>Welcome User By Name Here!</h3>
        <SidebarExample />
        <h2>Hi from Dashboard! This Dashboard shows Graph and info about goal is shown </h2>
      </div>
    )
  }
}
