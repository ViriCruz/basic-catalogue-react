import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer'
import App from './components/app'

const middlewares = [thunk];

const initialState = {
  pending: false,
  pokemons: [],
  error: null
}

const store = createStore(rootReducer, {
  data: initialState
}, applyMiddleware(...middlewares))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

