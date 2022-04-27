// -- Use line 2 instead of line 4 when checking function in node with test data below
// const findCommonArrayEls = (arrOfArrs) => {

// -- Export function
export const findCommonArrayEls = (arrOfArrs) => {
  const commonElsArr = [];
  if (arrOfArrs.length === 1) {
    commonElsArr.push([...arrOfArrs[0]]);
  } else {
    let toDo = [...arrOfArrs];
    while (toDo.length > 1) {
      toDo[0] = toDo[0].filter(function(o1) {
        return toDo[1].some(function(o2) {
          return o1.iataCode === o2.iataCode
        })
      })
      toDo.splice(1, 1);
    }
    commonElsArr.push(toDo[0]);
  }
  return commonElsArr;
}