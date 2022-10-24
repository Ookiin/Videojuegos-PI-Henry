
import {GET_VIDEOGAMES, SORT_VGAMES, GET_GENRES, GENRES_FILTER, GET_PLATFORMS} from '../actions/index';
import {GET_VGAMES_BY_NAME, VIDEOGAMES_ORIGIN, POST_VGAME, GET_VGAME_BY_ID, GET_CLEAN, DELETE_VGAME} from '../actions/index';

const initialState = {
    videogames: [],
    videodetails: [],
    vgfilter: [],
    genres: [],
    platforms: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_VIDEOGAMES:     
            if(action.payload) {  
                return {       
                    ...state,   
                    videogames: action.payload, 
                    vgfilter: action.payload
                }              
            } else { return { ...state, videogames:[] } }
           

        case GET_VGAMES_BY_NAME:
            return { ...state, videogames: action.payload }

        case GET_VGAME_BY_ID:  
            return { ...state, videodetails: action.payload }

        case GET_GENRES:
            let genre = action.payload 
            genre.unshift('All')
            return{ ...state, genres: genre }

        case GET_PLATFORMS:
            return{ ...state, platforms: action.payload }  

        case GENRES_FILTER:
            const allVgames = state.vgfilter
            const genrefilter = action.payload === 'All' ? allVgames : allVgames.filter(p => p.genres.includes(action.payload))
        
            if (genrefilter.length === 0) {
                alert(`No hay videojuegos con el genero ${action.payload}`)
                return state
            } else { return { ...state, videogames: genrefilter } }    

        case POST_VGAME:
            return { ...state }   

        case DELETE_VGAME:
            return { ...state };

        case VIDEOGAMES_ORIGIN:
            const originVg = state.vgfilter
            const originfilter = action.payload === 'DB' 
            ? originVg.filter(p => p.origin === 'DB') 
            : originVg.filter(p => p.origin === 'API')
            
        return { ...state, videogames: action.payload === 'All' ? state.vgfilter : originfilter }

            case SORT_VGAMES:               

                if (action.payload === 'ratingUp') {
                    return {...state, videogames: [...state.videogames].sort((prev, next) => {
                        if(prev.rating > next.rating) return -1;
                        if(prev.rating < next.rating) return 1;
                        return 0;
                    })}}

                if (action.payload === 'ratingDown') {
                    return {...state, videogames: [...state.videogames].sort((prev, next) => {
                        if(prev.rating > next.rating) return 1;
                        if(prev.rating < next.rating) return -1;
                        return 0;
                    })}}

                if(action.payload === 'asc'){
                    return {...state, videogames: [...state.videogames].sort((prev, next) => {
                        if(prev.name > next.name) return 1
                        if(prev.name < next.name) return -1
                        return 0
                     })}}
                          
                if(action.payload === 'desc'){
                    return {...state, videogames: [...state.videogames].sort((prev, next) => {
                        if(prev.name > next.name) return -1
                        if(prev.name < next.name) return 1
                        return 0
                    })}}

                    break;
                
                case GET_CLEAN:
                    return { ...state, videodetails: [] }

        default:
            return state;
    }
}    