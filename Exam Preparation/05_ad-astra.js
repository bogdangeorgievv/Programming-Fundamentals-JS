function adAstra(input) {
  let str = input.shift();
  let pattern =
    /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let totalCalories = 0;
  let products = [];

  let matches = str.matchAll(pattern);

  for (let match of matches) {
    let { name, expdate, calories } = match.groups;
    totalCalories += Number(calories);

    products.push({ name, expdate, calories });
  }

  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  products.forEach((product) =>
    console.log(
      `Item: ${product.name}, Best before: ${product.expdate}, Nutrition: ${product.calories}`
    )
  );
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
