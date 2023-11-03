function phoneBook(input) {
  let obj = {};

  for(let item of input) {
    let [name, phone] = item.split(' ')

    obj[name] = phone;
  }

  for(let [name, phone] of Object.entries(obj)) {
    console.log(name, '->', phone)
  }  
}
phoneBook(['Tim 0834212554',

         'Peter 0877547887',

         'Bill 0896543112',

         'Tim 0876566344'])
