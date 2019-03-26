import React from "react";
import { Link} from "react-router-dom";
import { EPISODIO_1, 
EPISODIO_2 , 
EPISODIO_3 , 
EPISODIO_4 } from "./../constants/episodes";

const stateNewEpisodeName = newepisode => {
    switch (newepisode) {
        case EPISODIO_1:           
            return "Episodio 1";
        case EPISODIO_2:           
            return "Episodio 2";
        case EPISODIO_3:           
            return "Episodio 3";  
        case EPISODIO_4:           
            return "Episodio 4";  
        default:
            return "Episodio de Estreno ... comming soon.";
    }
};

const getNewEpisodeName = newepisode => {

            return ( stateNewEpisodeName(newepisode) )
    
};

const NewEpisodes = ({ id, newepisode}) => (
    <div>
        <Link to = "/episodes" > <h3>You ca now find it by Episodes</h3> </Link>
        
        <span>{`${id}`}</span>
        <br />
        {getNewEpisodeName(newepisode)}
    </div>
);

export default NewEpisodes ;