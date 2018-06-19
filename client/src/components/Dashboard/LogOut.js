import React from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';

class LogOut extends React.Component {
      componentDidMount() {
        axios.get('http://localhost:3000/users/logout')
          .then(() => {
            console.log('Log Out Successful!');
            this.props.history.push('/')
          })
          .catch((error) => {
            console.log(error);
          }); 
      }
      render() {
        return (
          <div>
            Logging out...
          </div>
        );
      }
    }

export default withRouter(LogOut)
    