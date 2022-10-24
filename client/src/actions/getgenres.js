import { GET_GENRES } from '.';
import axios from 'axios';

export default function getgenres() {
    return async function (dispatch){
        try { const result = await axios.get('/genres'); 
            return dispatch({ type: GET_GENRES, payload: result.data })                                                                                                 
    } catch (error) { console.log("Error en GET_GENRES: ", error) }
}}
