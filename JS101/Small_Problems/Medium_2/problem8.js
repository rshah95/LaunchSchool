function longestSentence(string) {
  let wordArr = string.split(' ');
  let longestSentence = 0;
  let longestIndex = 0;
  let currentSentence = 0;

  for (let idx = 0; idx < wordArr.length; idx++) {
    currentSentence += 1;
    let word = wordArr[idx];
    if (['.', '?', '!'].includes(word[word.length - 1])) {
      if (currentSentence > longestSentence) {
        longestSentence = currentSentence;
        longestIndex = idx;
        currentSentence = 0;
      }
      currentSentence = 0;
    }
  }

  console.log(wordArr.slice(longestIndex - (longestSentence - 1), longestIndex + 1).join(' '));
  console.log(`The longest sentence has ${longestSentence} words.`);
}

//longestSentence("To be or not to be! Is that the question?");
//longestSentence("Where do you think you're going? What's up, Doc?");

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';


longestSentence(longText);