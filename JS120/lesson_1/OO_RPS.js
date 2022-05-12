const readline = require("readline-sync");

// function to check if partial user input is valid and convert it
function convertToValidInput(input) {
  let validChoices = ['rock', 'paper', 'scissors'];
  input = input.toLowerCase();
  // identify if valid choice based on input - allows for any partial of words
  let valid = false;
  do {
    for (let choice of validChoices) {
      if (!(input[0] >= 'a' && input[0] <= 'z')) break;
      if (input === choice.substring(0, input.length)) {
        input = choice;
        valid = true;
        break;
      }
    }
    if (valid === false) {
      console.log("\nInvalid choice - try again! (abbreviations ok!)");
      input = readline.question();
    }
  } while (valid === false);
  return input;
}

// function to obtain yes or no answer from user - pass question as parameter
function yesOrNo(question) {
  let validAnswers = ['y', 'yes', 'n', 'no'];
  console.log(question);
  let answer = readline.question().toLowerCase();

  while (!validAnswers.includes(answer)) { //ensure user decision is valid
    console.log('\nPlease enter "y/yes" or "n/no".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      console.log('\nPlease choose rock, paper, or scissors (abbreviations ok!):');
      choice = readline.question();
      choice = convertToValidInput(choice);

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {

  let playerObject = createPlayer();

  let computerObject = {
    rockWeight: 0.333,
    paperWeight: 0.333,
    scissorWeight: 0.334,

    choose() {
      let paperRange = this.rockWeight + this.paperWeight;
      let randomNum = Number((Math.random() + 0.0005).toFixed(3));

      if (randomNum <= this.rockWeight) {
        this.move = 'paper';
      } else if (randomNum <= paperRange) {
        this.move = 'scissors';
      } else this.move = 'rock';
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createPlayer() {
  return {
    move: null,
  };
}


const RPSGame = {

  human: createHuman(),
  computer: createComputer(),
  scoreboard: {human: 0, computer: 0},
  matchLength: 3,
  matchHistory: [], // sub array for each game, index 0 is player choice, index  1 is computer choice

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors! Get 3 wins to win the best of 5!');
  },

  displayGoodbyeMessage() {
    console.log('\nThanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  identifyGameWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      return 'player';
    } else if (humanMove === computerMove) {
      return 'tie';
    } else {
      return 'computer';
    }
  },

  updateMatchHistory() {
    this.matchHistory.push([this.human.move, this.computer.move]);

    if (this.matchHistory.length > 2) {
      let totalGames = this.matchHistory.length;
      let playerChoices = this.matchHistory.map(matchArr => matchArr[0]);
      let numRockChoices = playerChoices.filter(choice => choice === 'rock').length;
      let numPaperChoices = playerChoices.filter(choice => choice === 'paper').length;

      let pctRock = (numRockChoices / totalGames).toFixed(3);
      let pctPaper = (numPaperChoices / totalGames).toFixed(3);
      let pctScissor = (1 - (pctRock + pctPaper)).toFixed(3);

      this.computer.rockWeight = Number(pctRock);
      this.computer.paperWeight = Number(pctPaper);
      this.computer.scissorWeight = Number(pctScissor);
    }
  },

  displayRoundWinner() {
    if (this.scoreboard.human === this.matchLength) {
      console.log('\nCongratulations! You have won the best of 5! :)');
    } else if (this.scoreboard.computer === this.matchLength) {
      console.log('\nOh no! The Computer has won the best of 5! :(');
    }
  },

  playAgain() {
    if (Math.max(...Object.values(this.scoreboard)) < this.matchLength) {
      let answer = yesOrNo('Would you like to continue the best of 5? (y/n)');
      return answer.toLowerCase()[0] === 'y';
    } else {
      let answer = yesOrNo('Would you like to play another best of 5? (y/n)');
      if (answer[0] === 'y') this.resetScoreboard();
      return answer[0] === 'y';
    }

  },

  updateScoreboard(winner) {
    if (winner === 'player') this.scoreboard.human += 1;
    if (winner === 'computer') this.scoreboard.computer += 1;
  },

  resetScoreboard() {
    this.scoreboard.human = 0;
    this.scoreboard.computer = 0;
  },

  displayWinner(winner) {
    console.log(`\nYou chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}\n`);

    if (winner === 'player') {
      console.log('You won!');
    } else if (winner === 'computer') {
      console.log('The computer won!');
    } else console.log("It's a tie!");

    readline.question('Press the enter key to continue:\n');

  },

  displayScoreboard() {
    console.log(`\nThe score is:\n    Human: ${this.scoreboard.human}`);
    console.log(`    Computer: ${this.scoreboard.computer}\n`);
  },

  play() {
    console.clear();
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      let winner = this.identifyGameWinner();
      this.updateScoreboard(winner);
      this.updateMatchHistory();
      this.displayWinner(winner);
      this.displayScoreboard();
      this.displayRoundWinner();
      if (!this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  }
};


// run RPS game

RPSGame.play();