import React from 'react';

export default class EnterGoal extends React.Component {
  render() {
    return(
      <div>
        <h2>EnterGoal Component: User enter goal to save for here</h2>
        <h3>Enter Goal Name</h3>
        <input style={{ margin: "20px auto", display: "block"}} type="text" name="goalnameform" />
        <h3>Enter How Much Goal Costs</h3>
        <input style={{ margin: "20px auto", display: "block"}} type="text" name="goalamountform" />
        <button>Button goes to next and final page</button>
      </div>
    )
  }
}
