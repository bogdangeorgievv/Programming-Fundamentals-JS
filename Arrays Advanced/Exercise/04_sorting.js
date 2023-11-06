function sorting(arr) {
  let result = [];
  let sorted = arr.slice().sort((a, b) => a - b);

  while (sorted.length > 0) {
    let maxNum = sorted.pop();
    result.push(maxNum);
    let minNum = sorted.shift();
    result.push(minNum);
  }

  console.log(result.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
