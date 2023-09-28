function solve(letter) {
    let dec = letter.charCodeAt();
    
    if(dec >= 65 && dec <=90) {
        console.log('upper-case')
    } else {
        console.log('lower-case')
    }
}
solve('H')  
