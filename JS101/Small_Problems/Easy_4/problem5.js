function isPalindrome(string) {
  let array = string.toLowerCase().split('');
  array = array.filter(char => {
    if (!(char >= 'A' && char <= 'z' || char >= '0' && char <= '9')) {
      return false;
    } else return true; 
  })
  
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
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome('356a653'));