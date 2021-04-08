import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [
    promiseMiddleware,
    thunk
];

export const store = createStore(reducers, (applyMiddleware(...middleware)))