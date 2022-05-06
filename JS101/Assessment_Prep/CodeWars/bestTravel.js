/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language.
With C++, C, Rust, Swift, Go, Kotlin, Dart return -1.

Examples:
console.log(chooseBestSum([50, 55, 57, 58, 60], 3, 163)); // 163
console.log(chooseBestSum([50], 3, 163)); // null
console.log(chooseBestSum([91, 74, 73, 85, 73, 81, 87], 3, 230)); // 228

Problem: given an array of numbers sum, and stops, find the combination of stops numbers that is closest to and less than the sum

input: array and sum
output: array of stops integers

Rules:
if no valid sum, return null


Algorithm:

generate an array of all combos of possible stops ( array of arrays)

from array of combos
  calculate sum of the stops

return the array that prodcues the sum closest but still less than the stop 


*/

function chooseBestSum(array, stops, totalSum) {
  if (stops > array.length) return null;
  
  let possibleCombos = generateCombos(array, stops);
  let sums = possibleCombos.map(subArr => subArr.reduce((prev, curr) => prev + curr));
  let closestSum = 0;

  sums.forEach(sum => {
    if (totalSum - sum >= 0 && sum > closestSum) closestSum = sum;
  });

  if (closestSum > totalSum) return null;
  return closestSum;
}



function generateCombos(array, stops) {
  let output = [];

  for (let elem1 = 0; elem1 <= array.length - stops; elem1++) {
    let element1 = array[elem1];
    for (let elem2 = elem1 + 1; elem2 <= array.length - stops + 1; elem2++) {
      let element2 = array[elem2];
      for (let elem3 = elem2 + 1; elem3 < array.length; elem3++) {
        let element3 = array[elem3];
        output.push([element1, element2, element3]);
      }
    }
  }

  return output;
}


console.log(chooseBestSum([50, 55, 57, 58, 60], 3, 163));
console.log(chooseBestSum([50], 3, 163));
console.log(chooseBestSum([91, 74, 73, 85, 73, 81, 87], 3, 230));