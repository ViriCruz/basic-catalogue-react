import {fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError} from '../actions/index';

const typePokemons = async(type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)

  if (response.ok) return response.json()

  throw new Error(response.status)
}


const fetchPokemons = (type) => {
  return async(dispatch) =>{
    dispatch(fetchPokemonsPending());
    try {
      const response = await typePokemons(type)
      dispatch(fetchPokemonsSuccess(response.pokemon))
      return response.pokemon
    } catch (e) {
      dispatch(fetchPokemonsError(e))
    }   
  }
}

export default fetchPokemons;