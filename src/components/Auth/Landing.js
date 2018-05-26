import React from 'react';
import { Link, Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import '../CSS/TabsCSS.css';
import '../Entrance.css';
import Tabs from '../Tabs/Tabs.js';
/*TO-DO:
- Edit CSS
- Add Auth
*/

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'login'};
  }

  render()  {

    const content = {
      login: <Login />,
      signup: <Signup />
    };


    return(
      <div className="wrapper">
        <div className="main">
        <div className="title-container">
        <div>
        <Tabs active={this.state.active}
          onChange={active => this.setState({active})}>
          <div key="login">Login</div>
          <div key="signup">Sign Up</div>
          </Tabs>
          <p>{content[this.state.active]}</p>
        </div>
      </div>
      </div>
      </div>
    )
  }



}
