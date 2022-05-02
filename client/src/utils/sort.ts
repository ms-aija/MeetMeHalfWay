import { Airports } from '../interfaces';

export const sortByDirectFlightCount = (arr: Airports[]) => {
  console.log(arr);
  const sortedArr = arr.sort(
    (a, b) => Number(b.direct_flights) - Number(a.direct_flights)
  );
  console.log(sortedArr, 'sorted');
  return sortedArr;
};
