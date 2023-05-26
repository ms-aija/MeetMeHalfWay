import { airportSearchResultMock } from "../mocks/airportSearchResultMock";

const BASE_URL = 'http://localhost:3005';

export const getAirportSearchData = (searchTerm: string) => {
  // return fetch(`${BASE_URL}/airports/${searchTerm}`)
  // .then(result => result.json())
  // .catch(err => console.error(err))

  // Return mock data)
  if (searchTerm === '') {
    return [];
  } else {
    // search through airportSEarchResultMock to check if searchTerm is included in address.cityName and return the full object
    const res = airportSearchResultMock.filter((airport) => {
      return airport.address.cityName.toLowerCase().includes(searchTerm.split(',')[0].toLowerCase())
    });
    console.log('res in getAiportSearchData: ', res);
    return res
  }
}

export const getDestinationCityList = (iataCode: string) => {
  return fetch(`${BASE_URL}/destinations/${iataCode}`)
  .then((result) => {
    const destResponse = result.json();
    return destResponse;
  })
  .catch(err => console.error(err))
}