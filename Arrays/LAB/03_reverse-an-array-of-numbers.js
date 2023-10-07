function solve(n, inputArray) {
  let result = inputArray.slice(0, n);
  let reversed = result.reverse();

  console.log(reversed.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
