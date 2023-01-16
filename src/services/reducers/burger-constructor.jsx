import {
  ADD_INGREDIENT,
  DEL_INGREDIENT,
  CLEAR_CONSTRUCTOR,
  SORT_INGREDIENT,
} from "../actions/burger-constructor";

export const initialState = {
  selectedItems: [],
  selectedBun: [],
};
export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.data.type !== "bun") {
        return {
          ...state,
          selectedItems: [...state.selectedItems, action.data],
        };
      } else {
        return { ...state, selectedBun: [action.data] };
      }
    case DEL_INGREDIENT:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (ingredient) => ingredient.id !== action.data.id
        ),
      };
    case CLEAR_CONSTRUCTOR:
      return initialState;

    case SORT_INGREDIENT:
      return {
        ...state,
        selectedItems: action.data,
      };

    default:
      return state;
  }
};
