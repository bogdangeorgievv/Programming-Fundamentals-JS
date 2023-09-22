function solve(a, b, c) {
    let sum = a+b+c;
    let sumAsString = String(sum);
    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i ++) {
        if (sumAsString == ".") {
            isFloat == true;
        }
    }
    console.log(`${sum} - ${isFloat ? 'Integer' : 'Float'}`)
}
solve(9, 100, 1)
