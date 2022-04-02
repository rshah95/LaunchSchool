function logInBox(string) {
  let longEdge = '+' + '-'.repeat(string.length + 2) + '+';
  let emptyRow = '|' + ' '.repeat(string.length + 2) + '|';

  console.log(`${longEdge}`);
  console.log(`${emptyRow}`);
  console.log(`| ${string} |`);
  console.log(`${emptyRow}`);
  console.log(`${longEdge}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');