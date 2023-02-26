import {
  getRegister,
  getLogin,
  getLogout,
  updateUser,
  getUser,
  updateToken,
} from "../../utils/api";
import { setCookie, deleteCookie, getCookie } from "../../utils/cookies";

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

export function register(user) {
  return function (dispatch) {
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
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: REG_ERROR,
        });
      });
  };
}

export function login(user) {
  return function (dispatch) {
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
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };
}

export function logout() {
  return function (dispatch) {
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
      .catch((err) => {
        console.log(err.message);
      });
  };
}

export const refreshToken = (cb) => {
  return function (dispatch) {
    const token = getCookie("refreshToken");
    updateToken(token).then(() => dispatch(cb));
  };
};

export function update(userData) {
  return function (dispatch) {
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
        if (res.message === "jwt expired") {
          console.error(res.message);
          dispatch(refreshToken(update(userData)));
        }
      });
  };
}

export function getUserInfo() {
  return function (dispatch) {
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
        if (res.message === "jwt expired") console.log(res.message);
        dispatch(refreshToken(getUserInfo()));
      });
  };
}
