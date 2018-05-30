import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Entrance.css'

/*TO-DO:
- Fix CSS
-Integrate Auth when available
*/

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

  handleLoginSubmit = (e) => {
    //handle user login on button click here!
    e.preventDefault();
    console.log("Clicked Login Button!")
    //temporarily allow login
    return <Redirect to="/dashboard" />
  }


  render() {
    return(
        <div className="form-display">
        <h2>Hi from Login</h2>
          <form >
        <p><input className="inputFormStyle" name="nameloginform" placeholder="Email"/></p>
        <p><input className="inputFormStyle" name="passwordloginform" placeholder="Password" /></p>

            <Button />
          </form>

      </div>
    )
  }
}
