import React from 'react';
import GoalGraph from './GoalGraph';
import piggybank from './piggybank.jpg';

export default class CurrentGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDashboard() {
    const goalExists = this.props.goals[0];
    if (goalExists) {
      return <GoalGraph goals={this.props.goals} addMoney={this.props.addMoney} handleAddedMoneyInput={this.props.handleAddedMoneyInput}/>;
    }
    return (
      <div>
        <img src={piggybank}
          alt="No Goal Saved"
          style={imageStyle}
        />
        <p>  This piggy is ready for the dough! Let's make a goal to start saving!</p>
      </div>
    );
  }
  render() {
    console.log(this.props)

    return (
      this.renderDashboard()
    );
  }
}

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto',
};
