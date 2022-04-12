function neutralize(sentence) {
  let words = sentence.split(" ");

  words = words.filter(word => !isNegative(word))
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.


// forEach itersates by index at its core - when the splice function is used it alters the index of 
// the remaining words in the array resulting in the word boring not passing through the callback function

