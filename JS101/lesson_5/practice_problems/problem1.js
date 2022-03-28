let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => b - a);

console.log(arr);


// in sort, a and b are passed as strings - implitcly coerced for function so result was ok but 
// better to use the Number() method to convert strings to method
// explicit code is better