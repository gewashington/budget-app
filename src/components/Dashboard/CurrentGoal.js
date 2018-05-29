import React from 'react';
import piggybank from './piggybank.jpg';


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

      </div>
    )
  }
}

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto'
}
