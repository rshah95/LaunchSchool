/*
Problem:L given an input array, return an array with the first element moved to the end of the array
without modifying the original array 

input: array
output: modified array

Rules:

if single element, no change
if empty array, return empty array 
if argument not array, return undefiend



*/



function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length < 2) return array.slice();
  
  let copy = array.slice();
  copy.push(copy.shift());
  
  return copy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined