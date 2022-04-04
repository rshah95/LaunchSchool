function swapName(string) {
  let arr = string.split(' ')
  if (arr.length < 3) {
    return arr.reverse().join(', ');
  } else {
    let string = arr[arr.length - 1] + ', ';
    for (let x = 0; x <= arr.length - 2; x++) {
      string += arr[x] + ' ';
    }
    return string;
  }
}

console.log(swapName('Joe Roberts')); 
console.log(swapName('Karl Oskar Henriksson Ragvals'));