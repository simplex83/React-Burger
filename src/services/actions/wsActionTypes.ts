import { TOrders } from "../types/types";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_START_AUTH = "WS_CONNECTION_START_AUTH";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE_AUTH = "WS_GET_MESSAGE_AUTH";

// типизация экшенов WS
export interface IWSConStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConStartAuthAction {
  readonly type: typeof WS_CONNECTION_START_AUTH;
}

export interface IWSConSuccesAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: any;
}

export interface IWSConClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  payload: TOrders;
}

export interface IWSGetMessageAuthAction {
  readonly type: typeof WS_GET_MESSAGE_AUTH;
  payload: TOrders;
}

export type TWSConnectionActions =
  | IWSConStartAction
  | IWSConStartAuthAction
  | IWSConSuccesAction
  | IWSConErrorAction
  | IWSConClosedAction
  | IWSGetMessageAuthAction
  | IWSGetMessageAction;
