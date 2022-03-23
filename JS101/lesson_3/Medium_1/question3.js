function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// purpose of number % divisor === 0 asserts that factors are numbers that do not leave any remainders when they are dividing the number 
// factors are whole numbers so answers with no remainder, or no decimal, are factors