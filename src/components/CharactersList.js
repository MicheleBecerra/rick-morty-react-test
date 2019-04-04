import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const CharactersList = ({ characters }) => {
    return (
        <div>
            <div className="characters-list">
                {
                    characters.map( char => 
                    <CharacterListItem
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin}
                        image={char.image}
                        urlPath={char.url}                   
                    ></CharacterListItem>)
                }
            </div>
        </div>
    );
};

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired,
};

export default CharactersList;