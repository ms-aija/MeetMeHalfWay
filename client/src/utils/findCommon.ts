import { IDestinationCity } from '../interfaces/DestinationCities';

export const findCommonArrayEls = (
  arrOfArrs: IDestinationCity[][]
): IDestinationCity[] => {
  let commonElsArr: IDestinationCity[] = [];

  if (arrOfArrs.length === 1) {
    commonElsArr = arrOfArrs[0];
  } else {
    let toDo = [...arrOfArrs]; //[ [{dest1, dest2}], [{dest1, dest3}] ]
    while (toDo.length > 1) {
      toDo[0] = toDo[0].filter(function (o1: IDestinationCity) {
        return toDo[1].some(function (o2: IDestinationCity) {
          return o1.iataCode === o2.iataCode;
        });
      });
      toDo.splice(1, 1);
    }
    commonElsArr = toDo[0];
  }
  return commonElsArr;
};
