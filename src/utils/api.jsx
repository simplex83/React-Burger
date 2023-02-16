import { baseUrl } from './const'
import { getCookie, setCookie } from './cookies';

export function getData() {
    const res = fetch(`${baseUrl}/ingredients`, {
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
    })
    return res.then(getResponse)
    
  }

  function getResponse(res) {
    if(res.ok) {
        return res.json()
      } else Promise.reject(`Ошибка ${res.status}`);
  }
  
 export function makeOrder(data)  {
  const res = fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": data
    })
})
  return res.then(getResponse)
}

export function forgotPassword(email)  {
  const res = fetch(`${baseUrl}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "email": email
    })
})
  return res.then(getResponse)
}

export function resetPassword(password, code)  {
  const res = fetch(`${baseUrl}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "token": code
    })
})
  return res.then(getResponse)
}

export function getRegister(user) {
  const res = fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "email": user.email, 
       "password": user.password, 
       "name": user.name
    })
})
  return res.then(getResponse)
}

export function getLogin(user) {
  const res = fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "email": user.email, 
       "password": user.password, 
       
    })
})
  return res.then(getResponse)

}

 export function getLogout() {
  const res = fetch(`${baseUrl}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "token": getCookie("refreshToken")
       
    })
})
  return res.then(getResponse)
 }

 export function updateUser(userData) {
  const res = fetch(`${baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }),
  });
  return res.then(getResponse)
 }

 export function getUser() {
  const res = fetch(`${baseUrl}/auth/user`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
  return res.then(getResponse)
  
 }

 export function updateToken(token) {
  const res = fetch(`${baseUrl}/auth/token/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
  .then(getResponse)
  .then(res => {
    setCookie('refresh', res.refreshToken);
    setCookie('token', res.accessToken);
  })
  .catch((err) => console.log(err.status))
}