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
    this.intro = function() {
        console.log("Hi, my name is " + this.name);
    }

    // return this
}
let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = new NBAPlayer('Lebron James', 'Lakers', true);
console.log(steph);
console.log(steph.name);
steph.intro();
lebron.intro();

// make a constructor function
// Make 3 new variables with that constructor function

function Car(name, year, originOf) {
    // this = {}
    this.name = name;
    this.year = year;
    this.originOf = originOf;
    this.intro = function() {
        console.log("Hi, my brand is " + this.name)
    }

    // return this
}
let camry = new Car('toyota', 2020, 'Japan');
let crv =  new Car('honda', 2019, 'Japan');
console.log(camry);
console.log(camry.name);
console.log(crv)
camry.intro();

// Class -keyword = class
class Cars {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive(){    // separate function 
        console.log('Vroom')
    }
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model)
    }
}

let tesla = new Cars(2020,'Tesla', 'Model S', 'Red');
console.log(tesla);
tesla.drive();
tesla.intro();

// http://api.github.com/users/romebell
class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }

    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

fetch('http://api.github.com/users/ireneyap68')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let githubURL = data.url;
    //console.log(githubURL);   -checked
    let githubUsername = data.login;
    //console.log(githubUsername);   -checked
    let githubName = data.name;
    //console.log(githubName);  -checked

    // set class
    let irene = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(irene);

    irene.intro();
})

