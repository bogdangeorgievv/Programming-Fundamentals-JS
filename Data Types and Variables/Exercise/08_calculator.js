function calculator(num, operator, secondNum) {
  if (operator == "+") {
    console.log((num + secondNum).toFixed(2));
  } else if (operator == "-") {
    console.log((num - secondNum).toFixed(2));
  } else if (operator == "/") {
    console.log((num / secondNum).toFixed(2));
  } else if (operator == "*") {
    console.log((num * secondNum).toFixed(2));
  }
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
