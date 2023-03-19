
//типизация объектов
export type TCardItem = {
  readonly id: string;
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly __v: number;
};
export type TOrders = {
  orders: Array<TOrder>;
  total: number | null;
  totalToday: number | null;
};

export type TOrder ={
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}


// типизация Api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IResBody {
  success: boolean;
}

export interface IData extends IResBody {
  data: Array<TCardItem>;
}
export interface ICreateOrder extends IResBody {
  name: string;
  order: {
    createdAt: string;
    ingredients: Array<TCardItem>;
    name: string;
    number: number;
    owner: {
      createdAt: string;
      email: string;
      name: string;
      updatedAt: string;
    };
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
  };
}

export interface IToken extends IResBody {
  accessToken: string;
  refreshToken: string;
}
export interface IUserRes extends IResBody {
  user: {
    name: string;
    email: string;
  };
}

export type TUser = {
  email: string;
  name: string;
};

export interface ILogin extends IToken, IUserRes {}

export interface IAuth extends IResBody {
  message: string;
}

//типизация WS
export interface IWebSocket {
  wsInit: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}

//типизация редьюсеров
export type TInitAuth = {
  user: TUser | null,
  isAuth: boolean,
  hasError: boolean,
  isLoading: boolean,
}
export type TInitConstructor = {
  selectedItems: Array<TCardItem>,
  selectedBun: Array <TCardItem>,
}

export type TInitIngredientDetails = {
  openIngredient: TCardItem | null

}

export type TInitIngredient = {
  ingredients: ReadonlyArray<TCardItem>,
  dataRequest: boolean,
  dataFailed: boolean,
};

export type TInitOrderDetails = {
    orderRequest: boolean,
    orderFailed: boolean,
    orderNumber: number | null,
  };

  export type TIinitWs = {
    wsConnected: boolean,
    orders: Array<TOrder>,
    ordersAuth: Array<TOrder>,
    total: number | null ,
    totalToday: number | null ,
    error: undefined

  }