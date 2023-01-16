export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";

export const openIngredients = (ingredient) => ({
  type: OPEN_INGREDIENT_DETAILS,
  data: ingredient,
});
export const closeIngredients = () => ({
  type: CLOSE_INGREDIENT_DETAILS,
});
