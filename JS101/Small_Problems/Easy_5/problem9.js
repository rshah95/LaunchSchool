function countOccurrences(array) {
  let obj = {};
  array.forEach(value => {
    if (obj[value]) {
      obj[value] += 1;
    } else obj[value] = 1;
  })

  for (type in obj) {
    console.log(`${type} => ${obj[type]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);