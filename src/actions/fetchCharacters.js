import { FETCH_CHARACTERS } from './../constants/index';

import { createAction } from "redux-actions";


 const characters = [
  { 
    "id" : "1" ,
    "name": "Rick Sanchez" ,
    "species": "Human"
  
  },
  {
      "id": "2",
      "name": "Morty Smith",
      "species": "Human"
      },
  {
      "id": "183",
      "name": "Johnny Depp",
      "species": "Human",
  }   
]




export const fetchCharacters  = createAction( FETCH_CHARACTERS, () => characters);

