import React from 'react';

export default class EnterGoal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>EnterGoal Component: User enter goal to save for here</h2>
        <h3>Enter Goal Name</h3>
        <input className="goalinputstyle" name="goalnameform" />
        <h3>Enter How Much Goal Costs</h3>
        <p><input className="goalinputstyle" name="goalamountform" /></p>
          <button onClick={this.props.next}>Next</button>
          <button onClick={this.props.back}>Back</button>
      </div>
    )
  }
}
