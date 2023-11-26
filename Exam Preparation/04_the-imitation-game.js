function theImitationGame(input) {
  let message = input.shift();
  let action = input.shift();

  while (action != "Decode") {
    let tokens = action.split("|");
    let command = tokens[0];

    switch (command) {
      case "Move":
        let numLetters = Number(tokens[1]);
        let left = message.slice(0, numLetters);
        let right = message.slice(numLetters);
        message = right + left;
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];
        let leftSide = message.slice(0, index);
        let rightSide = message.slice(index);
        message = leftSide + value + rightSide;
        break;
      case "ChangeAll":
        let substring = tokens[1];
        let replacement = tokens[2];
        message = message.split(substring).join(replacement);
        break;
    }

    action = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame([

    'owyouh',
    
    'Move|2',
    
    'Move|3',
    
    'Insert|3|are', 
    
    'Insert|9|?' , 
    
    'Decode' ]);
