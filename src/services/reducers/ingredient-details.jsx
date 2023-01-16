import {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
} from "../actions/ingredient-details";

const initialState = {
  openIngredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
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
