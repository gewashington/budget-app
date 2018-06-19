import React from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import './Entrance.css'

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      username: "",
    }
  };

  handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked SignUp Button!", this.state)
    axios.post('http://localhost:3001/users/new', {
      full_name: this.state.full_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(function(response) {
      console.log(response);
      this.props.history.push('/')
    })
    .catch(function(error) {
      console.log(error)
    })  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return(
      <div className="form-display">
        <h2>Hi from Sign Up</h2>
          <form onSubmit={this.handleSignupSubmit}>
            <p><input className="inputFormStyle" name="full_name" placeholder="Name" onChange={this.handleChange}/></p>
            <p><input className="inputFormStyle" name="username" placeholder="Username" onChange={this.handleChange}/></p>
            <p><input className="inputFormStyle" name="email" placeholder="Email" type="email" onChange={this.handleChange}/></p>
            <p><input className="inputFormStyle" name="password" placeholder="Password" type="password" onChange={this.handleChange} /></p>
          <h5>Agree to terms and conditions: </h5><input style={{ margin: "20px auto", display: "block"}} type="checkbox" name="agreetoconditionsbox" />
          <button>Submit</button>
          </form>
      </div>
    )
  }
}

export default withRouter(Signup);