Object.prototype.ancestors = function () {
  let prototypes = [];
  let currObj = this;

  while (true) {
    let currPrototype = Object.getPrototypeOf(currObj);
    
    if (currPrototype.name) {
      prototypes.push(currPrototype.name);
    } else {
      prototypes.push('Object.prototype');
      break;
    }

    currObj = currPrototype;
  }

  return prototypes;
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

