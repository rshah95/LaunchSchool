/*
Textual description:
A game played between two people: a player and a dealer with the objective
being achieving the closest score to 21 as possible without exceeding 21.

Prior to the game start, the player can determine an amount to wager on
the outcome of the game.

Each participant is dealt two cards (a hand) from a standard 52 card deck.
The player has two choices: hit (receive another card) or stay (keep cards).
If the player's score is above 21, the dealer automatically wins.

Once the player turn is complete, the dealer executes their turn. If the
dealer score is under 16, the dealer must hit. If  above, the dealer must
stay. If the dealer's score is above 21, the player automatically wins.

Next, the scores are compared to determine the winner - highest score wins.
If the player loses, their wager is substracted from their capital - if the
player wins, their wager amount is added to their capital

Extract the nouns and verbs from the description:
Nouns:
Participants -> player and dealer
Capital (starting capital to wager with)
Deck
Hand
Score

Verbs:
Wager
Deal
Hit
Stay


Organize and associate verbs with nouns:
Participants -> Hit and Stay
PLayer/Capital -> Wager
Dealer -> deal (?)

*/

const readline = require('readline-sync');

class Participant {
  constructor() {
    this.hand = {cards: [], total: 0};
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.capital = 100; // capital = amount of money player has to play with
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }
}

class CardDeck {
  constructor() {
    this.deck = [
      ['Spades', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']],
      ['Hearts', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']],
      ['Clubs', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']],
      ['Diamonds', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']]
    ];
  }

  shuffle() {
    let deckCopy = JSON.parse(JSON.stringify(this.deck));
    let shuffledCards = [];

    while (deckCopy.length > 0) {
      let suitNum = Math.floor(Math.random() * deckCopy.length);
      let cardNum = Math.floor(Math.random() * deckCopy[suitNum][1].length);
      let suit = deckCopy[suitNum][0];
      let cardValue = deckCopy[suitNum][1].splice(cardNum, 1)[0];

      if (deckCopy[suitNum][1].length === 0) deckCopy.splice(suitNum, 1);

      let card = [cardValue, suit];
      shuffledCards.push(card);
    }

    return shuffledCards;
  }
}

class TwentyOneGame {
  static MAX_SCORE = 21;
  static DEALER_HIT_THRESHOLD = 16;

  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.cardDeck = new CardDeck();
    this.scoreboard = {player: 0, dealer: 0};
  }

  play() {
    console.clear();
    this.displayGreeting();
    let gambleModeOn = this.gambleMode();

    do { // execute single round of gameplay
      console.clear();
      let currentWager;

      if (gambleModeOn) currentWager = this.obtainWager();

      let shuffledCards = this.cardDeck.shuffle();
      this.dealInitialHands(shuffledCards);
      this.displayHands(true); //boolean represents first time hands displayed

      this.playerTurn(shuffledCards);
      if (this.player.hand.total <= TwentyOneGame.MAX_SCORE) { //execute dealer turn if player does not bust
        readline.question("\nPress Enter to continue to the dealer's turn:");
        this.dealerTurn(shuffledCards);
      }

      let winner = this.identifyWinner();
      this.updateResults(winner, gambleModeOn, currentWager);
      this.printWinner(winner);
      if (gambleModeOn) this.displayWagerResults(winner, currentWager);
      this.displayScoreboard();

      if (this.player.capital === 0) break;
    } while (this.playAgain());

    this.displayFarewell(gambleModeOn);
  }

  displayGreeting() {
    console.log('Welcome to 21! Are you feeling lucky???');
  }

  displayFarewell(gambleModeOn) {
    console.clear();
    if (gambleModeOn) {
      if (this.player.capital === 0) {
        console.log('You lost all your money :( - Unfortunately you will have to leave!');
      } else if (this.player.capital < 100) {
        console.log('Oh no, you lost money! Gambling is dangerous!');
      } else if (this.player.capital > 100) {
        console.log("Nice, you won some cash! I guess the house doesn't always win...");
      } else if (this.player.capital === 100) {
        console.log('Exiting break-even is never a bad decision.');
      }

      console.log(`Your final balance is: $${this.player.capital}`);
    }

    console.log('\nThanks for playing 21!');
  }

  gambleMode() { //identify whether the player would like to gamble
    console.log('\n');
    let answer = this.yesOrNo('Would you like to gamble? (yes/no, abbreviations ok)');

    if (answer) {
      readline.question('\nGood choice - fortune favors the bold! Press Enter to continue:');
    } else readline.question('\nNot as fun, but probably a wise choice. Press Enter to continue:');

    return answer;
  }

  yesOrNo (question) { //obtian yes or no response to an input question
    let validAnswers = ['y', 'yes', 'n', 'no'];
    console.log((question));
    let answer = readline.question().toLowerCase();

    while (!validAnswers.includes(answer)) { //ensure user decision is valid
      console.log('Invalid input - Please enter "y/yes" or "n/no".');
      answer = readline.question().toLowerCase();
    }

    return answer[0] === 'y';
  }

  obtainWager() { //identify how much player wants to wager for the round
    let capital = this.player.capital;
    console.log(`You have $${capital}. How much would you like to wager this round?`);
    let wagerAmt = parseFloat(readline.question('$'), 10);

    while (wagerAmt < 0 || wagerAmt > capital || !Number(wagerAmt)) {
      console.log(`That is an invalid wager. Please enter a number between 0 and ${this.player.capital}.`);
      wagerAmt = readline.question();
    }

    readline.question(`\nAlright, you are wagering $${wagerAmt}! Press Enter to continue:`);
    return wagerAmt;
  }

  dealInitialHands(cards) {
    //clear participanta hands
    this.player.hand.cards = [];
    this.dealer.hand.cards = [];

    //deal 2 cards in alternating fashion to participants
    for (let repeat = 1; repeat <= 2; repeat++) {
      this.player.hand.cards.push(cards.shift());
      this.dealer.hand.cards.push(cards.shift());
    }

    this.updateHandTotals();
  }

  displayHands(firstTime) { //if first time cards are displayed, one dealer card is hidden
    let [dealerImages, playerImages] = this.convertHandsToImages(firstTime);

    console.clear();
    console.log('Dealer:\n');
    dealerImages[0].forEach((line, idx) => {
      for (let num = 1; num < dealerImages.length; num++) {
        line += '   ' + dealerImages[num][idx];
      }

      console.log(line);
    });
    if (!firstTime) console.log(`Total: ${this.dealer.hand.total}`);

    console.log('\n\n\nPlayer:');
    playerImages[0].forEach((line, idx) => {
      for (let num = 1; num < playerImages.length; num++) {
        line += '   ' + playerImages[num][idx];
      }

      console.log(line);
    });
    console.log(`Total: ${this.player.hand.total}`);
  }

  convertCardtoImage(card) {
    let symbol = '?';
    if (card[1] === 'Spades') symbol = '♠';
    if (card[1] === 'Clubs') symbol = '♣';
    if (card[1] === 'Diamonds') symbol = '♦';
    if (card[1] === 'Hearts') symbol = '♥';


    let cardImage = ['------------'];
    cardImage.push(`|${card[0]}${' '.repeat(10 - card[0].length)}|`);
    cardImage.push('|          |');
    cardImage.push('|          |');
    cardImage.push(`|    ${symbol}     |`);
    cardImage.push('|          |');
    cardImage.push('|          |');
    cardImage.push(`|${' '.repeat(10 - card[0].length)}${card[0]}|`);
    cardImage.push('------------');

    return cardImage;
  }

  convertHandsToImages(firstTime) {
    let dealerImages = [];
    if (firstTime) {
      dealerImages.push(this.convertCardtoImage(['?', '?']));
      dealerImages.push(this.convertCardtoImage(this.dealer.hand.cards[0]));
    } else {
      this.dealer.hand.cards.forEach(card => {
        dealerImages.push(this.convertCardtoImage(card));
      });
    }

    let playerImages = [];
    this.player.hand.cards.forEach(card => {
      playerImages.push(this.convertCardtoImage(card));
    });

    return [dealerImages, playerImages];
  }

  hit(participant, shuffledCards) {
    if (participant === 'player') {
      this.player.hand.cards.push(shuffledCards.shift());

    } else if (participant === 'dealer') {
      this.dealer.hand.cards.push(shuffledCards.shift());
    }

    this.updateHandTotals();
  }

  playerTurn(shuffledCards) {
    console.log('\n');
    let hitDecision = this.yesOrNo(`You have ${this.player.hand.total}. Would you like to hit? (yes/no, abbreviations ok)`);

    while (hitDecision) {
      this.hit('player', shuffledCards);
      console.clear();
      this.displayHands(true);

      if (this.player.hand.total > TwentyOneGame.MAX_SCORE) break;

      hitDecision = this.yesOrNo(`\nYou have ${this.player.hand.total}. Would you like to hit again? (yes/no, abbreviations ok)`);
    }
  }

  dealerTurn(shuffledCards) {
    console.clear();
    this.displayHands(false);
    console.log(`\nYour total is ${this.player.hand.total} and the dealer's total is ${this.dealer.hand.total}.`);

    while (this.dealer.hand.total <= TwentyOneGame.DEALER_HIT_THRESHOLD) {
      console.log("Since the dealer's total is 16 or less, they will now hit.");
      readline.question('\nPress Enter to Continue:');
      this.hit('dealer', shuffledCards);
      this.displayHands();
      console.log(`\nYour total is ${this.player.hand.total} and the dealer's total is now ${this.dealer.hand.total}.`);
    }
  }

  calculateHandTotal(participant) {
    let total = 0;
    let acePresent = false;
    if (participant === 'player') {
      participant = this.player.hand;
    } else participant = this.dealer.hand;

    participant.cards.forEach(card => {
      if (!Number(card[0])) {
        if (card[0] === 'A') {
          acePresent = true;
          total += 11;
        } else total += 10;
      } else total += Number(card[0]);
    });

    if (acePresent && total > TwentyOneGame.MAX_SCORE) total -= 10;

    return total;
  }

  updateHandTotals() {
    this.player.hand.total = this.calculateHandTotal('player');
    this.dealer.hand.total = this.calculateHandTotal('dealer');
  }

  identifyWinner() {
    let playerSum = this.player.hand.total;
    let dealerSum = this.dealer.hand.total;
    if (playerSum > TwentyOneGame.MAX_SCORE) {
      return 'dealer';
    } else if (playerSum > dealerSum || dealerSum > TwentyOneGame.MAX_SCORE) {
      return 'player';
    } else if (dealerSum > playerSum) {
      return 'dealer';
    } else return 'tie';
  }

  updateResults(winner, gambleModeOn, currentWager) {
    if (winner === 'player') {
      this.scoreboard.player += 1;
      if (gambleModeOn) {
        this.player.capital += currentWager;
      }
    } else if (winner === 'dealer') {
      this.scoreboard.dealer += 1;
      if (gambleModeOn) {
        this.player.capital -= currentWager;
      }
    }
  }

  printWinner(winner) {
    if (winner === 'player') {
      if (this.dealer.hand.total > TwentyOneGame.MAX_SCORE) {
        console.log('\nThe dealer busted! You win!');
      } else console.log('\nYou have won this round!');
    } else if (winner === 'dealer') {
      if (this.player.hand.total > TwentyOneGame.MAX_SCORE) {
        console.log('\nOops, you busted! Dealer wins!');
      } else console.log('\nYou have lost this round!');
    } else console.log('\nLooks like we have a tie - no one wins!');
  }

  displayScoreboard() {
    readline.question('\nPress Enter to continue to the scoreboard:');
    console.log('\nHere is the current score...');
    console.log(`\nPlayer: \n   ${this.scoreboard.player}`);
    console.log(`\nDealer: \n   ${this.scoreboard.dealer}`);
  }

  displayWagerResults(winner, currentWager) {
    if (winner === 'player') {
      console.log(`\nYou have won $${currentWager}`);
    } else if (winner === 'dealer') {
      console.log(`\nYou have lost $${currentWager}`);
    } else {
      console.log('\nA tie means no money won or lost!');
    }

    console.log(`Your balance is now: $${this.player.capital}`);
  }

  playAgain() {
    return this.yesOrNo('\nWould you like to continue playing? (yes/no, abbreviations ok)');
  }

}

let game = new TwentyOneGame();
game.play();