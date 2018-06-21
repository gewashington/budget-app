import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';
import './Entrance.css'

 class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false,
    }
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    );
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked Login Button!")
    axios.post('/users/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      this.setState({ redirect: true });
    })
    .catch(function(error) {
      console.log(error)
    })  
  }


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }

    return(
        <div className="form-display">
          <h2>Welcome!</h2>
          <h2>Please Login!</h2>
          <form onSubmit={this.handleLoginSubmit}>
           <p><input className="inputFormStyle" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserInput}/></p>
           <p><input className="inputFormStyle" name="password" placeholder="Password" value={this.state.password}  onChange={this.handleUserInput} type="password"/></p>
           <button type='submit' className="login button" value="Submit">Submit</button>
          </form>
      </div>
    )
  }
}

export default withRouter(Login)
