import {fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError} from '../actions/index';

function fetchPokemons() {
    return dispatch => {
        dispatch(fetchPokemonsPending());
        fetch('https://pokeapi.co/api/v2/gender/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPokemonsSuccess(res.pokemon_species_details));
            return res.pokemon_species_details;
        })
        .catch(error => {
            dispatch(fetchPokemonsError(error));
        })
    }
}

export default fetchPokemons;