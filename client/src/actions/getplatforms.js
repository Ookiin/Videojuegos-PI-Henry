import { GET_PLATFORMS } from '.';

export default function getplatforms() {
    return async function (dispatch) {
    try {
        const response = await fetch("http://localhost:3001/videogames");
        const data = await response.json();       
        const allPlat = await data.map((e) => e.platforms);
        const plats = await allPlat.flat();
        const unicos = [...new Set(plats)];       
        return dispatch({
            type: GET_PLATFORMS,
            payload: unicos
        })
    } catch (error) { return error }
}}
   