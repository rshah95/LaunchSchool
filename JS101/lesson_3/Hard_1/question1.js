function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// in function 2, return statement will not be read as including the object
/*
** JS engine will insert semi-colons where it interprets there is need
** which is why the bracket on the same line as the return statement in
** function 1 is necessary to include the object in the return
*/