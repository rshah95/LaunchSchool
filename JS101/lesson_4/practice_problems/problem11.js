let statement = "The Flintstones Rock" 
statement = statement.split('').filter(char => char !== ' ');
freqObj = {};

statement.forEach(char => {
  if (freqObj[char] === undefined) {
    freqObj[char] = 1;
  } else freqObj[char] += 1;
});

console.log(freqObj);