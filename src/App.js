import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import  { Route } from "react-router";
import HomeComponent from './components/HomeComponent';
import './App.css';


class App extends Component {

  renderHome = () =>  < HomeComponent/>;

  renderCharacterListContainer = () => <h1> Character Container </h1>
    
  renderEpisodesListContainer = () => <h1> Episodes Container </h1>

  renderLocationListContainer = () => <h1> Location Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Route exact path="/" component= {this.renderHome} />
            <Route exact path="/character" component= {this.renderCharacterListContainer} />
            <Route exact path="/episode" component={this.renderEpisodesListContainer} />
            <Route exact path="/location" component={this.renderLocationListContainer} />                   
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
 