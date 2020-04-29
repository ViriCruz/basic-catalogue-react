import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchSinglePokemonError,
  fetchSinglePokemonPending,
  fetchSinglePokemonSuccess,
  changeType,
} from '../actions/index';

const pokemonsType = async type => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const pokemonProps = async name => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const fetchPokemons = type => async dispatch => {
  dispatch(fetchPokemonsPending());
  try {
    const response = await pokemonsType(type);
    dispatch(fetchPokemonsSuccess(response.pokemon));
    dispatch(changeType(type));
    return response.pokemon;
  } catch (e) {
    dispatch(fetchPokemonsError(e));
  }
  return null;
};

const fetchPokemon = name => async dispatch => {
  dispatch(fetchSinglePokemonPending());
  try {
    const response = await pokemonProps(name);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(fetchSinglePokemonSuccess(pokemon));
    return pokemon;
  } catch (e) {
    dispatch(fetchSinglePokemonError(e));
  }
  return null;
};

export default {
  fetchPokemons,
  fetchPokemon,
};
