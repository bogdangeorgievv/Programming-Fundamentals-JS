function deckOfCards(arr) {
  let deck = arr.shift().split(", ");
  let n = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(", ");
    let command = tokens.shift();

    if (command == "Add") {
      let cardName = tokens.shift();
      if (!deck.includes(cardName)) {
        deck.push(cardName);
        console.log(`Card successfully added`);
      } else {
        console.log(`Card is already in the deck`);
      }
    }
    if (command == "Remove") {
      let cardName = tokens.shift();
      if (deck.includes(cardName)) {
        let idx = deck.indexOf(cardName);
        deck.splice(idx, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Card not found");
      }
    }
    if (command == "Remove At") {
      let idx = tokens.shift();
      if (idx >= 0 && idx <= deck.length - 1) {
        deck.splice(idx, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Index out of range");
      }
    }
    if (command == "Insert") {
      let idx = tokens.shift();
      let cardName = tokens.shift();
      if (idx >= 0 && idx <= deck.length) {
        if (!deck.includes(cardName)) {
          deck.splice(idx, 0, cardName);
          console.log("Card successfully added");
        } else {
          console.log("Card is already added");
        }
      } else {
        console.log("Index out of range");
      }
    }
  }
  console.log(deck.join(", "));
}
