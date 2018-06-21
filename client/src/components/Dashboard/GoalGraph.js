/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */


import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import './GoalGraph.css';

export default class GoalGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    currentAmount: "",
    complete: false,
  };

  this.setState({
    complete: this.props.goals[0] ? this.props.goals[0].current_amount === this.props.goals[0].goal_amount : false
  })
}

  calculatePercent = () => {
    return this.props.goals[0] ? 100 * (this.props.goals[0].current_amount / this.props.goals[0].goal_amount ) : 0
  }


  
  render() {
    // this.props.goals[0] ? console.log('this is current goal graph', 100 / (this.props.goals[0].goal_amount / this.props.goals[0].current_amount)) : null
    this.props.goals[0] ? console.log('this is the percent so far', this.calculatePercent()) : console.log('error') 
    let percent = this.calculatePercent()
    return (
      <div>
        <p>Hey there! Here is how you are doing so far:</p>
        <div className="container">
          <div className="graphContainer">
            <Progress
              percent={percent}
              status={this.props.goals[0].complete === true ? 'success' : 'active'}
              type="circle"
              theme={{
                 success: {
                   symbol: '🤩',
                   color: 'rgb(223, 105, 180)',
                 },
                 active: {
                   symbol: '😀',
                   color: '#fbc630',
                 },
                 default: {
                   symbol: '😱',
                   color: '#fbc630',
                 },
          }}
              width={400}

              className="goalProgressBar"
            />
          </div>
          <div className="goalBreakdownContainer">
      Let&apos;s add some money:
            <p>
              <form onSubmit={this.props.addMoney}>
                <input name="addedMoney" className="inputFormStyle" placeholder="Money for goal?" type="number" onChange={this.props.handleAddedMoneyInput}/>
                <button>Submit</button>
              </form>
            </p>


            <p>Goal: ${this.props.goals[0] ? this.props.goals[0].goal_amount : 0}</p>
            <p>Saved: ${this.props.goals[0] ? this.props.goals[0].current_amount : 0}</p>
            <p>Left: ${this.props.goals[0] ? this.props.goals[0].goal_amount - this.props.goals[0].current_amount : 0}</p>
          </div>
        </div>
        <div className="goalNotesContainer">
          You have saved {this.calculatePercent()}% of your goal so far!
          <div>
            {this.props.calculateWeeks()}
          </div>
         </div>
      </div>
    );
  }
}
