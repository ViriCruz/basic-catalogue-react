import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemon-reducer'
import filterType from './filter-reducer'
const rootReducer = combineReducers({
  data: pokemonsReducer,
  filter: filterType,
})

export default rootReducer