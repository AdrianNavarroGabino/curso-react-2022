import { startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: Realizar petición http

        // dispatch(setPokemons());
    }
}