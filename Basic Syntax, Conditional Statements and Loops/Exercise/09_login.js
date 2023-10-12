function login(input) {
  let username = input[0];
  let pass = "";
  for (let i = username.length - 1; i >= 0; i--) {
    pass += username[i];
  }

  let index = 1;
  let wrongAttempts = 0;
  while (input[index] != pass) {
    wrongAttempts++;
    if (wrongAttempts == 4) {
      console.log(`User {username} blocked!`);
      return;
    }
    console.log(`Incorrect password. Try again.`);

    index++;
  }
  console.log(`User ${username} logged in.`);
}
login(["Acer", "login", "go", "let me in", "recA"]);
