function findFibonacciIndexByLength(number) {
  let fibNum = 1n; 
  let prevFib = 1n;
  let storage = 0n;
  let index = 2n;
  let isCorrectLength = false;
  
  while (!isCorrectLength) {
    storage = fibNum
    fibNum = fibNum + prevFib;
    prevFib = storage;
    index++;

    if (fibNum / 10n ** (BigInt(number) - 1n) >= 1n) isCorrectLength = true;
  }

  return index;
}

console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(10000));