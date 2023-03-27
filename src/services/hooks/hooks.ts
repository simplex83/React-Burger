import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
  } from 'react-redux';
  import { AppDispatch, RootState } from '../types/index';
  
  export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
  export const useDispatch = () => dispatchHook<AppDispatch>();
