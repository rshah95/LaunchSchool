function integerToString(number) {
  let string = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numberAsString = [];

  do {
    let digit = number % 10;
    numberAsString.unshift(string[digit]);
    number = Math.floor(number / 10);
  } while (number > 0);

  return numberAsString.join('');
}

console.log(integerToString(4320));        // "4321"

console.log(integerToString(0));           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"