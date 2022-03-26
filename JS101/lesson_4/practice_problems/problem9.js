let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrayAges = Object.values(ages);
let sumAges = 0;

arrayAges.forEach(age => sumAges += age);

console.log(sumAges); 

// could have used Array.prototype.reduce() method
// Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174