import { makeOrder } from "../../utils/api";
import { ICreateOrder } from "../types/types";
import { AppDispatch } from "../types";

export const MAKE_ORDER_REQUEST = "MAKE_ORDER_REQUEST";
export const MAKE_ORDER_SUCCESS = "MAKE_ORDER_SUCCESS";
export const MAKE_ORDER_FAILED = "MAKE_ORDER_FAILED";
export const MAKE_ORDER_RESET = "MAKE_ORDER_RESET";

//типизация экшенов заказа
export interface IMakeOrderRequestAction {
  readonly type: typeof MAKE_ORDER_REQUEST;
}

export interface IMakeOrderSuccessAction {
  readonly type: typeof MAKE_ORDER_SUCCESS;
  payload: ICreateOrder;
}

export interface IMakeOrderFailedAction {
  readonly type: typeof MAKE_ORDER_FAILED;
}

export interface IMakeOrderResetAction {
  readonly type: typeof MAKE_ORDER_RESET;
}

export type TMakeOrderActions =
  | IMakeOrderRequestAction
  | IMakeOrderSuccessAction
  | IMakeOrderFailedAction
  | IMakeOrderResetAction;

export function createOrder(items: Array<string>) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: MAKE_ORDER_REQUEST,
    });
    makeOrder(items)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: MAKE_ORDER_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: MAKE_ORDER_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: MAKE_ORDER_FAILED,
        });
      });
  };
}
