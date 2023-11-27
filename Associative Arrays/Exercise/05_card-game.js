function cardGame(input) {
    let playersCards = {};
    let powerValues = { 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11, Q:12, K:13, A:14}
    let typesValues = { S:4, H:3, D:2, C:1 }

    for(let item of input) {
        let [name, cardsStr] = item.split(': ');
        let cards = cardsStr.split(', ');

        if(name in playersCards) {
//разбии масива на отделни елементи и пушни всичко в отделни елементи spread operator
            playersCards[name].push(...cards)
        } else {
            playersCards[name] = cards; //добавяме масива с карти
        }
    }
    let entries = Object.entries(playersCards)

    for(let [name, deck] of entries) {
        let uniqueDeck = new Set(deck);
        let deckValues = 0;

        for(let card of uniqueDeck) {
            // защото ако има 10S, и напишем card[0], ще вземе само 1
            //друг вариант е с if(card.length == 3)
            //метод Number.parseInt - взема числото и изрязва буквите
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];
            
            let cardValue = powerValues[power] * typesValues[type];
            deckValues += cardValue
        }
        console.log(`${name}: ${deckValues}`)
    }
}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])
