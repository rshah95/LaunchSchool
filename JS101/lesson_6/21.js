const readline = require("readline-sync");

// constants
const DECK_OF_CARDS = {
  spades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  clubs : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  hearts : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  diamonds : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
};

const SUIT_KEY = { 1 : 'spades', 2 : 'clubs', 3 : 'hearts', 4 : 'diamonds'};
const DEALER_HIT_THRESHOLD = 17;
const BUST_THRESHOLD = 21;
const WIN_MATCH = 3;

// functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

//obtain yes or no answer to any question
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

  return input;
}

function displayGreeting() {
  console.log('\n');
  prompt('Welcome to 21!');
  prompt('First to 3 wins will win the match!');
  prompt('Press any key to continue:');
  readline.question();
}

// deal initial hand to both player and dealer
function dealCards(deckForRound) {
  //initialize object to represent user and dealer hands
  let roundHands = {Player : [], Dealer: []};

  // give to player and then dealer
  for (let inc = 0; inc < 2; inc++) {
    roundHands['Player'][inc] = generateRandomCard(deckForRound);
    roundHands['Dealer'][inc] = generateRandomCard(deckForRound);
  }

  return roundHands;
}

// function to generate random card and its associated value
// and then remove it from the deck
function generateRandomCard(deckForRound) {
  // generate card
  let suitNumber = Math.ceil(Math.random() * 4); // generate 1-4 for suit choice
  let suit = SUIT_KEY[String(suitNumber)];
  let availableCards = (deckForRound[suitNumber - 1][1].length - 1);
  let cardNumber = Math.ceil(Math.random() * availableCards);
  let cardValue = deckForRound[suitNumber - 1][1][cardNumber];
  let cardName = `${cardValue} of ${suit}`;

  //remove card from deck for the round
  deckForRound[suitNumber - 1][1].splice(cardNumber, 1);

  // identify card value
  if (typeof cardValue === 'string') {
    if (cardValue === 'Ace') {
      cardValue = 11;
    } else cardValue = 10;
  }

  // a card is an array with [cardName, cardValue]
  let card = [cardName, cardValue];
  return card;
}

function displayHands(roundHands, scores, userTurnDisplay = true) { //userTurnDisplay hides dealer second card
  // display dealer hand
  console.clear();
  console.log('Dealer has:');
  if (userTurnDisplay) {
    console.log(`   ${roundHands['Dealer'][0][0]}`);
    console.log('   Unknown Card');
  } else {
    for (let inc = 0; inc < roundHands['Dealer'].length; inc++) {
      console.log(`   ${roundHands['Dealer'][inc][0]}`);
    }
    console.log(`   Total: ${scores[1]}`);
  }

  //display user hand
  console.log('\nYou have: ');
  for (let inc = 0; inc < roundHands['Player'].length; inc++) {
    console.log(`   ${roundHands['Player'][inc][0]}`);
  }
  console.log(`   Total: ${scores[0]}`);
}

function calculateHandTotal(roundHands, user = 'Player') {
  if (user === "'Dealer'") user = 'Dealer';

  // sum user hand total from cards in hand
  let handTotal = 0;
  let acePresent = false;
  for (let inc = 0; inc < roundHands[user].length; inc++) {
    handTotal += Number(roundHands[user][inc][1]);
    if (Number(roundHands[user][inc][1]) === 11) acePresent = true;
  }

  //adjust if ace puts hand total over 21
  if (handTotal > 21 && acePresent === true) {
    handTotal -= 10; // convert 11 to a 1
  }

  return handTotal;
}

function obtainHitDecision() {
  console.log('\n');
  prompt('Would you like to hit or stay? *Abbreviations ok!');
  let hitStatus = readline.question().toLowerCase();
  hitStatus = convertToValidInput(hitStatus, ['hit', 'stay']);
  return hitStatus;
}

function performHit(roundHands, deckForRound, user = 'Player') {
  if (user === "'Dealer'") user = 'Dealer';

  // generate new card and add it to hand
  let newCard = generateRandomCard(deckForRound);
  roundHands[user].push(newCard);
}

// complete user portion of single round
function completePlayerTurn(roundHands, deckForRound, scores) {
  let hitStatus = obtainHitDecision();
  while (hitStatus === 'hit') {
    performHit(roundHands, deckForRound);
    scores[0] = calculateHandTotal(roundHands);
    displayHands(roundHands, scores);
    if (scores[0] > BUST_THRESHOLD) break; // end turn if bust
    hitStatus = obtainHitDecision();
  }
}

// complete dealer portion of single round based on game logic
function completeDealerTurn(roundHands, deckForRound, scores) {
  scores[1] = calculateHandTotal(roundHands, "'Dealer'");
  displayHands(roundHands, scores, false);
  console.log('\n');
  prompt("You can now see the dealer's hand - press any key to continue");
  readline.question();

  while (scores[1] < DEALER_HIT_THRESHOLD) {
    console.log('\n');
    prompt("Dealer is under 17 - they must hit. Press any key to continue");
    readline.question();
    performHit(roundHands, deckForRound, "'Dealer'");
    scores[1] = calculateHandTotal(roundHands, "'Dealer'");
    displayHands(roundHands, scores,  false);
  }
}

function identifyWinner(scores) {
  let userTotal = scores[0];
  let dealerTotal = scores[1];
  let winner = '';

  if (userTotal > dealerTotal || dealerTotal > BUST_THRESHOLD) {
    winner = 'Player';
  } else if (userTotal < dealerTotal || userTotal > BUST_THRESHOLD) {
    winner = 'Dealer';
  } else winner = 'tie';

  return winner;
}

function updateScoreboard(winner, scoreboard) {
  if (winner !== 'tie') {
    scoreboard[winner] += 1;
  }
}

function displayWinnerAndScoreboard(winner, scoreboard, scores) {
  console.log('\n');
  if (winner === 'tie') {
    prompt("It's a tie!\n");
  } else if (scores[0] > BUST_THRESHOLD) {
    prompt(`Sorry, looks like you busted! ${winner} won!\n`);
  } else prompt(`${winner} won!\n`);

  // display scoreboard
  prompt(`Scoreboard:\n`);
  console.log(`       Player: ${scoreboard['Player']}\n`);
  console.log(`       Dealer: ${scoreboard['Dealer']}\n`);
}

function identifyMatchWinner(scoreboard) {
  if (scoreboard['Player'] === WIN_MATCH) {
    return 'Player';
  } else if (scoreboard['Dealer'] === WIN_MATCH) {
    return 'Dealer';
  } else return false;
}

function displayMatchWinner (matchWinner) {
  if (matchWinner === 'Player') {
    prompt('Congratulations! You have won the best-of-5!');
  } else {
    prompt('You were outmatched. The Dealer has won the best-of-5.');
  }
}

function resetScoreboard() {
  let scoreboard = {Player: 0, Dealer: 0};
  return scoreboard;
}

function displayFarewell() {
  console.log('\n');
  prompt("Thanks for playing 21 - see you next time!");
}

// main game loop
console.clear();
displayGreeting();
let scoreboard = {Player: 0, Dealer: 0};
let userContinue;
let matchStatus = 'incomplete';

// round loop - best-of-5 games, with scoreboard
while (true) {
  // single round loop
  while (true) {
    // deckForRound is a modifiable deck of cards specficially for one round
    let deckForRound = Object.entries(DECK_OF_CARDS);
    let scores = []; // index 0 is user score, index 1 is dealer

    // deal cards and display initial hand
    let roundHands = dealCards(deckForRound);
    scores[0] = calculateHandTotal(roundHands);
    displayHands(roundHands, scores);

    completePlayerTurn(roundHands, deckForRound, scores);

    // finish round with dealer turn if user didn't bust
    if (scores[0] <= BUST_THRESHOLD) {
      completeDealerTurn(roundHands, deckForRound, scores);
    }

    // identify and display winner Winner
    let winner = identifyWinner(scores);
    updateScoreboard(winner, scoreboard);
    displayWinnerAndScoreboard(winner, scoreboard, scores);

    // check if match (best of 5) is complete and display winner
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
    displayFarewell();
    break;
  }
}

