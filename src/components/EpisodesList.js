import React from 'react';
import PropTypes from 'prop-types';
import EpisodeListItem from './EpisodeListItem';

const EpisodesList = ({ episode } )=> {
    return (
        <div>
            <div className="episode-list"> 
            {
                episode.map( eps =>
                    <EpisodeListItem
                        key={eps.id}
                        episode={eps.episode}
                        name={eps.name}
                        air_date={eps.air_date}
                        urlPath={eps.url}
                    ></EpisodeListItem>)
            }

            </div>
        </div>
    );
};

EpisodesList.propTypes = {
    episodes: PropTypes.array.isRequired,
};

export default EpisodesList;