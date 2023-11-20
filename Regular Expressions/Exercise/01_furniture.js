function furnitureManagement(arr) {
  let totalPrice = 0;
  let furnituresArr = [];

  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let command = arr.shift();

  while (command != "Purchase") {
    let match = command.match(pattern);

    if (match != null) {
      let { name, price, qty } = match.groups;

      let furniturePrice = Number(qty) * Number(price);

      furnituresArr.push(name);
      totalPrice += furniturePrice;
    }
    command = arr.shift();
  }
  console.log("Bought furniture:");
  if (furnituresArr.length != 0) {
    console.log(furnituresArr.join("\n"));
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furnitureManagement([
  ">>Sofa<<312.23!3",

  ">>TV<<300!5",

  ">Invalid<<!5",

  "Purchase",
]);
