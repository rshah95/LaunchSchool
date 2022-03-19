const readline = require('readline-sync');
const messages = require('./calculator_messages.json');
let language = "";

// function for more distinct prompts
function prompt(message) {
  console.log(`=> ${message}`);
}

// function for checking if input number is valid
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// function for calculation
function calculation(lang = language) {
  // Ask the user for the first number and check validity
  prompt(messages[lang]['question_1']);
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(messages[lang]['invalid']);
    num1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(messages[lang]['question_2']);
  let num2 = readline.question();
  while (invalidNumber(num2)) {
    prompt(messages[lang]['invalid']);
    num2 = readline.question();
  }

  // Ask the user for an operation to perform and confirm its validity.
  prompt (messages[lang]['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[lang]['invalid']);
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }
  return output;
}

// Prompt for language
prompt("Type 'eng' for English, Escriba 'esp' para Español, Tapez 'fn' pour le Français");
language = readline.question();

while (language !== 'eng' && language !== 'esp' && language !== 'fn') { //ensure input is valid
  prompt(messages['eng']['invalid'], messages['esp']['invalid'], messages['fn']['invalid']);
  language = readline.question();
}


// greeting - opening message
prompt(messages[language]['welcome']);

while (true) {
  // perform calculation function
  calcResult = calculation();

  // Print the result to the terminal.
  console.log(`${messages[lang]['result']} ${calcResult}`);

  // Prompt for repeat
  prompt(messages[language]['repeat']);
  let answer = readline.question();
  // language management in order for validity check to work
  if (answer === 'si' || answer === 'oui') {
    answer = 'yes';
  } else if (answer === 'non') {
    answer = 'no';
  }

  while (answer !== 'yes' && answer !== 'no') { // ensure valid response
    prompt(messages[language]['invalid']);
    answer = readline.question();
  }
  // exit program if repeat not desired
  if (answer === 'no') {
    break;
  }
}

