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
                products: action.payload
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

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;