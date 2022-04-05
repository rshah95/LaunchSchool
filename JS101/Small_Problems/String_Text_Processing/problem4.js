function wordCap(string) {
  let words = string.split(' ');
  words = words.map(word => word[0].toUpperCase() + word.substring(1));
  return words.join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));