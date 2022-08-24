export const sortByDirectFlightCount = (arr: any[]) => {
  const sortedArr = arr.sort((a: any,b: any) => b.direct_flights - a.direct_flights);
  return sortedArr;
}