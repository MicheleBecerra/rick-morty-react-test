import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const CahractersList = ({ character }) => {
    return (
        <div>
            <div className="character-list">
                {
                    character.map( char => 
                    <CharacterListItem
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        urlPath={char.url}                   
                    ></CharacterListItem>)
                }
            </div>
        </div>
    );
};

CahractersList.propTypes = {
    
};

export default CahractersList;