import { handleActions } from 'redux-actions';
import { FETCH_CHARACTERS } from './../constants/index';
import { AST_Definitions } from 'terser';


export const characters = handleActions( {
    [FETCH_CHARACTERS]: (state , action) => [...action.payload],
 }, [] );

