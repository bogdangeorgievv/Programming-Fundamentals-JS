function solve(input) {
    
    let words = []      
    let counter = -1;     
  
    for(let x of input) {

        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
            counter++
            words[counter] = x;
        } else if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
            words[counter] += x
        }
    }

    console.log(words.join(", "))
}
solve('SplitMeIfYouCan')
