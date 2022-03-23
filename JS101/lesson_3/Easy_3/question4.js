let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
** although .slice() returns a copy, it a is a shallow copy and thus the subject will be affected by the changes made in line 3.
*/ 