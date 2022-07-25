import React from 'react';
import ReactDOM from 'react-dom/client';

import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import './index.css';
import 'antd/dist/antd.css';
import App from './App';

const store = createStore(pokemonsReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

