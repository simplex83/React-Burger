import {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
} from "../actions/ingredient-details";
import { TInitIngredientDetails } from "../types/types";
import { TIngDetails } from "../actions/ingredient-details";

const initialState: TInitIngredientDetails = {
  openIngredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action: TIngDetails) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        openIngredient: action.data,
      };

    case CLOSE_INGREDIENT_DETAILS:
      return initialState;

    default:
      return state;
  }
};
