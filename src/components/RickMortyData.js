import React from "react";
import NewCharacters from "./NewCharacters";
import  NewEpisodes from "./NewEpisodes";
import Location from "./Location";
import { RICK,
    MORTY,
    JOHNNY,
    ARCADE
} from "./../constants/characters";
import { EPISODIO_1, 
    EPISODIO_2 , 
    EPISODIO_3 , 
    EPISODIO_4 } from "./../constants/episodes";
import { EARTH,
    CITADEL,
    MONSTER
 } from "./../constants/locations";


const RickMortyData = ()  => (
    <div>  
        <NewEpisodes id={'idEpisode'} newepisode={EPISODIO_4}/>   
        <br />
        <NewCharacters id={'idCharacter'} character={JOHNNY} />
        <br />
        <Location id={'idLocation'} location={MONSTER}/>
    </div>
);

export default RickMortyData;