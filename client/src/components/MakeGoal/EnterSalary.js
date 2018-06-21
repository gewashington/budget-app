/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */
import React from 'react';
import './MakeGoal.css';
import payday from './payday.gif';

const imageStyle = {
  backgroundSize: 'contain',
  height: '30vh',
  width: 'auto',
};

export default class EnterSalary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={payday} alt="Just got paid" style={imageStyle}/>
        <h2>Enter how much money you make per week.</h2>
        <p><input 
          className="goalinputstyle"
          name="userSalary"
          type="numbers"
          onChange={this.props.handleGoalChange}
          />
        </p>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}
