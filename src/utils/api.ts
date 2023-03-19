import { BASE_URL } from "./const";
import { getCookie, setCookie } from "./cookies";
import { IData, IResponse, ICreateOrder, ILogin, IAuth, IToken, IUserRes } from "../services/types/types";

//типизация Api запросов

type TOptions = {
  method: string;
  headers: { authorization?: string; "Content-type": string };
  body?: string;
};

function getResponse<T>(res: IResponse<T>): Promise<T> | Promise<never> {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
}

function request<T>(url: string, options: TOptions): Promise<T> {
  return fetch(url, options).then(getResponse);
}

//получить базу ингредиентов
export function getData() {
  return request<IData>(`${BASE_URL}/ingredients`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
}

// отправить заказ
export function makeOrder(data: Array<string>) {
  return request<ICreateOrder>(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  });
}

// запросить регистрацию 
export function getRegister(user: {email:string, password: string, name: string}) {
  return request<ILogin>(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
    }),
  });
}
// запросить авторизацию
export function getLogin(user: {email:string, password: string}) {
  return request<ILogin>(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  });
}
  
// забыл пароль
export function forgotPassword(email: string) {
  return request<IAuth>(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
}

// запросить сброс пароля
export function resetPassword(password: string, code: string) {
  return request<IAuth>(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  });
}

// запросить разлогин
export function getLogout() {
  return request<IAuth>(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  });
}

//запросить обновление пользователя
export function updateUser(userData: { email:string | undefined, password: string | undefined, name: string | undefined }) {
  return request<IUserRes>(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }),
  });
}
//запросить данные пользовател
export function getUser() {
  return request<IUserRes>(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
}
// обновить токен
export function updateToken(token: string | undefined) {
  return request <IToken>(`${BASE_URL}/auth/token/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  })
    .then((res) => {
      setCookie("refreshToken", res.refreshToken);
      setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    })
    .catch((err) => console.log(err.status));
}
