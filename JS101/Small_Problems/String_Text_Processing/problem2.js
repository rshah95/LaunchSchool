function removeVowels(array) {
  let noVowels = array.map(word => word.match(/[^aeiou]/ig));
  noVowels.forEach((string, idx) => {
    if (string === null) {
      noVowels[idx] = '';
    } else noVowels[idx] = string.join('');
  });

  return noVowels;
}


console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));