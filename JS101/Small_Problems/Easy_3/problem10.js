function century(year) {
  let century = '';
  if (year % 100 === 0) {
    century = String(Math.floor(year / 100));
  } else century = String(Math.floor(year / 100 + 1));

  if (century[century.length -1] > 3) {
    century += 'th'; 
  } else if (century[century.length -1] === 3) {
    century += 'rd';
  } else if (century[century.length -1] === 2) {
    century += 'nd';
  } else century += 'st';

  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(5));           // "1st"