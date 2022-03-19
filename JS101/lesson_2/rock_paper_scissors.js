const readline = require('readline-sync'); // library to obtain input from terminal
const GAME_TREE = { // keys are choices and pairs represent win conditions
  rock : ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors : ['paper', 'lizard'],
  spock : ['scissors', 'rock'],
  lizard : ['paper', 'spock']
};
const VALID_CHOICES = Object.keys(GAME_TREE);
let [userScore, cpuScore] = [0, 0];
const WIN_CONDITION = 3;

// function to enhance program prompts visually
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to display greeting and rules if desired
function displayGreeting() {
  prompt('Welcome to Rock-Paper-Scissors-Lizard-Spock!');
  prompt("Enter 1 to display rules. Enter 2 to proceed to game.");
  let displayRules = readline.question();

  while (displayRules !== '1' && displayRules !== '2') { // ensure valid input
    prompt("Invalid input - try again!");
    displayRules = readline.question();
  }

  // display rules if user desires
  if (displayRules === '1') {
    console.log("\nRock beats Scissors and Lizard");
    console.log("Paper beats Rock and Spock");
    console.log("Scissors beats Paper and Lizard");
    console.log("Spock beats Rock and Scissors");
    console.log("Lizard beats Paper and Spock\n");
  }
}

//function to identify game length of player
function getGameLength() {
  console.log('\n');
  prompt("Enter 1 to play one round at a time. Enter 2 to play a best-of-5 series");
  let gameLength = readline.question();
  return gameLength;
}

// function to obtain user RPS-LS choice and generate computer choice
function getChoices() {
  //get User choice
  let choices = []; // array that holds user choice at 0 index and CPU choice at 1 index
  console.log('\n');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}. Any abbreviations are ok!`);
  choices[0] = readline.question().toLowerCase();

  if (!VALID_CHOICES.includes(choices[0])) { // ensure choice is valid
    choices[0] = convertToValidInput(choices[0]);
  }

  //generate computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length); //generate random number representing choice
  choices[1] = VALID_CHOICES[randomIndex];

  return choices;
}

// function to check if partial user input is valid and convert it
function convertToValidInput(input) {
  // if input is just 's', get clarification
  while (input === 's') {
    prompt("'s' could be spock or scissors - type the first two letters or the whole word");
    input = readline.question();
  }

  // identify if valid choice based on input - allows for any partial of words
  let valid = false;
  do {
    for (let choice of VALID_CHOICES) {
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
  return input;
}

// function to identify and display winner of RPS round
function identifyWinner(choices) {
  //identify and display winner
  let winner;
  let userChoice = choices[0];
  let computerChoice = choices[1];
  if (userChoice === computerChoice) {
    winner = 'tie';
  } else if (GAME_TREE[userChoice].includes(computerChoice)) {
    winner = 'user';
  } else {
    winner = 'cpu';
  }
  return winner;
}

// function to maintain and update scoreboard
function updateScoreboard(winner) {
  switch (winner) {
    case 'user' :
      userScore += 1;
      break;
    case 'cpu' :
      cpuScore += 1;
      break;
  }
}

//function to display winner and scoreboard
function displayWinnerAndScoreboard(winner, choices) {
  console.log('\n');
  prompt(`You chose ${choices[0]}, computer chose ${choices[1]}`);
  switch (winner) {
    case 'user' :
      prompt('You win!\n');
      break;
    case 'cpu' :
      prompt('CPU wins!\n');
      break;
    case 'tie' :
      prompt("It's a tie!\n");
      break;
  }
  prompt(`Scoreboard:\n       user score: ${userScore}\n        cpu score: ${cpuScore}\n`); // display scoreboard
}

// function to obtain yes or no answer from user - pass question as parameter
function yesOrNo(question) {
  let validAnswers = ['y', 'yes', 'n', 'no'];
  prompt(question);
  let answer = readline.question().toLowerCase();

  while (!validAnswers.includes(answer)) { //ensure user decision is valid
    prompt('Please enter "y/yes" or "n/no".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

// function to display closing message
function displayClosingMessage() {
  console.log('\n');
  prompt('Thanks for playing Rock-Paper-Scissors-Lizard-Spock!');
  prompt('Hope to see you again!\n');
}

// conduct game
displayGreeting();
let gameLength = getGameLength();

while (true) {
  // execute one round of game
  let choices = getChoices();
  let winner = identifyWinner(choices);
  updateScoreboard(winner);
  displayWinnerAndScoreboard(winner, choices);

  // if user chose best of 5, check and see if game is over
  if (gameLength === '2') {
    if (userScore === WIN_CONDITION) {
      prompt('Congratulations - You have won the best of 5 series!');
      prompt('Restart program if you would like to play another best of 5\n');
    } else if (cpuScore === WIN_CONDITION) {
      prompt('Sorry - You have lost the best of 5 to the cpu :(');
      prompt('Restart program if you would like to play another best of 5\n');
    }
  }

  let playAgain = yesOrNo('Would you like to continue playing? (y/n)');
  if (playAgain === 'n' || playAgain === 'no') {
    displayClosingMessage();
    break;
  }

  let resetScoreboard = yesOrNo('Would you like to reset the scoreboard? (y/n)');
  if (resetScoreboard === 'y' || resetScoreboard === 'yes') [userScore, cpuScore] = [0, 0];

  console.clear();
}