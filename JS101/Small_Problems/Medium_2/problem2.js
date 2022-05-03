function triangle(side1, side2, side3) {
  let sortArr= [side1, side2, side3].sort((a, b) => Number(a) - Number(b));
  if (sortArr[0] + sortArr[1] <= sortArr[2]) return 'invalid';

  if (side1 === side2 && side1 === side3) return 'equilateral';
  if (side1 === side2 || side1 === side3 || side2 === side3) return 'isosceles';

  return 'scalene'; 
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"