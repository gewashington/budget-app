import React from 'react';

export default class Login extends React.Component {

  handeLoginSubmit = (e) => {
    //handle user login on button click here!
    e.preventDefault();
    console.log("Clicked Login Button!")
  }


  render() {
    return(
      <div>
        <h2>Hi from Login</h2>
        <h3>Login Needs: User name form, password form, submit button</h3>
          <form onSubmit={this.handeLoginSubmit}>
            <p>Email:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="nameloginform" />
            <p>Password:</p><input style={{ margin: "20px auto", display: "block"}} type="text" name="passwordloginform" />
            <button>Submit</button>
          </form>
      </div>
    )
  }
}
