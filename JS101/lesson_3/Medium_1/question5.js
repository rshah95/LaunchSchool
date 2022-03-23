console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// line 1 outputs 0.9
// line 2 outputs true 


/*
** JS uses floating point numbers for all operations which can lack precision
** in this case, the lack of precision causes line 2 to be false even if they're very close
*/