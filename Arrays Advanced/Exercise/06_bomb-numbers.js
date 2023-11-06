function bombNumbers(nums, bombInfo) {
  let [bombNum, power] = bombInfo;

  while (nums.includes(bombNum)) {
    let idx = nums.indexOf(bombNum);
    nums.splice(idx - power, 2 * power + 1, 0); 
  }
  let sum = 0;
  for (let item of nums) {
    sum += item;
  }
  console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
