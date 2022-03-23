let title = "Flintstone Family Members";

let spacesNeeded = Math.floor((40 - title.length) / 2)

spaces = ''
for (let x = 0; x < spacesNeeded; x++ ) {
  spaces = spaces + ' ';
}

let spacedTitle = spaces + title

console.log(spacedTitle);