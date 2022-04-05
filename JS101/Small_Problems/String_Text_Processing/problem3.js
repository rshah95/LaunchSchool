function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0};
  string.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      obj['uppercase'] += 1;
    } else if (char >= 'a' && char <= 'z') {
      obj['lowercase'] += 1;
    } else obj['neither'] += 1;
  })

  return obj;
}


console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));