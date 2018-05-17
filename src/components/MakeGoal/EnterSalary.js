import React from 'react';

export default class EnterSalary extends React.Component {
  render() {
    return(
      <div>
        <h2>Enter Salary: User enters his salary here</h2>
        <h3>Make sure the input can only take in numbers!</h3>
        <p>Enter how much money you make per week.</p>
        <input style={{ margin: "20px auto", display: "block"}} type="text" name="usersalary" />
        <button>This button goes to next string</button>
      </div>
    )
  }
}
