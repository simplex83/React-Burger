import {
  getRegister,
  getLogin,
  getLogout,
  updateUser,
  getUser,
  updateToken,
} from "../../utils/api";
import { setCookie, deleteCookie, getCookie } from "../../utils/cookies";
import { TUser } from "../types/types";
import { AppDispatch } from "../types";

export const REG_REQUEST = "REG_REQUEST";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_ERROR = "REG_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUSET";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOG_OUT = "LOG_OUT";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCES";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCES";
export const GET_USER_ERROR = "GET_USER_ERROR";

//типизация экшенов авторизации

export interface IRegRequestAction {
  readonly type: typeof REG_REQUEST;
}
export interface IRegSuccessAction {
  readonly type: typeof REG_SUCCESS;
  user: TUser;
}
export interface IRegErrorAction {
  readonly type: typeof REG_ERROR;
}

export interface ILogRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILogSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
}
export interface ILogErrorAction {
  readonly type: typeof LOGIN_ERROR;
}

export interface ILogoutAction {
  readonly type: typeof LOG_OUT;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  user: TUser;
}
export interface IUpdateUserErrorAction {
  readonly type: typeof UPDATE_USER_ERROR;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  user: TUser;
}
export interface IGetUserErrorAction {
  readonly type: typeof GET_USER_ERROR;
}

export type TAuthorization =
  | IRegRequestAction
  | IRegSuccessAction
  | IRegErrorAction
  | ILogRequestAction
  | ILogSuccessAction
  | ILogErrorAction
  | ILogoutAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserErrorAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserErrorAction;

// типизация Thunk
export function register(user: {
  email: string;
  password: string;
  name: string;
}) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REG_REQUEST,
    });
    getRegister(user)
      .then((res) => {
        if (res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: REG_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
        dispatch({
          type: REG_ERROR,
        });
      });
  };
}

export function login(user: { email: string; password: string }) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    getLogin(user)
      .then((res) => {
        if (res.success) {
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };
}

export function logout() {
  return function (dispatch: AppDispatch) {
    getLogout()
      .then((res) => {
        if (res.success) {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          dispatch({
            type: LOG_OUT,
          });
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
      });
  };
}

export function refreshToken(cb: any) {
  console.log(" refresch token");
  return function (dispatch: AppDispatch) {
    const refreshToken = getCookie("refreshToken");
    updateToken(refreshToken).then(() => dispatch(cb));
  };
}

export function update(userData: {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
}) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    updateUser(userData)
      .then((res) => {
        if (!res.success) throw res;
        else {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({ type: UPDATE_USER_ERROR });
        if (res.message === "jwt expired" || res.message === "jwt malformed") {
          console.error(res.message);
          dispatch(refreshToken(update(userData)));
        }
      });
  };
}

export function getUserInfo() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUser()
      .then((res) => {
        if (!res.success) throw res;
        else {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((res) => {
        dispatch({ type: GET_USER_ERROR });
        if (res.message === "jwt expired" || res.message === "jwt malformed") {
          dispatch(refreshToken(getUserInfo()));
        }
      });
  };
}
