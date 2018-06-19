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
    currentAmount: ""
  };
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
        <p>Here is where the graph goes. Pass props from user here.</p>
        <div className="container">
          <div className="graphContainer">
            <Progress
              percent={percent}
              status="active"
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
              <form>
                <input name="addmoneyform" className="inputFormStyle" placeholder="Money for goal?" />

                <button>Submit</button>

              </form>
            </p>


            <p>Goal: 2000</p>
            <p>Saved: 0</p>
            <p>Left: 2000</p>
          </div>
        </div>
        <div className="goalNotesContainer">
      You have saved {this.calculatePercent()}% of your goal so far!
        </div>
      </div>
    );
  }
}
