import { baseUrl } from './const'

export function getData() {
    const res = fetch(baseUrl, {
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
  
    
  