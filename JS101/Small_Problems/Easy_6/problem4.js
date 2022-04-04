function centerOf(string) {
  let half = Math.ceil(string.length / 2);

  if (string.length % 2 === 1) {
    return string[half - 1];
  } else {
    return string.slice(half - 1, half + 1);
  }
}


console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('x'));
console.log(centerOf('Launch'));

