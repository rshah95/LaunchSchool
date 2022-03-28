let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let arr = [];

for (produce in obj) {
  if (obj[produce]['type'] === 'fruit') {
    arr.push(obj[produce]['colors'].map(color => {
      return color.charAt(0).toUpperCase() + color.substring(1);
    }));
  } else {
    arr.push(obj[produce]['size'].toUpperCase());
  }
}

console.log(arr); 
console.log(Object.values(obj));

// could have isolated subobjects with Object.values() and manipulated that array 