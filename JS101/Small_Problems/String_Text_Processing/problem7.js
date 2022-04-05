function staggeredCase(string) {
  let arr = string.split('');
  let count = 0;
  arr = arr.map(char => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      count ++;
      return count % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
    } else return char;
  });

  return arr.join('')
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);