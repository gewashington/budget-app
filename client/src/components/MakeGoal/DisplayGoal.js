import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import celebration from './celebration.gif';


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
        <img src={celebration} />
        <h2>Congratulations! You made a new goal!</h2>
      <h3>You can save this goal or go back and refine it!</h3>
        <Button />
        <button onClick={this.props.back}>Back</button>
      </div>
    )
  }
}
