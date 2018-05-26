import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';


//This button is being used until Database is integrated
 const Button = withRouter(({ history }) => (
   <button
     type='button'
     onClick={() => { history.push('../Dashboard') }}
   >
     Save Goal
   </button>
 ))

export default class DisplayGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>DisplayGoal Component: Display how much user can save per paycheck and how long to save to reach goal</h2>
        <p>Offer user option to alter goal</p>
        <Button />
        <button onClick={this.props.back}>Back</button>
      </div>
    )
  }
}
