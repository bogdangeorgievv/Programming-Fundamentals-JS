function piccoloManagement(arr) {
  let regNumArr = [];
  for (let input of arr) {
    let [command, regNum] = input.split(", ");

    if (command == "IN") {
        if(!regNumArr.includes(regNum)) {
            regNumArr.push(regNum);
        }
    }
    if (command == "OUT") {
        if(regNumArr.includes(regNum)) {
            let index = regNumArr.indexOf(regNum);
            regNumArr.splice(index, 1);
        }
    }
  }
  if (regNumArr.length == 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let sortedArray = regNumArr.sort();
    for (let reg of sortedArray) {
      console.log(reg);
    }
  }
}
piccoloManagement(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);
