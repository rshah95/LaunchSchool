let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// wiil output false, equality operator can't be used for Nan
// can use Number.isNan()