function wordsTracker(input) {
    let occurencies = {};
    let searchedWords = input.shift().split(' ');

    for(let word of searchedWords) {
        occurencies[word] = 0;
    }
    for(let word of input) {
        if(word in occurencies) {
            occurencies[word] += 1;
        }
    }
    let sortedEntries = Object.entries(occurencies).sort((a,b) => b[1] - a[1])
    for(let [key, value] of sortedEntries) {
        console.log(`${key} - ${value}`)
    }
}
wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])
