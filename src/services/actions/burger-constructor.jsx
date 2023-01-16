import { nanoid } from "nanoid";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DEL_INGREDIENT = "DEL_INGREDIENT";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";
export const SORT_INGREDIENT = "SORT_INGREDIENT";

export const addIngredient = (ingredient) => {
  return {
    type: "ADD_INGREDIENT",
    data: { ...ingredient, id: nanoid(8) },
  };
};

export const delIngredient = (ingredient) => ({
  type: "DEL_INGREDIENT",
  data: ingredient,
});

export const clearConstructor = () => ({
  type: "CLEAR_CONSTRUCTOR",
});

export const sortIngredient = (ingredient) => ({
  type: "SORT_INGREDIENT",
  data: ingredient,
});
