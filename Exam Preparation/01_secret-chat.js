function secretChat(input) {
    let message = input.shift();
  
    while (input[0] != "Reveal") {
      let line = input.shift();
      let tokens = line.split(":|:");
      let command = tokens[0];
  
      if (command == "InsertSpace") {
        let index = Number(tokens[1]);
        let leftSide = message.slice(0, index);
        let rightSide = message.slice(index);
        message = leftSide + " " + rightSide;
      }
  
      if (command == "Reverse") {
        let substring = tokens[1];
        let index = message.indexOf(substring);
        if (index == -1) {
          console.log("error");
          continue;
        }
        let leftSide = message.slice(0, index);
        message = leftSide + substring.split("").reverse().join("");
      }
  
      if (command == "ChangeAll") {
        let match = tokens[1];
        let replacement = tokens[2];
        message = message.split(match).join(replacement);
      }
      console.log(message);
    }
    console.log(`You have a new text message: ${message}`);
  }
  secretChat([
    "heVVodar!gniV",
  
    "ChangeAll:|:V:|:l",
  
    "Reverse:|:!gnil",
  
    "InsertSpace:|:5",
  
    "Reveal",
  ]);
  
