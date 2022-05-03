function bubbleSort(array) {
  let cleanPass = 0;

  do {
    cleanPass = 0;
    for (let idx = 0; idx < array.length; idx++) {
      if (array[idx] > array[idx + 1]) {
        cleanPass++;
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
      }
    }
  } while (cleanPass)

  return array;
}



console.log(bubbleSort([6, 2, 7, 1, 4]));
console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
