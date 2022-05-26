function objectsEqual(obj1, obj2) {
  obj1Arr = Object.entries(obj1).sort();
  obj2Arr = Object.entries(obj2).sort();
  
  return obj1Arr.toString() === obj2Arr.toString();
}

console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: 'bar', a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false