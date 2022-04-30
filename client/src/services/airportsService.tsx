const BASE_URL = 'http://localhost:3007';

export const getAirportList = () => {
  return fetch(`${BASE_URL}/airports`)
    .then((result) => result.json())
    .catch((err) => console.error(err));
};

export const getDestinationCityList = (iataCode: string) => {
  return fetch(`${BASE_URL}/destinations/${iataCode}`)
    .then((result) => {
      const destResponse = result.json();
      return destResponse;
    })
    .catch((err) => console.error(err));
};
