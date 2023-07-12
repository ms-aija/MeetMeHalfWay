import { airportSearchResultMock } from "../mocks/airportSearchResultMock";

const BASE_URL = 'http://localhost:3005';

export const getAirportSearchData = async (searchTerm: string) => {
  // ! RETURN ACTUAL DATA
  // try {
  //   const res = await fetch(`${BASE_URL}/airports/${searchTerm}`);
  //   const data = await res.json()
  //   return data
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }
  // ! RETURN MOCK DATA
  if (searchTerm === '') {
    return [];
  } else {
    // search through airportSEarchResultMock to check if searchTerm is included in address.cityName and return the full object
    const res = airportSearchResultMock.filter((airport) => {
      return airport.address.cityName.toLowerCase().includes(searchTerm.split(',')[0].toLowerCase())
    });
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