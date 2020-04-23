import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemon-reducer'

const rootReducer = combineReducers({
  data: pokemonsReducer,
})

export default rootReducer