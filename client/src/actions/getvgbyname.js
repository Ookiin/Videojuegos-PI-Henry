import { GET_VGAMES_BY_NAME } from '.';
import axios from 'axios'

export default function getvgbyname(name) {
    return async function (dispatch){ 
        try { const result = await axios.get(`/videogames?name=${name}`);
            return dispatch({ type: GET_VGAMES_BY_NAME, payload: result.data })  
         } catch (error) {
            alert(`Vaya.... Parece que has buscado un juego que no existe
            
            
                    El juego ${name} no esta en nuestra base de datos
                    
                    
                                    Apreta "Aceptar" para reiniciar la busqueda`)
            window.location.replace("/videogames");
         }                                                                                                  
    }}


   