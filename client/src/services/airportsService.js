const BASE_URL = 'http://localhost:3005';

export const getAirportList = () => {
  return fetch(`${BASE_URL}/airports`)
  .then(result => result.json())
  .catch(err => console.error(err))
}

export const getDestinationCityList = (iataCode) => {
  return fetch(`${BASE_URL}/destinations/${iataCode}`)
  .then(result => result.json())
  .catch(err => console.error(err))
}