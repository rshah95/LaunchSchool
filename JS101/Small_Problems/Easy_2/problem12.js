function integerToString(number) {
  let string = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numberAsString = [];
  number = Math.abs(number);

  do {
    let digit = number % 10;
    numberAsString.unshift(string[digit]);
    number = Math.floor(number / 10);
  } while (number > 0);

  return numberAsString.join('');
}

function signedIntegerToString(number) {
  let sign = Math.sign(number)

  switch (sign) {
    case 1: 
    console.log(integerToString(number));  
    return '+' + integerToString(number);
    
    case -1: 
      return '-' + integerToString(number);

    case 0:
      return '0';  
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");