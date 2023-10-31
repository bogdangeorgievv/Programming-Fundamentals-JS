function solve(first,second) {
    let third = [];
    let sum = 0;
    let concat = '';
    for(let i = 0 ; i< first.length; i++) {
        if(i % 2 == 0) {
            sum = Number(first[i]) + Number(second[i]);
            third.push(sum);
        } else {
            concat = first[i] + second[i];
            third.push(concat)
        }   
    }
    console.log(third.join(' - '))
}
solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
