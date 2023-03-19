import { TCardItem } from "../types/types";

export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";

//типизация экшенов деталей
export interface IOpenIngAction {
  readonly type: typeof OPEN_INGREDIENT_DETAILS;
  data: TCardItem;
}

export interface ICloseIngAction {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS;
}

export type TIngDetails = IOpenIngAction | ICloseIngAction;

export const openIngredients = (ingredient: TCardItem) => ({
  type: OPEN_INGREDIENT_DETAILS,
  data: ingredient,
});
export const closeIngredients = () => ({
  type: CLOSE_INGREDIENT_DETAILS,
});
