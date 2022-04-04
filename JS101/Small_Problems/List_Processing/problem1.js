function sum(num) {
  let arr = String(num).split('');
  return arr.reduce((prev, curr) => Number(prev) + Number(curr));
  
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789)); 

