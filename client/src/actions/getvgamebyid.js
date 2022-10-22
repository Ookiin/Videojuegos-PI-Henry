import {GET_VGAME_BY_ID} from '.'
import axios from 'axios'

export default function getvgamebyid(id) {
    return async function (dispatch) {
        try { const result = await axios.get(`/videogames/${id}`); 
            return dispatch({ type: GET_VGAME_BY_ID, payload: result.data }) 
        } catch (error) { console.log('Error in Action GET_VGAMES_BY_ID: ', error) }                                                                                                         
    }
}