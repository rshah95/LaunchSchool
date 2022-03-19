const readline = require('readline-sync');
let loanAmount;
let monthlyInterestRate;
let loanDuration;
let monthlyPayment;

// function for more distinct prompts
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to obtain loan amount from user
function userLoanData () {
  // obtain user input
  prompt('What is the loan amount?');
  let loanAmount = parseFloat(readline.question('$'));
  while (!loanAmount) { // ensure input is valid
    prompt('Invalid input - try again! Hint: enter numbers only ');
    loanAmount = readline.question('$');
  }
  return loanAmount;
}

// function to obtain annual percentage rate from user
function userAprData () {
  // obtain user input
  prompt('What is the APR of the loan? (Ex: 15%)');
  let annualPercentageRate = parseFloat(readline.question());
  while (!annualPercentageRate) { // ensure input is valid
    prompt('Invalid input - try again! Hint: enter numbers only');
    annualPercentageRate = readline.question();
  }
  // calculate monthly interest rate from APR
  let monthlyInterestRate = (annualPercentageRate / 100) / 12;
  return monthlyInterestRate;
}

// function to obtain loan duration
function userLoanDuration() {
  // allow user to input loan duration in months or years
  prompt('Enter 1 to input loan duration in months. Enter 2 to input loan duration in years');
  let durationType = readline.question();
  while (durationType !== '1' && durationType !== '2') { //ensure valid input
    prompt('Invalid input - Try again!');
    durationType = readline.question();
  }
  let loanDuration;
  switch (durationType) {
    case '1':
      prompt('Enter loan duration:');
      loanDuration = parseFloat(readline.question());
      break;
    case '2':
      prompt('Enter loan duration:');
      loanDuration = 12 * parseFloat(readline.question());
      break;
  }
  return loanDuration;
}

// function to calculate monthly payment
function calculateMonthlyPayment(p = loanAmount, j = monthlyInterestRate, n = loanDuration) {
  let monthlyPayment = p * (j / (1 - Math.pow((1 + j), (-n))));
  return monthlyPayment.toFixed(2);
}

// Greeting
prompt('Welcome to Loan Calculator!');

// Obtain required variables from user and calculate monthly payment
loanAmount = userLoanData();
monthlyInterestRate = userAprData();
loanDuration = userLoanDuration();
monthlyPayment = calculateMonthlyPayment();

// Log monthly payment for user
console.log(`The monthly payment for this loan is: $${monthlyPayment}`);


/* Edge cases not taken into account
** interest-free loans
** loan durations of both years and months
** allow user more flexibility in format of input values - Ex: accept percent as decimal
*/