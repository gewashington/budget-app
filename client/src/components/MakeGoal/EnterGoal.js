import React from 'react';

export default class EnterGoal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3>Enter How Much Goal Costs</h3>
        <p><input className="goalinputstyle" name="goalAmount" onChange={this.props.handleChange} /></p>
          <button onClick={this.props.next}>Next</button>
          <button onClick={this.props.back}>Back</button>
      </div>
    )
  }
}
