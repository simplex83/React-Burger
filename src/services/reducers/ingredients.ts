import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients";
import { TGetIngActions } from "../actions/ingredients";
import { TInitIngredient } from "../types/types";

const initialState: TInitIngredient = {
  ingredients: [],
  dataRequest: false,
  dataFailed: false,
};

export const ingredientsReducer = (state = initialState, action: TGetIngActions) => {
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
        ingredients: action.payload,
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
