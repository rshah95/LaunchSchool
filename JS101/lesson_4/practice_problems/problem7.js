['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// returns [ undefined, 'bear']

// if no return value, map designates undefined 