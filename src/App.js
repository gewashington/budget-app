import React, { Component } from 'react';
import Landing from './components/Auth/Landing';
import { Route } from 'react-router-dom';
import './App.css';


//Goal: When button is clicked, component is changed to sign in
class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" component={Landing} />
      </div>
    );
  }
}

export default App;
