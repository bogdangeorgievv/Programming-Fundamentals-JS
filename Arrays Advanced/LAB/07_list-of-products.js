function listOfProducts(arr) {
    let sorted = arr.sort()
    sorted.forEach((product, index) => console.log(`${index + 1}.${product}`));
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
