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


