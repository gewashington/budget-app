import React from 'react';
import { Link, Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default class Landing extends React.Component {

  render()  {
    return(
      <div>
      <p>Hi from Landing</p>
      <Switch>
        <Route exact path="/landing/login" component={Login} />
        <Route exact path="/landing/signup" component={Signup}/>
      </Switch>
      <p>BACKGROUND IMAGE</p>
      </div>
    )
  }



}
