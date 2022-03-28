let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (person in munsters) {
  console.log(`${person} is a ${munsters[person]['age']}-year-old ${munsters[person]['gender']}`)
}

// could have also used Object.entries() with the forEach() method