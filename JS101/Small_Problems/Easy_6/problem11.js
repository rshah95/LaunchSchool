function reverse(array) {
  return array.slice().map((value, idx) => array[array.length - 1 - idx] = value);
}

// I technically did this correct now that i've seen the answer
// using slice wasn't mutating array in place - my b