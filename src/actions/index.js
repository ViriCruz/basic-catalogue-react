
const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';

function fetchPokemonsPending() {
    return {
        type: FETCH_POKEMONS_PENDING
    }
}

function fetchPokemonsSuccess(pokemons) {
    return {
        type: FETCH_POKEMONS_SUCCESS,
        pokemons: pokemons
    }
}

function fetchPokemonsError(error) {
    return {
        type: FETCH_POKEMONS_ERROR,
        error: error
    }
}

export { 
  FETCH_POKEMONS_PENDING, 
  FETCH_POKEMONS_SUCCESS, 
  FETCH_POKEMONS_ERROR,
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError 
}