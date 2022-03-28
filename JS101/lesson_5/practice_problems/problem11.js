let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let subArr = Object.entries(obj).map(array =>{
    array[1] += 1;
    return array;
  })
  return Object.fromEntries(subArr);
});

console.log(newArr);

// could have also initialized empty object for shallow copy w/ Object.assign()