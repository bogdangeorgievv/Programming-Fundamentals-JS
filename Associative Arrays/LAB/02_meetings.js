function meetingManagement(input) {
  let obj = {};

  for (let item of input) {
    let [day, name] = item.split(" ");

    if (obj.hasOwnProperty(day)) {   
      console.log(`Conflict on ${day}!`);
      continue;
    } 
      console.log(`Scheduled for ${day}`);
      obj[day] = name;
    
  }
  let entries = Object.entries(obj);
  for (let [key, value] of entries) {
    console.log(key, "->", value);
  }
}
meetingManagement([
  "Friday Bob",

  "Saturday Ted",

  "Monday Bill",

  "Monday John",

  "Wednesday George",
]);
