function solve(arr) {
    let reversed = '';
    for(let i=arr.length - 1; i>=0; i--) {
        reversed+= " " + arr[i];
    }
    console.log(reversed)
}
solve(['a', 'b', 'c', 'd', 'g'])
