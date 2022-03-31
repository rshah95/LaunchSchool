const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_MATCH = 3; // 5 seemed to long, doing a best-of-5

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayGreeting() {
  console.log('\n');
  prompt('Welcome to Tic-Tac-Toe!');
  prompt('First to 3 wins will win the match!');
  prompt('You will be "X". The Computer will be "O"\n');
}

// obtains input for yes or no question
function yesOrNo (question) {
  let validAnswers = ['y', 'yes', 'n', 'no'];
  prompt(question);
  let answer = readline.question().toLowerCase();

  while (!validAnswers.includes(answer)) { //ensure user decision is valid
    prompt('Invalid input - Please enter "y/yes" or "n/no".');
    answer = readline.question().toLowerCase();
  }

  // convert user input into consistent output
  if (answer === 'n') answer = 'no';
  if (answer === 'y') answer = 'yes';

  return answer;
}

function joinOr(array, punctuation = ', ', conjunction = 'or') {
  if (array.length === 1) {
    return `"${array[0]}"`;
  } else if (array.length === 0) {
    return [];
  }

  let arrayCopy = array.slice();
  let lastPiece = String(arrayCopy.pop());
  let finalString = '"' + arrayCopy.join(punctuation);

  if (array.length > 2) {
    finalString += punctuation;
  } else finalString += ' ';

  finalString += `${conjunction}`;

  finalString += ` ${lastPiece}"`;

  return finalString;
}

//function to convert abbreviations to a valid input
function convertToValidInput(input, validChoices) {
  // identify if valid choice based on input - allows for any partial of word
  let valid = false;
  do {
    for (let choice of validChoices) {
      if (input === choice.substring(0, input.length)) {
        input = choice;
        valid = true;
        break;
      }
    }
    if (valid === false) {
      prompt("Invalid choice - try again!");
      input = readline.question();
    }
  } while (valid === false);
  
  input = input[0].toUpperCase() + input.substring(1);
  return input;
}

// obtain input from user on who should start the game
function obtainFirstPlayer() {
  prompt("Who should start the game (player or computer)? *abbreviations allowed!*");
  let firstPlayer =  readline.question().toLowerCase();
  firstPlayer = convertToValidInput(firstPlayer, ['player', 'computer']);
  return firstPlayer;
}

function displayBoard(board) {
  console.clear();

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

//display key for selection choice
function displayKey() {
  console.log('\nKey:\n');
  console.log(` 1 | 2 | 3`);
  console.log('   |   |');
  console.log('---+---+---');
  console.log(` 4 | 5 | 6`);
  console.log('   |   |');
  console.log('---+---+---');
  console.log(` 7 | 8 | 9`);
  console.log('   |   |');
  console.log('\n');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    displayKey();
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

// function to execute moe based on current player
function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else computerChoosesSquare(board);
}

// function to alternate current player after move has been made
function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'Player') {
    currentPlayer = 'Computer';
  } else currentPlayer = 'Player';
  return currentPlayer;
}

// identify and block user win if present
function identifyOptimalMove(board, mode = 'offense') { // mode = offense/defense
  // default searches for computer win condition, unless mode is defense
  let playerWinCheck = COMPUTER_MARKER;
  if (mode === 'defense') playerWinCheck = HUMAN_MARKER;

  // iterate through winning lines to see if user has 2/3 of a winning line
  for (let winScenario of WINNING_LINES) {
    let copy = winScenario.slice();
    let winComponents = 0;

    // identify if defensive move needed
    for (let increment = 0; increment < 3; increment++) {
      if (board[String(winScenario[increment])] === playerWinCheck) {
        let index = copy.indexOf(winScenario[increment]);
        copy.splice(index, 1);
        winComponents++;
      }
    }
    if (winComponents === 2 && board[String(copy[0])] === INITIAL_MARKER) {
      return copy[0];
    }
  }
  // if user is not one move from winning
  return false;
}

function computerChoosesSquare(board) {
  // check if offensive move available - if not, check defense
  let optimalMove = identifyOptimalMove(board, 'offense');
  if (!optimalMove) optimalMove = identifyOptimalMove(board, 'defense');

  // execute optimal move if there is one
  if (optimalMove) {
    board[String(optimalMove)] = COMPUTER_MARKER;
    return;
  }

  // pick middle square if available
  if (board['5'] === INITIAL_MARKER) {
    board['5'] = COMPUTER_MARKER;
    return;
  }

  // random move if none of the other type of moves are applicable
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  // loop through win conditions and see if one has been met
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return false;
}

function updateScoreboard (winner, scoreboard) {
  if (winner !== false) scoreboard[winner] += 1;
}

function displayWinnerAndScoreboard(winner, scoreboard) {
  if (winner === false) {
    prompt("It's a tie!\n");
  } else prompt(`${winner} won!\n`);

  // display scoreboard
  prompt(`Scoreboard:\n`);
  console.log(`       Player: ${scoreboard['Player']}\n`);
  console.log(`       Computer: ${scoreboard['Computer']}\n`);
}

function identifyMatchWinner(scoreboard) {
  if (scoreboard['Player'] === WIN_MATCH) {
    return 'Player';
  } else if (scoreboard['Computer'] === WIN_MATCH) {
    return 'Computer';
  } else return false;
}

function displayMatchWinner (matchWinner) {
  if (matchWinner === 'Player') {
    prompt('Congratulations! You have won the best-of-5!');
  } else {
    prompt('You were outmatched. The computer has won the best-of-5.');
  }
}

function resetScoreboard() {
  let scoreboard = {Player: 0, Computer: 0};
  return scoreboard;
}

// main game loop
console.clear();
displayGreeting();
while (true) { // loop for match (best of 5)
  let scoreboard = {Player: 0, Computer: 0};
  let userContinue = 'yes';

  while (true) { // repeat games until user quits
    let currentPlayer = obtainFirstPlayer();
    let board = initializeBoard();

    while (true) { // repeat individual game until there is an outcome
      displayBoard(board);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board) || boardFull(board)) break;

    }

    displayBoard(board);

    // after game is complete, update scoreboard and display results
    let winner = detectWinner(board);
    updateScoreboard(winner, scoreboard);
    displayWinnerAndScoreboard(winner, scoreboard);

    // check if match (best of 5) is complete and display winner
    let matchStatus = 'incomplete';
    let matchWinner = identifyMatchWinner(scoreboard);
    if (matchWinner) {
      displayMatchWinner(matchWinner);
      matchStatus = 'complete';
    }

    // ask user if they would like to continue playing
    if (matchStatus === 'incomplete') {
      userContinue = yesOrNo('Best-of-5 not complete - Continue? (y or n)');
      console.log('\n');
    } else {
      userContinue = yesOrNo('Would you like to play another match? (y or n)');
      if (userContinue === 'yes') scoreboard = resetScoreboard();
      console.log('\n');
    }

    // exit loop if user doesn't want to continue
    if (userContinue === 'no') break;
  }

  if (userContinue === 'no') {
    console.log('\n');
    prompt('Thanks for playing Tic Tac Toe! See you next time!\n');
    break;
  }
}
