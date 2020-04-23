import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/root-reducer'
import App from './components/app'

const initialState = {
  pending: false,
  pokemons: [],
  error: null
}

const store = createStore(rootReducer, {
  data: initialState
})

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

