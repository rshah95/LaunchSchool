class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}

class Car extends Vehicle {}

let towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);