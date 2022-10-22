import rootReducer from "../src/reducer";
const { expect } = require('chai');
import {
    GET_VIDEOGAMES,
    GET_VGAME_BY_ID,
} from "../src/reducer/index";

describe("Reducer", () => {
    const state = {
        videogames: [],
        videodetails: [],
        vgfilter: [],
        genres: [],
        platforms: []
    };

    it("Deberia retornar el estado inicial si no se pasa un type valido", () => {
        expect(rootReducer(undefined, [])).toEqual({ videogames: [], videodetails: [], vgfilter: [], genres: [], platforms: [] });
    });

    it('Deberia guardar en nuestro estate los juegos obtenidos de nuestro llamado al back cuando action type es "GET_VIDEOGAMES"', () => {
        const result = rootReducer(state, {
            type: GET_VIDEOGAMES,
            payload: data.videogames,
        });
        expect(result).not.toEqual(state);
        expect(result).toEqual({
            videogames: data.videogames,
            videogames: [],
        });
    });

    it('deberia guardar en nuestro state el videojuego obtenido de nuestro llamdo al back cuando action type es "GET_VGAME_BY_ID"', () => {
        const result = rootReducer(state, {
            type: GET_VGAME_BY_ID,
            payload: data.videogames[0],
        });
        expect(result). not.toEqual(state);
        expect(result).toEqual({
            videogames: [],
            videodetails: data.videogames[0],
        });
    });
});