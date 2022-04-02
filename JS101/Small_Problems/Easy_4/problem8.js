function wordSizes(sentence) {
  let wordArr = sentence.split(' ');
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
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}