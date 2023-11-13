function replaceChars(input) {
  let newString = '';
  
  for(let i = 0; i < input.length; i++) {
    if(input[i] != input[i+1]) {
      newString += input[i];
    }
  }
  console.log(newString)
}
replaceChars('aaaaabbbbbcdddeeeedssaa')
