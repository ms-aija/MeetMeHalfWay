import { Airports } from '../interfaces';

export const sortByDirectFlightCount = (arr: Airports[]) => {
  console.log(arr);
  const sortedArr = arr.sort((a, b) => Number(b.city) - Number(a.city));
  return sortedArr;
};
