function solve(n, k) {
    let result = [1];
    for(let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = 0;
        for(let i = start; i <= end; i++) {
            sum += result[i]
        }
        result[current]=sum;
    }
    console.log(result.join(' '))
}
solve(6, 3)
