import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemonReducer';
import { filterType } from './filterReducer';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  filter: filterType,
});

export default rootReducer;
