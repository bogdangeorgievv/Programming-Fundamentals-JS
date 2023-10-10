function solve(str, symbol, match) {

    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] == '_') {
            result += symbol;
        } else {
            result += str[i]
        }
        
    }
    if(result == match) {
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
}
