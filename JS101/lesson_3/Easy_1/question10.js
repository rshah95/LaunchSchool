let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let cutoff = advice.indexOf('house');
console.log(cutoff)

advice = advice.substring(0, 39);
console.log(advice);

// could have also used string.slice()