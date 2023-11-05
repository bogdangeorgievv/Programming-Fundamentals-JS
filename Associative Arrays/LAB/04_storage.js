function storage(input) {
  
  let map = new Map();

  for (let item of input) {
    let [product, quantity] = item.split(" ");
    quantity = Number(quantity);

    if (map.has(product)) {
      let currQuantity = map.get(product);
      let newQuantity = currQuantity + quantity;
      map.set(product, newQuantity);
    } else {
      map.set(product, quantity);
    }
  }
  
  for (let [key, value] of map) {
    console.log(key, "->", value);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
