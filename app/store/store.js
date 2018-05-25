/**
 * 创建store，整合Provider
 */

import thunk from 'redux-';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/rootReducer';

let store = createStore(rootReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;