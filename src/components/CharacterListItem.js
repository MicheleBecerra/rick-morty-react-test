import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({ name })=> {
    return (
        <div>
            <div className="character-list-item">
                <div className="field">
                <h1> Character Name: {name} </h1>
                </div>

            </div>
            
        </div>
    );
};

CharacterListItem.propTypes = {
    
};

export default CharacterListItem;