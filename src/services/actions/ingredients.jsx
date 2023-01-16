import { getData } from "../../utils/api";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getData().then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
        Promise.reject(`Ошибка ${res.status}`)
      }
    })
    .catch(() => {
      dispatch ({
        type: GET_INGREDIENTS_FAILED,
      })
    })
  };
};
