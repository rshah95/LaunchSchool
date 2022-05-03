function fibonacci(num) {
  if (num <= 2) return 1;
  
  let sum = 2;
  let count = 3;
  let prev = 1;

  while (count < num) {
    let hold = sum;
    sum += prev;
    prev = hold;
    count++;
  }

  return sum;
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050