import React from 'react';
import donaldduck from './donaldduck.gif';

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto',
};

export default class EnterGoal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
          <img src={donaldduck} alt="Just got paid" style={imageStyle}/>
        <h3>Enter How Much Goal Costs</h3>
        <p><input
          className="goalinputstyle"
          name="goalAmount"
          onChange={this.props.handleGoalChange}
          type="numbers" 
         />
        </p>
        <button onClick={this.props.next}>Next</button>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}
