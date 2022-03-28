let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let output = [];

Object.values(obj).forEach(array => {
  array.forEach(word => {
    word.split('').forEach(letter => {
      if ('aeiou'.includes(letter)) {
        output.push(letter);
        console.log(letter);
      }
    })
  })
});

console.log(output);