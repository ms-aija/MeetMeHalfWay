export const sortByDirectFlightCount = (arr) => {
  const sortedArr = arr.sort((a,b) => b.direct_flights - a.direct_flights);
  return sortedArr;
}