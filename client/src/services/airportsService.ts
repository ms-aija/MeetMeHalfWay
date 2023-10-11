import { IAirport } from '../interfaces/Airports';
import { IDestinationCity } from '../interfaces/DestinationCities';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { airportSearchResultMock } from '../mocks/airportSearchResultMock';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { destinationResultMocks } from '../mocks/destinationResultMocks';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BASE_URL = 'http://localhost:3005';

export const getAirportSearchData = async (
  searchTerm: string
): Promise<{
  ok: boolean;
  status: number;
  body: IAirport[] | { code: number; message: string; description: string };
}> => {
  // ! RETURN ACTUAL DATA-------------------
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
  // ! -------------------------------------

  // ! RETURN MOCK DATA---------------------
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
  // ! -------------------------------------
};

export const getDestinationCityList = async (
  iataCode: string
): Promise<{
  ok: boolean;
  status: number;
  body:
    | IDestinationCity[]
    | { code: number; message: string; description: string };
}> => {
  // ! RETURN ACTUAL DATA-------------------
  // let response;
  // try {
  //   response = await fetch(`${BASE_URL}/destinations/${iataCode}`);
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
  // ! -------------------------------------

  // ! RETURN MOCK DATA---------------------
  const randomIndex = Math.floor(Math.random() * 10);
  const subsetOfMocks = destinationResultMocks.slice(
    randomIndex,
    randomIndex + 20
  );
  return Promise.resolve({ ok: true, status: 200, body: subsetOfMocks });
  // ! -------------------------------------
};
