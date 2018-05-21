import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import '../Entrance.css'


const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('../Dashboard') }}
  >
    Submit
  </button>
))

export default class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      email: "",
      pasword: ""
    }
  }

  handeLoginSubmit = (e) => {
    //handle user login on button click here!
    e.preventDefault();
    console.log("Clicked Login Button!")
    //temporarily allow login
    return <Redirect to={Dashboard} />
  }


  render() {
    return(
      <div>
        <h2>Hi from Login</h2>
          <form onSubmit={this.handeLoginSubmit}>
            <p>Email:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="nameloginform" />
            <p>Password:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="passwordloginform" />
            <button onClick={this.handeLoginSubmit}>Submit</button>
          </form>

      </div>
    )
  }
}
