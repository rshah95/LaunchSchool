function swap(string) {
  let arr = string.split(' ');
  let swap = arr.map(word => {
    let arrWord = word.split('');
    let holder = arrWord[0];
    arrWord[0] = arrWord[arrWord.length - 1];
    arrWord[arrWord.length - 1] = holder;
    return arrWord.join('');
  })

  return swap.join(' ');
}

console.log(swap('Oh what a wonderful day it is'))
console.log(swap('a')); 