function wordLengths(string) {
  if (string) {
    let words = string.split(' ');
    return words.map(word => word + ' ' + word.length);
  } else return [];
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));


console.log(wordLengths(''));
console.log(wordLengths());