function cookingMasterclass(input) {
  let budget = Number(input[0]);
  let students = Number(input[1]);
  let pricePackageFlour = Number(input[2]);
  let priceSingleEgg = Number(input[3]);
  let priceSingleApron = Number(input[4]);
  let freePackageFlour = 0;

  for (let i = 1; i <= students; i++) {
    if (i % 5 == 0) {
      freePackageFlour++;
    }
  }

  let totalPrice =
    priceSingleApron * students +
    priceSingleApron * Math.ceil(students * 0.2) +
    priceSingleEgg * 10 * students +
    pricePackageFlour * (students - freePackageFlour);

  if (totalPrice <= budget) {
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
  } else {
    console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
  }
}
