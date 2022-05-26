class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    owner.pets.push(pet);

    if(this.adoptions[owner.name]) {
      this.adoptions[owner.name].push(pet);
    } else {
      this.adoptions[owner.name] = [pet];
    }
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      this.adoptions[owner].forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
      console.log();
    }
  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);