import React from 'react';
import GoalGraph from './GoalGraph';
import piggybank from './piggybank.jpg';

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto',
};

export default class CurrentGoal extends React.Component {
  renderDashboard() {
    const goalExists = this.props.goals[0];
    if (goalExists) {
      return <GoalGraph goals={this.props.goals} addMoney={this.props.addMoney} handleAddedMoneyInput={this.props.handleAddedMoneyInput} calculateWeeks={this.props.calculateWeeks} />;
    }
    return (
      <div>
        <img
          src={piggybank}
          alt="No Goal Saved"
          style={imageStyle}
        />
        <p>  This piggy is ready for the dough! Let's make a goal to start saving!</p>
      </div>
    );
  }
  render() {
    console.log(this.props);

    return (
      this.renderDashboard()
    );
  }
}
