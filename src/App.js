import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import  { Route } from "react-router";
import './App.css';
import HomeComponent from './components/HomeComponent';
import LocationsContainer from './containers/LocationsContainer';
import EpisodesContainer from './containers/EpisodesContainer';
import CharactersContainer from './containers/CharactersContainer';
import NewCharacterContainer from './containers/NewCharacterContainer';
import NewEpisodeContainer from './containers/NewEpisodeContainer';
import NewLocationsContainer from './containers/NewLocationsContainer';
import BarraNavegacion from "./components/barra/BarraNavegacion"

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          < BarraNavegacion />
            <div className="App-header">
              <Route exact path="/" component= {HomeComponent} />
              <Route exact path="/character" component= {CharactersContainer} />
              <Route exact path="/episode" component={EpisodesContainer} />
              <Route exact path="/location" component={LocationsContainer} /> 
              <Route exact path="/newcharacter" component={NewCharacterContainer}/>
              <Route exact path="/newepisode" component={NewEpisodeContainer}/>
              <Route exact path="/newlocation" component={NewLocationsContainer}/>     
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
 