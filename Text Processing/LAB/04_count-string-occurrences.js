function solve(text, word) {
    let strings = text.split(' ')
    let counter = 0;
    for(let wordTwo of strings) {
      if(wordTwo === word) {
        counter++;
      }
    }
    console.log(counter)
  }
  solve('This is a word and it also is a sentence',

  'is')
