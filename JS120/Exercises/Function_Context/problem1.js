let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// since fullName is not a function or method, the value of this 
// is the global object resulting in undefined + undefined = NaN 