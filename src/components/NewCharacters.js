import React from "react";

const NewCharacters = ({ id, character}) => (
    <div> 
        <h3>And new characters for more funn !!! </h3>
        <span>{id}</span>
        <br />
        <span>{character}</span>        

    </div>

);

export default NewCharacters;