import React from 'react';
import ReactDOM from 'react-dom/client';

import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger, featuring } from './middlewares';

import './index.css';
import 'antd/dist/antd.css';
import App from './App';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
);

const store = createStore(
  pokemonsReducer,
  composedEnhancers
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

