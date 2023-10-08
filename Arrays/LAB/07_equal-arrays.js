function solve(first, second) {
  for (let i = 0; i < first.length; i++) {
    first[i] = Number(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    second[i] = Number(second[i]);
  }
  let areEqual = true;
  let sum = 0;

  for (let i = 0; i < first.length; i++) {
    if (first[i] == second[i]) {
      sum += first[i];
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

solve(["1"], ["1"]);
