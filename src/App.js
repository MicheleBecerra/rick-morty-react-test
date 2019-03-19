import React, { Component } from 'react';
import HomeComponent from './components/HomeComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeComponent />
            
        </header>
      </div>
    );
  }
}

export default App;
