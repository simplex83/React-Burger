
import {  
 WS_CONNECTION_SUCCESS,
WS_GET_MESSAGE,
WS_GET_MESSAGE_AUTH,
WS_CONNECTION_CLOSED,
WS_CONNECTION_ERROR } from '../actions/wsActionTypes'

const initialState = {
    wsConnected: false,
    orders: [],
    ordersAuth: [],
    total: 0,
    totalToday: 0,
    error: undefined
};
export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          error: undefined,
          wsConnected: true
        };
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          error: action.payload,
          wsConnected: false
        };

      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          error: undefined,
          wsConnected: false
        };
      case WS_GET_MESSAGE:
        return {
          ...state,
            error: undefined,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday,
        };
        case WS_GET_MESSAGE_AUTH:
        return {
          ...state,
            error: undefined,
            ordersAuth: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday,
        };
      default:
        return state;
    }
  }; 