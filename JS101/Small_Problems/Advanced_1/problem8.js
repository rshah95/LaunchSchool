let Fraction = require("fraction.js");

function egyptian(fraction) {
  let denominators = [];
  let currentDenominator = 1;
  let cumulative = 0;

  while (cumulative < fraction) {
    let partialFraction = new Fraction(1, currentDenominator);

    if (fraction - (cumulative + partialFraction) >= 0) {
      denominators.push(currentDenominator);
      cumulative += partialFraction;
    }

    currentDenominator++;
  }

  return denominators;
}

function unegyptian(denominators) {
  return denominators.reduce((prev, curr) => prev + (1/curr), 0);
}



console.log(egyptian(new Fraction(2, 1)));
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]));