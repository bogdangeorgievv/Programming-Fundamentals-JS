function solve(arrOfStrings) {
  let sum = 0;
  for (let i = 0; i < arrOfStrings.length - 1; i++) {
    let num = Number(arrOfStrings[i]);
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
}
solve(["1", "2", "3", "4", "5", "6"]);
