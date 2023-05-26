import { IAirport } from "../interfaces/Airports";

export const findCommonArrayEls = (arrOfArrs: IAirport[][]): IAirport[] => {
  let commonElsArr: IAirport[] = [];
  if (arrOfArrs.length === 1) {
    commonElsArr = arrOfArrs[0];
  } else {
    let toDo = [...arrOfArrs]; //[ [{dest1, dest2}], [{dest1, dest3}] ]
    while (toDo.length > 1) {
      toDo[0] = toDo[0].filter(function(o1: IAirport) {
        return toDo[1].some(function(o2: IAirport) {
          return o1.iataCode === o2.iataCode
        })
      })
      toDo.splice(1, 1);
    }
    commonElsArr = toDo[0];
  }
  return commonElsArr;
}