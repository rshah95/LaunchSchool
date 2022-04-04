function isBalanced(string) {
  let balanced = true;
  let arr = string.split('');

  arr.forEach((char, idx) => {
    if (char === '(') {
      if (!arr.slice(idx).includes(')')) {
        return false;
      } else {
        let loc = arr.slice(idx).indexOf(')');
        arr.splice(loc, 1);
      }
    } 
  });
  return balanced;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);