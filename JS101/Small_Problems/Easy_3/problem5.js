function triangle(number) {
  for (let x = 1; x <= number; x++ ) {
    let spaces = ' '.repeat(number - x);
    let stars = '*'.repeat(x);
    console.log(`${spaces}${stars}`)
  }
}

triangle(5);
triangle(7);