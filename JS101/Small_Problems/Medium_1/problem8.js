function fibonacci(num) {
  let fibTable = {'1': 1, '2': 1};

  if (num <= 2) return 1;

  fillTable(num, fibTable);

  return fibTable[String(num)];
}

function fillTable(num, obj) {
  if (obj[String(num)]) {
    return obj[String(num)];
  } else {
    let fib = fillTable(num - 1, obj) + fillTable(num - 2, obj);
    obj[String(num)] = fib;
    return fib;
  }
}


console.log(fibonacci(70));


// could have avoided second function by declaring object outside function duh!!