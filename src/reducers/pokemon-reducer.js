import {FETCH_POKEMONS_PENDING, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_ERROR} from '../actions/index';

export const pokemonsReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_POKEMONS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pending: false,
                pokemons: action.pokemons
            }
        case FETCH_POKEMONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getPokemons = state => state.data.pokemons;
export const getPokemonsPending = state => state.data.pending;
export const getPokemonsError = state => state.data.error;