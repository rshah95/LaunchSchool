function wordSizes(sentence) {
  let wordArr = sentence.split(' ');
  wordArr = wordArr.map(word => {
    return word.match(/[a-z]/gi).join('')
  })

  let sizeObj = {};

  wordArr.forEach(word => {
    if (sizeObj[word.length] > 0) {
      sizeObj[word.length] += 1;
    } else if (word.length > 0){
      sizeObj[word.length] = 1;
    }
  })

  return sizeObj;
}

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));