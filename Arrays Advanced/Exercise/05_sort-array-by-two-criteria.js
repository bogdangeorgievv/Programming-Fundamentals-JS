function sorting(arrOfStrings) {
    let sorted = arrOfStrings.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(sorted.join('\n'));
    
}
sorting(['alpha', 'beta', 'gamma'])
