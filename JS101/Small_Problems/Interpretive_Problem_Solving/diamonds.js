function diamond(num) {
  let half = Math.ceil(num / 2);
  for (let x = 1; x <= num; x++) {
    if (x <= half) {
      let stars = '*'.repeat(2 * x - 1);
      let spaces = ' '.repeat(Math.floor(half - x))
      console.log(spaces + stars);
    } else {
      let stars = '*'.repeat(num - (2 * (x - half) - 1) - 1);
      let spaces = ' '.repeat(Math.floor(x - half));
      console.log(spaces + stars);
    }
  }
}

diamond(19);





/*
** Problem
** input: integer, output is console log of diamonds
** number of rows = input, diamonds in longest row = input
** first row starts with one diamond, centered w spaces
** last row is the same as first row 
** middle row is row # input / 2 rounded up, = input # diamonds

** Example/test cases
** standard, no surprises, addtl info to account for

** Data Structures
** none, no data stoed

** Algorithm
** increment through each row, printing stars as needed
** reverse at halfway point

*/
