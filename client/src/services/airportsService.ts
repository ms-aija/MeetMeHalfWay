import { IDestinationCity } from '../interfaces/DestinationCities';
import { airportSearchResultMock } from '../mocks/airportSearchResultMock';
import { destinationResultMocks } from '../mocks/destinationResultMocks';

const BASE_URL = 'http://localhost:3005';

export const getAirportSearchData = async (searchTerm: string) => {
  // ! RETURN ACTUAL DATA
  // let response;

  // try {
  //   response = await fetch(`${BASE_URL}/airports/${searchTerm}`);
  // } catch (err) {
  //   response = {
  //     ok: false,
  //     status: 500,
  //     json: async () => {
  //       return {
  //         code: 500,
  //         message: 'The server is not responding',
  //         description: `${err}`,
  //       };
  //     },
  //   };
  // }

  // return {
  //   ok: response.ok,
  //   status: response.status,
  //   body: await response.json(),
  // };

  // ! RETURN MOCK DATA
  if (searchTerm === '') {
    return {
      ok: true,
      status: 200,
      body: [],
    };
  } else {
    // search through airportSEarchResultMock to check if searchTerm is included in address.cityName and return the full object
    const res = airportSearchResultMock.filter((airport) => {
      return airport.address
        .cityName!.toLowerCase()
        .includes(searchTerm.split(',')[0].toLowerCase());
    });
    return {
      ok: true,
      status: 200,
      body: res,
    };
  }
};

export const getDestinationCityList = (
  iataCode: string
): Promise<IDestinationCity[]> => {
  // ! RETURN ACTUAL DATA
  // return fetch(`${BASE_URL}/destinations/${iataCode}`)
  //   .then((result) => {
  //     const destResponse = result.json();
  //     return destResponse;
  //   })
  //   .catch((err) => console.error(err));

  // ! RETURN MOCK DATA
  const randomIndex = Math.floor(Math.random() * 10);
  const subsetOfMocks = destinationResultMocks.slice(
    randomIndex,
    randomIndex + 20
  );
  return Promise.resolve(subsetOfMocks);
};
