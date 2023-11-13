function modernTimesOfHashtag(str) {
  let hashWords = str.split(' ').filter(word => word.startsWith('#') && word.length > 1).map(word => word.slice(1));

  for(let word of hashWords) {
    let isValid = true;
    for(let char of word) {
      if(!/[A-Za-z]/.test(char)) {
        isValid=false;
        break
      }
    }
    if(isValid) {
      console.log(word)
    }
  }
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
