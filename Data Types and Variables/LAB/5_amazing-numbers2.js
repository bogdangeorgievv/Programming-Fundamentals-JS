function solve(num) {
    let numAsString = String(num);
    let sum=0;

    for(let i = 0; i<numAsString.length; i++) {
        sum += Number(numAsString[i])

    }
    let result = String(sum).includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)


}
solve(1233)