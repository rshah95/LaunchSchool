let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minimum = Object.values(ages).reduce((minAge, currAge, idx) => {
  if (minAge > currAge) minAge = currAge;
  return minAge;
});

console.log(minimum);

// easier solution is to use min function in Math

// let agesArr = Object.values(ages);
// Math.min(...agesArr); // => 10