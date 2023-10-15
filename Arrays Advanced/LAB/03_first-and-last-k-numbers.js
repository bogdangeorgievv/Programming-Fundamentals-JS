function firstAndLastKNumbers(arr) {
    let k = arr.shift(); //removes to first element and takes it
    console.log(arr.slice(0, k).join(' '))   // 0, k = 0, 2 = 7, 8
    console.log(arr.slice(-k).join(' '))   // -k = 8, 9

}
firstAndLastKNumbers([2, 7, 8, 9]);
