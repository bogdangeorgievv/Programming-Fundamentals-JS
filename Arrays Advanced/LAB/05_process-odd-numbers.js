function solve2(arr) {
    console.log(
        arr
            .filter((x,i) => i % 2 != 0)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );
}
solve2([3, 0, 10, 4, 7, 3])
