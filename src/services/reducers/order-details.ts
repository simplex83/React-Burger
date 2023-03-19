import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_RESET,
} from "../actions/order-details";
import { TInitOrderDetails } from "../types/types";
import { TMakeOrderActions } from "../actions/order-details";

const initialState: TInitOrderDetails = {
  orderRequest: false,
  orderFailed: false,
  orderNumber: null,
};

export const orderDetailsReducer = (state = initialState, action: TMakeOrderActions) => {
  switch (action.type) {
    case MAKE_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
      };

    case MAKE_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderNumber: action.payload.order.number,
      };

    case MAKE_ORDER_FAILED:
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };

    case MAKE_ORDER_RESET:
      return initialState;

    default:
      return state;
  }
};
