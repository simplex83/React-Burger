import { TCardItem } from "../types/types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DEL_INGREDIENT = "DEL_INGREDIENT";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";
export const SORT_INGREDIENT = "SORT_INGREDIENT";

//типизация экшенов конструктора
export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  data: TCardItem;
}
export interface IDelIngredientAction {
  readonly type: typeof DEL_INGREDIENT;
  data: TCardItem;
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export interface ISortIngredientAction {
  readonly type: typeof SORT_INGREDIENT;
  data: TCardItem[];
}

export type TConstructor =
  | IAddIngredientAction
  | IDelIngredientAction
  | IClearConstructorAction
  | ISortIngredientAction;
