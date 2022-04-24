function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // 

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 
    console.log(b); // => 
    console.log(c); // => 
  }

  console.log(a); // => 
  console.log(b); // 
  console.log(c); // 
}

aFunc();