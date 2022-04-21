const BASE_URL = 'http://localhost:3005';

export const getAirportList = () => {
  return fetch(`${BASE_URL}/airports`)
  .then(result => result.json())
  .catch(err => console.error(err))
}