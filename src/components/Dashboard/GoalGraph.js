import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import "./GoalGraph.css";

export default class GoalGraph extends React.Component {
  render() {
    return(
      <div>
        <p>Here is where the graph goes. Pass props from user here.</p>
        <div className="container">
        <div className="graphContainer">
        <Progress
      percent={0}
      status="active"
      type="circle"
      theme={{
                 success: {
                   symbol: '🤩',
                   color: 'rgb(223, 105, 180)'
                 },
                 active: {
                   symbol: '😀',
                   color: '#fbc630'
                 },
                 default: {
                   symbol: '😱',
                   color: '#fbc630'
                 }
          }}
      width={400}

      className="goalProgressBar"
    />
    </div>
    <div className="goalBreakdownContainer">

      Place this on right of Progress Bar
      <p>Goal: 2000</p>
      <p>Saved: 0</p>
      <p>Left: 2000</p>
    </div>
    </div>
    <div className="goalNotesContainer">
      Place this under Progress Bar
      My Goal:
      You have saved 0% of your goal so far!
    </div>
   </div>
    )
  }
}
