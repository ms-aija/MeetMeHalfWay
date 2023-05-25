import { airportSearchResultMock } from "../mocks/airportSearchResultMock";

const BASE_URL = 'http://localhost:3005';

export const getAirportSearchData = (searchTerm: string) => {
  // return fetch(`${BASE_URL}/airports/${searchTerm}`)
  // .then(result => result.json())
  // .catch(err => console.error(err))

  // Return mock data)
  return airportSearchResultMock;
}

export const getDestinationCityList = (iataCode: string) => {
  return fetch(`${BASE_URL}/destinations/${iataCode}`)
  .then((result) => {
    const destResponse = result.json();
    return destResponse;
  })
  .catch(err => console.error(err))
}