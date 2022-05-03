function wordToDigit(string) {
  let numObj = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
  }
  
  
  let arr = string.split(' ');
  arr.forEach((word, idx) => {
    let period = false
    if (word.includes('.')) {
      word = word.slice(0, word.length - 1);
      period = true;
    }
    if (numObj[word]) {
      arr[idx] = numObj[word];
      if (period) arr[idx] += '.';
    } 
  });

  return arr.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


// could have used string replace method 