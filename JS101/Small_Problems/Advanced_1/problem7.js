function binarySearch(array, searchItem, index = '') {
  let halfIndex = Math.ceil(array.length / 2) - 1;
  if (index === '') index = halfIndex;
  //console.log(array[halfIndex], array);

  if (array[0] === undefined) return -1;

  if (searchItem === array[halfIndex]) {
    return index;
  } else if (searchItem < array[halfIndex]) {
    index = (Math.ceil(index / 2) - 1)
    return binarySearch(array.slice(0, halfIndex), searchItem, index);
  } else if (searchItem > array[halfIndex]) {
    index += Math.ceil((array.length - (halfIndex + 1)) / 2)
    return binarySearch(array.slice(halfIndex + 1), searchItem, index);
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));
console.log(binarySearch(yellowPages, 'Apple Store'));



console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

