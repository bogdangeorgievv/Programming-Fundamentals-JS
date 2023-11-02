function solve(arr, num) {
    let sumPair = 0;
    let pairArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            sumPair = Number(arr[i]) + Number(arr[j]);
        if(sumPair == num) {
            pairArr.push(arr[i])
            pairArr.push(arr[j])
            console.log(pairArr.join(' '))
            pairArr = [];
            sumPair = 0;
        }
        }
    }
}
