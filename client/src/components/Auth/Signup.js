import React from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import './Entrance.css'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      email: "",
      password: "",
      username: "",
      redirect: false,
    }
  };

  handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked SignUp Button!")
    axios.post('/users/new', {
      full_name: this.state.full_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(() => {
      axios.post('/users/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(() => {
      this.setState({ redirect: true });
      })
    })
    .catch(function(error) {
      console.log(error)
    })  

  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    );
  }



  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }

    return(
      <div className="form-display">
        <h2>Sign Up Here!</h2>
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