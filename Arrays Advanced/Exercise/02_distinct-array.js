function distinctArray(arr) {
  let result = [];
  for(let num of arr) {
    if(!result.includes(num)) {
    result.push(num)
    }
  }
  console.log(result.join(' '))
}
distinctArray([20, 8, 12, 13, 4,

  4, 8, 5]);
