import React from 'react';
import { Link, Router, Route, Switch, Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Signup from './Signup';
import 'react-tabs/style/react-tabs.css';


export default class Landing extends React.Component {


  render()  {
    return(
      <div>
      <p>Hi from Landing</p>
      <Tabs>
    <TabList>
      <Tab>Login</Tab>
      <Tab>Sign Up</Tab>
    </TabList>

    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </Tabs>
      <p>BACKGROUND IMAGE</p>
      </div>
    )
  }



}
