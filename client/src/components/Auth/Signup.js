import React from 'react';
import axios from 'axios';
import './Entrance.css'

export default class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
    }
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked Login Button!")
    axios.post('http://localhost:3000/new/registeruser', {
      // username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(function(response) {
      console.log(response)
      // return <Redirect to="/dashboard" />
    })
    .catch(function(error) {
      console.log(error)
    })  
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked Sign Up Button!")
  }

  render() {
    return(
      <div className="form-display">
        <h2>Hi from Sign Up</h2>
          <form onSubmit={this.handleSignUpSubmit}>
            <p><input className="inputFormStyle" name="nameform" placeholder="Name" /></p>
            <p><input className="inputFormStyle" name="namesignupform" placeholder="Email"/></p>
            <p><input className="inputFormStyle" name="passwordsignupform" placeholder="Password" /></p>
          <h5>Agree to terms and conditions: </h5><input style={{ margin: "20px auto", display: "block"}} type="checkbox" name="agreetoconditionsbox" />

          <button>Submit</button>
          </form>
      </div>
    )
  }
}
