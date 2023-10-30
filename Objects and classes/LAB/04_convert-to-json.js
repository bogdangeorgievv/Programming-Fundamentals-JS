function convert(firstName, lastName, hairColor) {
    let obj = {}
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;
    
    let jsonStr = JSON.stringify(obj)
    console.log(jsonStr)
}
convert('George', 'Jones', 'Brown')
