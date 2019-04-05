import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CharactersList from '../components/CharactersList';
import { fetchCharacters } from "./../actions/fetchCharacters";




class CharactersContainer extends Component {

    componentDidMount() {
        this.props.fetchCharacters() ;
    }

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
                body={this.renderBody(this.props.characters)}>
                </AppFrame>
            </div>
        );
    }
}

CharactersContainer.propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
};

CharactersContainer.defaultProps = {

    characters : [   ] 
};

const mapStateToProps = state => ({
    characters: state.characters
})
export default (connect( mapStateToProps, { fetchCharacters }) (CharactersContainer));