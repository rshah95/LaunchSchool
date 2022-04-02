function twice(number) {
  isDoubleNumber = false;
  numberString = String(number);
  if (numberString.length % 2 !== 0) return number * 2;
  
  let halfNum = numberString.length / 2
  for (let x = 1; x <= halfNum; x++) {
    if (numberString[x - 1] === numberString[halfNum - 1 + x]) {
      isDoubleNumber = true;
    } else isDoubleNumber = false;
  }
  
  if (isDoubleNumber) return number;

  return number * 2;

}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334334));      // 668866
console.log(twice(444));         // 888