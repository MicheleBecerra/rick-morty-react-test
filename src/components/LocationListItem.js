import React from 'react';
import PropTypes from 'prop-types';

const LocationListItem = ({ location })=> {
    return (
        <div>
            <div className="location-list-item" >
                <div className= "field">
                    <h1> Episode by Location { location } </h1>
                </div>
            </div>
            
        </div>
    );
};

LocationListItem.propTypes = {
    
};

export default LocationListItem;