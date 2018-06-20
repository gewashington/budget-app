/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */
import React from 'react';
import './MakeGoal.css';

export default class EnterSalary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Enter Salary: User enters his salary here</h2>
        <h3>Make sure the input can only take in numbers!</h3>
        <p>Enter how much money you make per week.</p>
        <p><input className="goalinputstyle" name="userSalary" onChange={this.handleChange} /></p>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}
