class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/*
line 16 will result in the string 'ByeBye' being logged to console since the method
on the constructor itself is being accessed.
line 17 will log ;HelloHello' to the console since the method on the created object is
accessed. 

*/