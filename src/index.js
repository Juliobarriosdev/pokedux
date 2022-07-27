import React from 'react';
import ReactDOM from 'react-dom/client';

import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger, featuring } from './middlewares';
import thunk from 'redux-thunk'

import './index.css';
import 'antd/dist/antd.css';
import App from './App';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk ,logger));

const store = createStore(rootReducer, composedEnhancers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

