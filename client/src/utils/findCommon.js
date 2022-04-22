// -- Use line 2 instead of line 4 when checking function in node with test data below
// const findCommonArrayEls = (arrOfArrs) => {

// -- Export function
export const findCommonArrayEls = (arrOfArrs) => {
  // console.log('is in findCommonArrayEls function', arrOfArrs);
  // console.log('length of arrOfArrs: ', arrOfArrs.length)
  const commonElsArr = [];
  if (arrOfArrs.length === 1) {
    // console.log('is in findCommonArrayEls 1st if statement for array of single element');
    commonElsArr.push([...arrOfArrs[0]]);
  } else {
    let toDo = [...arrOfArrs];
    // console.log('toDo before while: ', toDo)
    // console.log('todo0', toDo[0][0].length);
    // console.log('todo1', toDo[1][0].length);
    // console.log('toDo length: ', toDo.length)
    while (toDo.length > 1) {
      toDo[0][0] = toDo[0][0].filter(function(o1) {
        return toDo[1][0].some(function(o2) {
          return o1.iataCode === o2.iataCode
        })
      })
      toDo.splice(1, 1);
      // console.log('toDo end of cycle in While: ', toDo);
    }
    commonElsArr.push(toDo[0]);
  }
  // console.log('common els in function: ', commonElsArr);
  return commonElsArr;
}


//-- TEST DATA (mock of data returned from API)
// const arrOfArrs3 = [
//   [
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'ABZ' },
//     { type: 'location', subtype: 'city', name: 'CITY2', iataCode: 'CDA' },
//     { type: 'location', subtype: 'city', name: 'CITY3', iataCode: 'FGG' },
//     { type: 'location', subtype: 'city', name: 'CITY4', iataCode: 'MNO' }
//   ],
//   [
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'ABZ' },
//     { type: 'location', subtype: 'city', name: 'CITY3', iataCode: 'FGG' },
//     // { type: 'location', subtype: 'city', name: 'CITY4', iataCode: 'MNO' }
//   ]
// ]

// console.log('result: ',findCommonArrayEls(arrOfArrs3));