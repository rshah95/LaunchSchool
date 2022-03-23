let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones);


for (let x = 0; x < barney.length; x++) {
  key = barney[x][0];
  console.log(key);
  if (key.includes('Barney')) {
    console.log(key);
    barney = barney.splice(x, 1)
    barney = barney[0];
  }
}

console.log(barney);