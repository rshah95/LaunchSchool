let munstersDescription = "The Munsters are creepy and spooky.";

munsterArrray = munstersDescription.split("");
for (let x = 0; x < munsterArrray.length; x++) {
  if (munsterArrray[x] === munsterArrray[x].toLowerCase()) {
    munsterArrray[x] = munsterArrray[x].toUpperCase();
  } else {
    munsterArrray[x] = munsterArrray[x].toLowerCase();
  }
}

munstersDescription = munsterArrray.join(""); 
console.log(munstersDescription); 

// could have used .map() for better efficiency