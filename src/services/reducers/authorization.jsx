import {
  REG_REQUEST,
  REG_SUCCESS,
  REG_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_ERROR,
} from "../actions/authorization";

export const initialState = {
  user: null,
  isAuth: false,
  hasError: false,
  isLoading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case REG_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REG_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isAuth: true,
      };
    }
    case REG_ERROR: {
      return {
        ...state,
        isAuth: false,
        hasError: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isAuth: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        hasError: false,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        hasError: true,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        hasError: true,
      };
    }
    default:
      return state;
  }
}
