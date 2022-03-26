[1, 2, 3].every(num => {
  return num = num * 2;
});

// the return expression will not be falsy so.every() will return true
// return statement is also assignment and will alter array