import axios from 'axios';
import { POST_VGAME } from '.';

export default function postvgame(payload) {
    return async function (dispatch){ const result = await axios.post('/videogames', payload); 
        return dispatch({ type: POST_VGAME, payload: result.data })                                                                                                   
    }
}

