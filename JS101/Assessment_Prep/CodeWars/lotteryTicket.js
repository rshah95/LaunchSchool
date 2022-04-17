/*
Problem: 
input: array consisting of 2 value sub arrays, integer
output: String: 'Winner!' or 'Loser!'

Rules/Questions:
mini-wins
  max one win per sub-array
  win if character code of string in index 0 of sub array (position assumed to be consistent) matches integer at index 1 of sub array

win: if # mini wins is equal to second argument input to fuunction (integer)

Examples/Test cases:
no surprises

Data Structures:
input array

Algorithm:
Identify mini wins on ticket
  iterate through sub array
    iterate through each string
      if character code is equal to sub array number 
        mark win, stop loop

Compare mini wins to input integer
  if equal, return winner
  if not equal, return loser

*/



function bingo(ticket, win) {
  let miniWins = 0;

  ticket.forEach(subArr => {
    let targetChar = String.fromCharCode(subArr[1]);
    if (subArr[0].includes(targetChar)) miniWins += 1;
  })

  if (miniWins >= win) {
    return 'Winner!';
  } else return 'Loser!';
}

//console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) === 'Loser!');
//console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) === 'Winner!');
//console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3) === 'Loser!');

console.log(bingo([['GUDAGTJW',67],['JJGVBR',80],['EMR',73],['NMKDBVUF',76],['NTUFI',70],['LJMWZ',77]], 1));