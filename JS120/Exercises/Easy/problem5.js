class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  static sound = 'Meow meow!'

  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + ' ' + `${this.sound}`;
  }
}

class Dog extends Animal {
  static sound = 'Woof woof!'

  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}, my name is ${this.name} and I am ${this.age} years old and ${this.status}. ${this.sound}`;
  }
}