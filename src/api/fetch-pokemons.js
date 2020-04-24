import {fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError} from '../actions/index';

const pokemonsType = async(type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)

  if (response.ok) return response.json()

  throw new Error(response.status)
}

const pokemon = async(url) => {
  const response = await fetch(url)

  if (response.ok) return response.json()

  throw new Error(response.status)
}

const fetchPokemons = (type) => {
  return async(dispatch) =>{
    dispatch(fetchPokemonsPending());
    try {
      const response = await pokemonsType(type)
      dispatch(fetchPokemonsSuccess(response.pokemon))
      return response.pokemon
    } catch (e) {
      dispatch(fetchPokemonsError(e))
    }   
  }
}

export default fetchPokemons;