import axios from 'axios';
import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: Realizar petición http
        const { data: { results: pokemons } } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({ pokemons, page: page + 1 }));
    }
}