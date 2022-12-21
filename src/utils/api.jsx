import { baseUrl } from './const'

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
    console.log(res.ok)
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

