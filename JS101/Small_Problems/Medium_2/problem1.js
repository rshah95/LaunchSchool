/*
Problem: given an input string, return an object that details what percentage of the string is lowercase
letters, uppercase letters, or neither 

input: string
output: object

Rules:
can assume string will contain at least one character

*/


function letterPercentages(string) {
  let arr = string.split('');
  let total = 0;
  let lower = 0;
  let upper = 0;
  let neither = 0;

  arr.forEach(char => {
    total += 1;
    if (char >= 'A' && char <= 'Z') {
      upper += 1;
    } else if (char >= 'a' && char <= 'z') {
      lower += 1;
    } else neither += 1;
  });

  let solutionObj = {};
  solutionObj['lowercase'] = String(((lower / total) * 100).toFixed(2));
  solutionObj['uppercase'] = String(((upper / total) * 100).toFixed(2));
  solutionObj['neither'] = String(((neither / total) * 100).toFixed(2));

  return solutionObj;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



// could have uses regular expressions to calculate types
// total is array length
// length of each type is length of array using match method with regex