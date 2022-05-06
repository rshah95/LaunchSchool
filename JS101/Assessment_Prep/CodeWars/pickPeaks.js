/*
write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array. For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

console.log(pick_peaks([1,2,3,6,4,1,2,3,2,1]) ==  {"pos"=>[3,7], "peaks"=>[6,3]})
console.log(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,3]) == {"pos"=>[3,7], "peaks"=>[6,3]})
console.log(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]) == {"pos"=>[3,7,10], "peaks"=>[6,3,2]})
console.log(pick_peaks([2,1,3,1,2,2,2,2,1]) == {"pos"=>[2,4], "peaks"=>[3,2]})
console.log(pick_peaks([2,1,3,1,2,2,2,2]) == {"pos"=>[2], "peaks"=>[3]})

Problem: Given an array of integers, return an object that contains the peaks in the array and the respective positions of each peak. A local peak may begin when the number of the array is less than the number following it, the peak may transition down when a number si greater than the number following it

input: array
output: is an object

Rules:
peak only valid if descending component post peak
if flat top, return position of first instance of peak


Algorithm:

iterate through the array 
  if idx is 0 or last index, continue
  
  climbing = false

  if current number is greater than prev number
    climbing = true
  
  if curr number is less than the previous number
    if climbing false
      continue
    if climbing true
      peak = number
      peakIdx = currIdx
      push these to object 
  
return object

*/


function pick_peaks(array) {
  let climbing = false;
  let obj = {'pos': [], 'peak': []};

  for (let idx = 0; idx < array.length; idx++) {
    if (idx === 0 || idx === array.length - 1) continue;

    let currNum = array[idx];

    if (currNum > array[idx - 1]) {
      climbing = true;
    }

    if (currNum <= array[idx - 1]) {
      if (climbing === false) {
        continue;
      } else if (climbing === true) {
        obj['peak'].push(array[idx - 1]);
        obj['pos'].push(idx - 1);
        climbing = false;
      }
    }
  }


  if (array[array.length - 1] >= obj['peak'][[obj['peak'].length - 1]]) {
    obj['peak'].pop();
    obj['pos'].pop();
  }

  return obj;
}

console.log(pick_peaks([1,2,3,6,4,1,2,3,2,1]));
console.log(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,3]))
console.log(pick_peaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
console.log(pick_peaks([2,1,3,1,2,2,2,2,1]))
console.log(pick_peaks([2,1,3,1,2,2,2,2]))