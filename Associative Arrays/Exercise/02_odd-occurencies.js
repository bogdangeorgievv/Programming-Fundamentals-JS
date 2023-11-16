function oddOccurencies(input) {
  let arr = input.split(" ").map((x) => x.toLowerCase());
  let oddOcc = new Map();

  for (let word of arr) {
    let count = 0;
    for (let secondWord of arr) {
      if (secondWord == word) {
        count++;
      }
    }
    oddOcc.set(word, count);
  }

  let filteredArray = Array.from(oddOcc.entries()).filter(
    ([word, count]) => count % 2 == 1
  );

  let result = [];

  for (let [word, count] of filteredArray) {
    result.push(word);
  }
  console.log(result.join(" "));
}
oddOccurencies("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
