import { Airports } from '../interfaces';

export const sortByDirectFlightCount = (arr: Airports[]) => {
  const sortedArr = arr.sort(
    (a: any, b: any) => b.direct_flights - a.direct_flights
  );
  return sortedArr;
};
