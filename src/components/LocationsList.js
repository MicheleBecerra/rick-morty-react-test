import React from 'react';
import PropTypes from 'prop-types';
import LocationListItem from "./LocationListItem";

const LocationsList = ({ location }) => {
    return (
        <div>
            <div className="location-list">
                {
                    location.map( loc =>
                        <LocationListItem
                            key={loc.id}
                            dimension={loc.dimension}
                            name={loc.name}
                            residents={loc.residents}
                            urlPath={loc.url}
                        ></LocationListItem>)
                }

            </div>
        </div>
    );
};

LocationsList.propTypes = {
    
};

export default LocationsList;