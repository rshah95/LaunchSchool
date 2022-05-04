let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry']
let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat']
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats']
let adverbs = ['easily', 'lazily', 'noisily', 'excitedly']

let template = 'The ADJECTIVE brown NOUN ADVERB' + ' ' +
           'VERB the ADJECTIVE yellow'  + ' ' +
           'NOUN, who ADVERB VERB his' + ' ' +
           'NOUN and looks around.'

let punctuation = '?!.,';


function madlibs(template) {
  let sentenceArr = template.split(' ');

  sentenceArr.forEach((word, idx) => {
    if (punctuation.includes(word[word.length - 1])) {
      word = word.slice(0, word.length - 1);
    }

    switch (word) {
      case 'ADJECTIVE':
        sentenceArr[idx] = '"' + adjectives[(Math.floor(Math.random() * adjectives.length))] + '"';
        break;
      case 'NOUN':
        sentenceArr[idx] = '"' + nouns[(Math.floor(Math.random() * nouns.length))] + '"';
        break;
      case 'VERB':
        sentenceArr[idx] = '"' + verbs[(Math.floor(Math.random() * verbs.length))] + '"';
        break;
      case 'ADVERB':
        sentenceArr[idx] = '"' + adverbs[(Math.floor(Math.random() * adverbs.length))] + '"';
        break;
    }
  });

  return sentenceArr.join(' ');
}


console.log(madlibs(template));