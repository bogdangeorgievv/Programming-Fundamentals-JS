function wordOccurencies(input) {
  let map = new Map();

  for (let word of input) {
    let count = 1;
    if (map.has(word)) {
      let currentCount = map.get(word);
      let newCount = currentCount + 1;
      map.set(word, newCount);
    } else {
      map.set(word, count);
    }
  }
 
  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let [word, times] of sorted) {
    console.log(`${word} -> ${times} times`);
  }
}
wordOccurencies([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
