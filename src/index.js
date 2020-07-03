import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './components/app';
import './styles/main.css';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk];

const initialState = {
  pending: true,
  pendingPokemon: true,
  pokemons: [],
  error: null,
};

const store = createStore(rootReducer, {
  data: initialState,
  filter: 'normal',
}, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
