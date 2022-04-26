const BASE_URL = 'http://localhost:3005';

export const getAirportList = () => {
  return fetch(`${BASE_URL}/airports`)
  .then(result => result.json())
  .catch(err => console.error(err))
}

export const getDestinationCityList = (iataCode) => {
  return fetch(`${BASE_URL}/destinations/${iataCode}`)
  .then((result) => {
    const destResponse = result.json();
    return destResponse;
    // console.log('result in airportsService: ', destResponse)
  })
  .catch(err => console.error(err))
}