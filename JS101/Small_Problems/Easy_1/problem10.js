function multiSum(number) {
  if (number === 1) {
    return 1;
  } else {
    let nextValid;
    for (let x = number - 1; x > 0; x--) {
      if (x % 3 === 0 || x % 5 === 0) {
        nextValid = x;
        break;
      } else if (x === 1) nextValid = 1
    }
    return number + multiSum(nextValid);
  }
}


console.log(multiSum(10));
console.log(multiSum(1000));