function negativePositiveNumbers(arr) {
    let result = [];
    for(let numAsString of arr) {
        let current = Number(numAsString)
        
        if(current < 0) {
            result.unshift(current)
        } else {
            result.push(current)
        }
    }
    console.log(result.join('\n'))
}
negativePositiveNumbers(['7', '-2', '8', '9'])
