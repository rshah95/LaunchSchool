function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//rewrite 1
function isColorValid(color) {
  let valid;
  if (color === "blue" || color === "green") {
    valid = 1;
  } else {
    valid = 0;
  }
  return valid;
}

//rewrite 2 
function isColorValid(color) {
  return color === "blue" || color === "green"
}