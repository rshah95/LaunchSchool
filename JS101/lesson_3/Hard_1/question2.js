let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// the log statement with the object will return { first: [1, 2] }
/*
** although numArray is designated a s a new array, it still references the
** array in the object and thus any changes to numArray will reflect in the 
** object array. Can make a copy of array with ,slice() or use .concat() to
** return a copy with the added change. 
*/