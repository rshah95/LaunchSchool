function isPalindrome(string) {
  let array = string.split('');
  let halfString = Math.floor(array.length / 2)
  let isPalindrome = false;
  
  for (let x = 0; x < halfString; x++) {
    if (array[x] === array[array.length - 1 + x]) {
      isPalindrome = true;
    } else return isPalindrome
  }

  return isPalindrome;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('356653'));


// far easier method using reverse - check if reverse string = regular string oops