function solve(startingYield) {
  let totalAmountSpice = 0;
  let miningCrewConsume = 0;
  let days = 0;

  while (startingYield >= 100) {
    totalAmountSpice += startingYield;
    miningCrewConsume += 26;
    startingYield = startingYield - 10;
    days++;
  }
  if (totalAmountSpice > 26) {
    miningCrewConsume += 26;
  }
  console.log(days);
  console.log(totalAmountSpice - miningCrewConsume);
}
solve(450);
