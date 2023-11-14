function passwordGenerator(arr) {
    let [str1, str2, replacementStr] = arr;
    let concatenatedStrings = str1 + str2;
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let idx = 0;

    for(let char of concatenatedStrings) {
        if(vowels.includes(char)){
            concatenatedStrings = concatenatedStrings.replace(char, replacementStr[idx].toUpperCase());
            idx++;
            if(idx == replacementStr.length) {
                idx = 0;
            }
        }
    }
    let password = concatenatedStrings.split('').reverse().join('');
    console.log(`Your generated password is: ${password}}`)
}
passwordGenerator([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])
