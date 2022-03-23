let numbers = [1, 2, 3, 4];

// one way to remove all elements of array
const length = numbers.length
for (let x = 0; x < length; x++) {
  numbers.shift();
}

console.log(numbers);

// second way to remove elements
let empty = numbers.slice(numbers.length + 1);
console.log(empty);

//third way to remove elements
let empty2 = numbers.filter(elements => elements === undefined);
console.log(empty2); 