function solve(num) {
  let product = 0;
  for (let i = 1 ; i <= 10 ; i++) {
    product = i * num;
    console.log(`${num} X ${i} = ${product}`)
  }
}
solve(5)
