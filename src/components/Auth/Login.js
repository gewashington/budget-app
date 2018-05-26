import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import '../Entrance.css'

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
      <div>
        <h2>Hi from Login</h2>
          <form >
            <p>Email:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="nameloginform" />
            <p>Password:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="passwordloginform" />

            <Button />
          </form>

      </div>
    )
  }
}
