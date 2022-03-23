function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); 

// return no, param can be designated a default argument but it is only relevant if no argument is passed in to function . 