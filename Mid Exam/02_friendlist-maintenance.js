function friendList(commands) {
  let usernames = commands.shift().split(", ");
  let command = commands.shift();
  let blacklistCount = 0;
  let lostNamesCount = 0;

  while (command != "Report") {
    let tokens = command.split(" ");
    let action = tokens.shift();

    if (action == "Blacklist") {
      let name = tokens.shift();
      if (usernames.includes(name)) {
        let idx = usernames.indexOf(name);
        usernames.splice(idx, 1, "Blacklisted");
        console.log(`${name} was blacklisted.`);
        blacklistCount++;
      } else {
        console.log(`${name} was not found.`);
      }
    }
    if (action == "Error") {
      // console.log(action)
      let idx = tokens.shift();
      // console.log(idx)
      if (idx >= 0 && idx <= usernames.length - 1) {
        if (usernames[idx] !== 'Blacklisted' && usernames[idx] !== 'Lost') {
          let name = usernames[idx];
          lostNamesCount++;
          console.log(`${name} was lost due to an error.`);
          usernames.splice(idx, 1, "Lost");
        }
      }
    }
    if (action == "Change") {
      let idx = tokens.shift();

      let newName = tokens.shift();

      if (idx >= 0 && idx <= usernames.length - 1) {
        if((usernames[idx] !== 'Blacklisted' && usernames[idx] !== 'Lost')) {
        let oldName = usernames[idx];
        console.log(`${oldName} changed his username to ${newName}.`);
        usernames.splice(idx, 1, newName);
        }
      } 
    }
    command = commands.shift();
  }
  console.log(`Blacklisted names: ${blacklistCount}`);
  console.log(`Lost names: ${lostNamesCount}`);
  console.log(usernames.join(" "));
}
