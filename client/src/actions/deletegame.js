import axios from 'axios'
import { DELETE_VGAME } from '.';

export const deletegame = (id) => async (dispatch) => {
    return await axios.delete(`/videogames/${id}`) 
    .then(g => dispatch({ type: DELETE_VGAME, payload: g.data})
    )
}

export default deletegame

