let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription.toUpperCase();
munstersDescription = munstersDescription.charAt(0) + munstersDescription.substring(1).toLowerCase();

console.log(munstersDescription);