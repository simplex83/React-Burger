import { store } from "../store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { TAuthorization } from "../actions/authorization";
import { TConstructor } from "../actions/burger-constructor";
import { TIngDetails } from "../actions/ingredient-details";
import { TGetIngActions } from "../actions/ingredients";
import { TMakeOrderActions } from "../actions/order-details";
import { TWSConnectionActions } from "../actions/wsActionTypes";


export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TAuthorization | TConstructor | TIngDetails | TGetIngActions | TMakeOrderActions | TWSConnectionActions;

export type AppThunk<TReturn = void> = 
  ThunkAction<TReturn, Action, RootState, TApplicationActions>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
