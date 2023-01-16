import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_RESET,
} from "../actions/order-details";

const initialState = {
  orderRequest: false,
  orderFailed: false,
  orderNumber: null,
  orderOpened: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderOpened: true,
      };

    case MAKE_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderNumber: action.data,
      };

    case MAKE_ORDER_FAILED:
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        OrderOpened: true,
      };

    case MAKE_ORDER_RESET:
      return initialState;

    default:
      return state;
  }
};
