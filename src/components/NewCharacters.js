import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { RICK,
    MORTY,
    JOHNNY,
    ARCADE
} from "./../constants/characters";


const stateNewCharacterName = character => {
    switch (character) {
        case RICK:           
            return "Rick Sanchez";
        case MORTY:           
            return " Morty Smith";
        case JOHNNY:           
            return "Johnny Deep";  
        case ARCADE:           
            return "Arcade Alien";  
        default:
            return "Episodio de Estreno ... comming soon.";
    }
};

const GetNewCharacter = character => {
    return (stateNewCharacterName(character))
}

const NewCharacters = ({ id, character}) => (
    <div> 
         <Link to = "/characters" >  <h3>And new characters for more funn !!! </h3> </Link>
       
        <span>{`${id}`}</span>
        <br />

        {GetNewCharacter(character)}
         

    </div>

);

export default NewCharacters;




