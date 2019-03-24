import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';

import './App.css';
import { white } from 'ansi-colors';

class App extends Component {

  renderHome = () =>  <h1>Render Home</h1> ;

  renderCharacterListContainer = () => <h1> Character Container </h1>

  renderEpisodesListContainer = () => <h1> Episodes Container </h1>

  renderLocationListContainer = () => <h1> Location Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Route exact path="/" Component= {this.renderHome()} />
            <Route exact path="/character" Component= {this.renderCharacterListContainer()} />
            <Route exact path="/episode" Component={this.renderEpisodesListContainer()} />
            <Route exact path="/location" Component={this.renderLocationListContainer()} />                   
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
 