import { getData } from "../../utils/api";
import { TCardItem } from "../types/types";
import { AppDispatch } from "../types";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

// типизация экшенов получения ингредиентов
export interface IGetIngRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: TCardItem[];
}
export interface IGetIngFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TGetIngActions =
  | IGetIngRequestAction
  | IGetIngSuccessAction
  | IGetIngFailedAction;

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getData()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}
