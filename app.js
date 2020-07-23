// OOP  / Prototypal Inheritance
const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
};
// const dogTwo = {
//     name: "Rocco"
// };

const dogTwo = {
    name: "Rocco",
    color: "brown"
};
dogTwo._proto_ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

// make two object and one object needs to inherit from the object

const car = {
    brand: 'honda',
    color: 'white',
    condition: true,
    seats: 2
}

const carTwo = {
    brand: 'BMW',
    year: 2010
}
carTwo._proto_ = car;

console.log(car);
console.log(carTwo);

carTwo.seats = 4;
console.log(carTwo.seats)  //inherit


// Constructor Functions, need to capatalize "U"
function User(name){
    this.name = name;   //referring to the User //no need to return a function bcos it's constructor function

} 

let adam = new User('Adam');
let pete = new User('Pete');
console.log(adam.name);   //
console.log(pete.name);

function NBAPlayer(name, team, threePointShooters) {
    // this = {}
    this.name = name;
    this.team = team;
    this.threePointShooters = threePointShooters;

    // return this
}
let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = 
console.log(steph);
console.log(steph.name);

// make a constructor function
// Make 3 new variables with that constructor function

function Car(name, year, originOf) {
    // this = {}
    this.name = name;
    this.year = year;
    this.originOf = originOf;

    // return this
}
let camry = new Car('toyota', 2020, 'Japan');
let crv =  new Car('honda', 2019, 'Japan');
console.log(camry);
console.log(camry.name);
console.log(crv)
