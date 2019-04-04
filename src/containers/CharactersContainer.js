import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CharactersList from '../components/CharactersList';


const characters = [
    { 
      "id" : "1" ,
      "name": "Rick Sanchez" ,
      "species": "Human"
    
    },
    {
        "id": "2",
        "name": "Morty Smith",
        "species": "Human"
        },
    {
        "id": "183",
        "name": "Johnny Depp",
        "species": "Human",
    }
    
] ;

class CharactersContainer extends Component {

    renderBody = characters => (
           <CharactersList 
                characters = {characters} 
                urlPath ={ '/character'} >
           </CharactersList>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Lista de TODOS los personajes !!!'}
                body={this.renderBody(characters)}>
                </AppFrame>
            </div>
        );
    }
}

CharactersContainer.propTypes = {

};

export default CharactersContainer;