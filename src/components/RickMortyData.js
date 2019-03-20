import React from "react";
import NewCharacters from "./NewCharacters";
import  NewEpisodes from "./NewEpisodes";
import Location from "./Location";

const RickMortyData = ()  => (
    <div>  
        <NewEpisodes id={'# de Capítulo'} episode={ 'Nombre del capítulo' }/>   
        <br />
        <NewCharacters id={'idPersonaje'} character={'Nombre del personaje'} />
        <br />
        <Location id={'idLocation'} location={'Lugar del Universo'}/>
    </div>
);

export default RickMortyData;