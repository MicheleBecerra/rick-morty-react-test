import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({ character })=> {
    return (
        <div>
            <div className="character-list-item">
                <div className="field">
                <h1> Episode Name: {character} </h1>
                </div>

            </div>
            
        </div>
    );
};

CharacterListItem.propTypes = {
    
};

export default CharacterListItem;