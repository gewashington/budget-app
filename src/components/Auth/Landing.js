import React from 'react';
import { Link, Router, Route, Switch, Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Signup from './Signup';
// import 'react-tabs/style/react-tabs.css';
import '../CSS/TabsCSS.css';
import '../Entrance.css';
/*TO-DO:
- Edit CSS
- Add Auth
*/

export default class Landing extends React.Component {


  render()  {
    return(
      <div className="wrapper">
        <div className="main">
        <div className="title-container">
        <Tabs>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanel>
            <div className="form-container">
            <Login />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="form-container">
            <Signup />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      </div>
      </div>
    )
  }



}
