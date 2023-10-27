function personInfo(name, lastName, age) {
    let person = {}
    person.firstName = name;
    person.lastName = lastName;
    person.age = age;
    
    return person;
}
let result = personInfo('Peter', 'Pan', 20)
console.log(result)
