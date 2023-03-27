import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socketMiddleware';
import {   
WS_CONNECTION_START,
WS_CONNECTION_START_AUTH,
 WS_CONNECTION_SUCCESS,
 WS_GET_MESSAGE,
 WS_GET_MESSAGE_AUTH,
 WS_CONNECTION_CLOSED,
 WS_CONNECTION_ERROR } from './actions/wsActionTypes';

const wsUrl = "wss://norma.nomoreparties.space/orders";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};
const wsActionsAuth = {
  wsInit: WS_CONNECTION_START_AUTH,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE_AUTH
};




declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk,socketMiddleware(wsUrl, wsActions),socketMiddleware(wsUrl,wsActionsAuth)));

export const store = createStore(rootReducer,enhancer);