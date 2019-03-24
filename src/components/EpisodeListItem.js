import React from 'react';
import PropTypes from 'prop-types';

const EpisodeListItem = ({ episode }) => {
    return (
        <div>
            <div className= "episode-list-item">
                <div className= "field">
                <h1> Episode Name: { episode } </h1>
                </div>
            </div>

        </div>
    );
};

EpisodeListItem.propTypes = {
    
};

export default EpisodeListItem;