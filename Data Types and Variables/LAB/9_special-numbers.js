function solve(number) {   //15
    for (let i = 1; i <= number; i++) {  //i=1
      let currentNum = i;    //currentNum = 1 
      let sumOfDigits= 0;
      while (currentNum > 0) {    //1>0
        sumOfDigits += currentNum % 10;   //sumOfDigits = 1%10 = 1; 
        currentNum = Math.trunc(currentNum / 10);  //currentNum = 1/10 = 0.1;
      }
  
      const isSpecialNumber = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
      console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
    }
  }
  solve(15)