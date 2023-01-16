import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  dataRequest: false,
  dataFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.data,
        dataRequest: false,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        dataFailed: true,
      };

    default:
      return state;
  }
};
