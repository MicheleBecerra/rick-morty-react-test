import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import  { Route } from "react-router";
import './App.css';
import HomeComponent from './components/HomeComponent';
import LocationsContainer from './containers/LocationsContainer';
import EpisodesContainer from './containers/EpisodesContainer';
import CharactersContainer from './containers/CharactersContainer';


class App extends Component {

  renderHome = () =>  <h1> Home Container </h1>;

  renderCharacterListContainer = () => <h1> Character Container </h1>
    
  renderEpisodesListContainer = () => <h1> Episodes Container </h1>

  renderLocationListContainer = () => <h1> Location Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Route exact path="/" component= {HomeComponent} />
            <Route exact path="/character" component= {CharactersContainer} />
            <Route exact path="/episode" component={EpisodesContainer} />
            <Route exact path="/location" component={LocationsContainer} />                   
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
 