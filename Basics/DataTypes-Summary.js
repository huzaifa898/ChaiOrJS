// Premetives data types and non premitive data types
// premitive data types are string, number, boolean, null, undefined, symbol
// non premitive data types are object, array, function
  

const name = 'John'; // string
let age = 25; // number
let isMarried = false; // boolean
let address = null; // null
let mobileNumber; // undefined
console.log(typeof name, typeof age, typeof isMarried, typeof address, typeof mobileNumber); // Output
// array
const heros = [ 'batman', 'spiderman', 'ironman', 'superman'];
// array is a collection of data
// array is known by [] brackets

// object
const person = {
    name: 'John',
    age: 25,
    isMarried: false,
    hobbies: ['Reading', 'Coding', 'Travelling']
};

// function
 const myFunction = () => {
    console.log('Hello World');
}

console.log(typeof heros, typeof person, typeof myFunction); // Output
//but the finction is also called object in jsbut called function object