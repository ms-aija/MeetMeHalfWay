export const findCommonArrayEls = (arrOfArrs) => {
  console.log('is in findCommonArrayEls function');
  const commonElsArr = [];
  if (arrOfArrs.length === 1) {
    commonElsArr.push(arrOfArrs[0]);
  } else {
    let toDo = arrOfArrs;
    console.log('toDo before while: ', toDo)
    // console.log('toDo length: ', toDo.length)
    while (toDo.length > 1) {
      // toDo[0] = toDo[0].filter(val => toDo[1].includes(val));
      toDo[0] = toDo[0].filter(function(o1) {
        return toDo[1].some(function(o2) {
          return o1.iataCode === o2.iataCode
        })
      })
      toDo.splice(1, 1);
      // console.log('toDo end of cycle in While: ', toDo);
    }
    commonElsArr.push(toDo[0]);
  }
  return commonElsArr;
}


//TEST DATA
// const arrOfArrs3 = [
//   [
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'ABZ' },
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'CDA' },
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'FGG' },
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'MNO' }
//   ],
//   [
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'ABZ' },
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'FGG' },
//     { type: 'location', subtype: 'city', name: 'ABERDEEN', iataCode: 'MNO' }
//   ]
// ]

// console.log('result: ',findCommonArrayEls(arrOfArrs3));