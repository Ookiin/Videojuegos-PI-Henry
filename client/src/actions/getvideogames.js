import { GET_VIDEOGAMES } from '.';
import axios from 'axios';

export default function getvgames() {
    return async function (dispatch){
        try { const result = await axios.get('/videogames');        
        return dispatch({ type: GET_VIDEOGAMES, payload: result.data })                                                                                                 
    } catch (error) { console.log("Error en GET_VIDEOGAMES: ", error) }
}}