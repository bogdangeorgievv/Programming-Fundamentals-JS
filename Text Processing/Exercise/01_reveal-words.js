function solve(first, second){
  let words = first.split(', ');

  for(let word of words) {
    let wordLength = word.length;
    let searchedTemplate = '*'.repeat(wordLength);
    
      second = second.replace(searchedTemplate, word)
  }
    console.log(second)
}
solve('great, learning', 'softuni is ***** place for ******** new programming languages')
