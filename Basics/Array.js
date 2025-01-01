const myArray = [1, 2, 3, 4, 5];
// array is a collection of data
// array is noted by square brackets and inside brackets we have elements
// array can have any type of data
// const hero = ['superman', 'batman', 'flash', 'wonderwoman'];
// const myArray2 = [1, 'hello', 3, 4, 5];
// console.log(myArray);
// console.log(hero);
// console.log(myArray2);
// console.log(myArray2[1]);
// console.log(hero[3]);
// console.log(hero.length);
myArray.push(6);
myArray.push(7);
myArray.pop();
myArray.shift();
myArray.unshift(0);
myArray.splice(2, 0, 2.5);
myArray.splice(2, 1);
console.log(myArray);

/////////////////tasks for logic building 
const mixedData = ["apple", 42, "banana", null, true, 99, "cherry", false];
console.log(mixedData.length);
console.log(mixedData.indexOf("apple"));
console.log(mixedData.indexOf(false));
console.log(mixedData.pop());
console.log(mixedData)
console.log(mixedData.reverse(mixedData))
// for reversing the string
const str = "A Quick Brown fox jumps over the lazy dog and the dog barks at the fox and the fox runs away and the dog chases the fox and the fox hides in the bushes and the dog finds the fox and the fox is caught by the dog"; 
const reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr);

const marvelHeros = ["Ironman", "Spiderman", "Thor", " Hulk", "Captain America", "Black Panther", "Black Widow", "Doctor Strange", "Antman", "Wanda"];
const dcHeros = ["Superman", "Batman", "Flash", "Wonderwoman", "Aquaman", "Cyborg", "Green Lantern", "Martian Manhunter", "Shazam", "Green Arrow"]; 
const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);  //concatenation of two arrays
/// properly merged aarry into array
// on ... speard method  
const allHeros2 = [...marvelHeros, ...dcHeros];
console.log(allHeros2);  //concatenation of two arrays


//flat method of one arrrayinto more arrays 
const anotherArray = [1, 2, [3, 4, [5, 6]]];
console.log(anotherArray.flat(Infinity));

// for data scriping 
