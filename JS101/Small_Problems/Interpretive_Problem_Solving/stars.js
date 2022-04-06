function star(num) {
  let half = Math.ceil(num / 2);
  // first half
  for (let x = 1; x < half; x++) {
    spacing(x, num);
  }
  
  console.log('*'.repeat(num)); // middle line

  // second half
  for (let y = half - 1; y > 0; y--) {
    spacing(y, num);
  }
}

function spacing(increment, num) {
  let outerSpace = increment - 1;
  let innerSpace = ((num - 3) / 2) - (increment - 1); 
  console.log(' '.repeat(outerSpace) + '*' + ' '.repeat(innerSpace) +
              '*' + ' '.repeat(innerSpace) + '*' + ' '.repeat(outerSpace))
}

star(9);

/*
** Problem:
** input: odd integer >= 7
** output: 8-pointed star logged to console
** number of rows = input, stars per row = 3 except middle row = input stars
** length of rows = input

** Examples/testcases
** straightforwward

** Data Structures 
** no data structures necessary, no info to be saved

**Algorithm 
** middle line is always input stars
** 3 components: outer space, stars, inner space
** for first half: 
      first line outer space = 0, inner space = (input - 3) / 2
      next lines till half:
        outer space = 1 greater than row before, or row number
        inner space = 1 less than row before it
   for middle line:
      print: input number of stars
   for last half: 
      reverse algo from first half

*/