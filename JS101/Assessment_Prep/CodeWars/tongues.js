/*

Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.
This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).
Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.
So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'
The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.
Your job is to write a function that decodes Gandalf's writings.

# Examples:
'Ita dotf ni dyca nsaw ecc.'
  => Vowel: move it three backwards in the given sequence ['a' 'i' 'y' 'e' 'o' 'u']
  => Consonents: move it backwards ten in the given sequence ['b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f']

console.log(tongues('Ita dotf ni dyca nsaw ecc.') == 'One ring to rule them all.')
console.log(tongues('Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.') == 'Now is the time for all good men to come to the aid of their country.')
console.log(tongues('Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh') == 'Fourscore and seven years ago our forefathers brought unto this')
console.log(tongues('litnotatn e tam tenoit.') == 'continent a new nation.')
console.log(tongues('Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.') == 'The quick brown fox jumped over the lazy dogs.')

*/


function tongues(str) {
  let vowels = ['a', 'i', 'y', 'e', 'o', 'u'];
  let consonants = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f'];

  let solutionArr = str.split('').map(char => {
    let upperCase = char > 'A' && char < 'Z';
    char = char.toLowerCase();

    if (vowels.includes(char)) {
      let currIdx = vowels.indexOf(char);
      let newIdx;
      currIdx - 3 < 0 ? newIdx = vowels.length - Math.abs(currIdx - 3) : newIdx = currIdx - 3;
      char = vowels[newIdx];
    }

    if (consonants.includes(char)) {
      let currIdx = consonants.indexOf(char);
      let newIdx;
      currIdx - 10 < 0 ? newIdx = consonants.length - Math.abs(currIdx - 10) : newIdx = currIdx - 10;
      char = consonants[newIdx];
    }

    if (upperCase) return char.toUpperCase();

    return char;
  });

  return solutionArr.join('');

}

console.log(tongues('Ita dotf ni dyca nsaw ecc.') == 'One ring to rule them all.')
console.log(tongues('Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu.') == 'Now is the time for all good men to come to the aid of their country.')
console.log(tongues('Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh') == 'Fourscore and seven years ago our forefathers brought unto this')
console.log(tongues('litnotatn e tam tenoit.') == 'continent a new nation.')
console.log(tongues('Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.') == 'The quick brown fox jumped over the lazy dogs.')
