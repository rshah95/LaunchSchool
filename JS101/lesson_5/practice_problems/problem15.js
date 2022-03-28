let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let newArr = arr.filter(obj => {
  stat = true;
  for (prop in obj) {
    subArr = obj[prop]
    for (number of subArr) {
      if (number % 2 === 1) {
        stat = false; 
      }
    }
  }
  return stat;
});

console.log(newArr); 

// stupid - could have used .every()