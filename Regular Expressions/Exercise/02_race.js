function race(arr) {
  let names = arr.shift().split(", ");
  let results = {};

  names = names.forEach((name) => (results[name] = 0));
  let lettersPatern = /[A-Za-z]/g;
  let numbersPattern = /\d/g;

  let command = arr.shift();

  while (command != "end of race") {
    let lettersMatch = command.match(lettersPatern);
    let name = lettersMatch.join("");

    let numbersMatch = command.match(numbersPattern);
    let distance = numbersMatch.map(Number).reduce((acc, val) => acc + val);
    
    if (name in results) {
      results[name] += distance;
    } 
    command = arr.shift();
  }
  let entries = Object.entries(results).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${entries[0][0]}`);
  console.log(`2nd place: ${entries[1][0]}`);
  console.log(`3rd place: ${entries[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
