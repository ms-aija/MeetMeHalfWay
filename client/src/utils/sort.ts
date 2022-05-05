import { Airports } from '../interfaces';

export const sortByDirectFlightCount = (arr: Airports[]) => {
  const sortedArr = arr.sort((a, b) => Number(b.city) - Number(a.city));
  return sortedArr;
};
