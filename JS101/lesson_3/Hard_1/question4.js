function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false
  } else {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  }
  return true; 
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

let ipTest = '10.4.5';
let ip = isDotSeparatedIpAddress(ipTest);
console.log(ip); 