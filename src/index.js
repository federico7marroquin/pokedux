import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import pokemonReducer from './reducers/pokemonReducer';
import { logActions } from './middlewares';
import './index.css';
import pokemonSaga  from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, logActions)
);
const store = createStore(pokemonReducer, composedEnhancers);
sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
