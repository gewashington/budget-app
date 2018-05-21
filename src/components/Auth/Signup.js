import React from 'react';
import '../Entrance.css'

export default class Signup extends React.Component {

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked Sign Up Button!")
  }

  render() {
    return(
      <div>
        <h2>Hi from Sign Up</h2>
          <form onSubmit={this.handleSignUpSubmit}>
            <p>Email:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="namesignupform" />
            <p>Password:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="passwordsignupform" />
            <h5>Agree to terms and conditions (Put link here!): </h5><input style={{ margin: "20px auto", display: "block"}} type="checkbox" name="agreetoconditionsbox" />

          <button>Submit</button>
          </form>
      </div>
    )
  }
}
