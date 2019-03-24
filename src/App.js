import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import HomeComponent from './components/HomeComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">

            <HomeComponent />           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
 