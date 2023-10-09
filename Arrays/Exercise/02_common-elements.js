function solve(first, second) {
   for(let el of first) {
    if(second.includes(el)) {
        console.log(el)
    }
   }
}
solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])
