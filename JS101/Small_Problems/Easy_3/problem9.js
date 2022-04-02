function cleanUp(string) {
  let array = string.split('');
  array = array.map(char => (char > 'A' && char < 'z') ? char : ' ')

  array = array.filter((char, idx) => {
    if (char === ' ' && array[idx - 1] === ' ') {
      return false;
    } else return true;
  })  
  
  return array.join('');
}

console.log(cleanUp("---what's my +*& line?")); 

// single line with regex expression - need to review