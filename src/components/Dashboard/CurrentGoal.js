import React from 'react';
import GoalGraph from './GoalGraph';
import piggybank from './piggybank.jpg';
/* NOTES:
 - I can either load the user's data graph from this component or add another
 component specifically with the graph*/


export default class CurrentGoal extends React.Component {
  render() {
    return(
      <div>
        <img src={piggybank}
          alt="No Goal Saved"
          style={imageStyle}
        />
      <p>
        This image returns when a user has no goal saved. Otherwise, load graph with goal data.
      </p>
      <GoalGraph/>
      </div>
    )
  }
}

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto'
}
