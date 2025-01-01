// old version of concat in js 
const name = 'Huzaifa';
const age = 20;
//console.log('My name is ' + name + ' and I am ' + age + ' years old');
// new version of concat in js
//call stringinterpolation method 
console.log(`My name is ${name} and I am ${age} years old`);
// this is called string interpolation in js


//kahani of string
// string is a collection of characters
//  const gameName = 'Pubg';
//  console.log(gameName);
//  console.log(typeof gameName);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());
//  console.log(gameName.substring(0, 2));
//  console.log(gameName.substring(1, 3));
//  console.log(gameName.split(''));
//  console.log(gameName.split('g'));
//  console.log(gameName.split('u'));
//  console.log(gameName.split('b'));
//  console.log(gameName.split('P'));
//  console.log(gameName.split('p'));
//  console.log(gameName.split('B'));
//  console.log(gameName.__proto__);
//  console.log(gameName.bold);
 //console.log(gameName.fontcolor('red'));
 //console.log(gameName.fontsize(20));
//  console.log(gameName.trim(2));
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('g'));



 // paractice Questions 
 let wordReverse = 'Huzaifa';
 console.log(wordReverse.split('').reverse().join(''));

 //check the string is palindrome or not
    // let word = 'madam';
    // let word1 = 'racecar';
    // console.log(word.)


    //Count the number of vowels and consonants in a string.
  let word = 'Huzaifa';
  console.log(word.match(/[aeiou]/gi).length);
  // for simplee match we used match method 

  //Convert the first letter of each word in a string to uppercase (title case).
    let word1 = 'huzaifa tariq';
    console.log(word1.split(' ').map(word => word1.charAt(0).toUpperCase() + word1.slice(1)).join(' '));

    //slice 
    const str = 'The quick brown fox jumps over the lazy dog.';
    console.log(str.slice(-8 , -4));


    // trim 
    const greeting = '   Hello world!   ';
    console.log(greeting.trim());
     //replace
    const newstr = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    console.log(newstr.replace('dog', 'monkey'));

    const url = 'https://www.google.com';
    console.log(url.replace('https', 'http'));

    // include
    console.log(url.includes('https'));

    //split 
    const str1 = 'The quick brown fox jumps over the lazy dog.';
    const str2 =str1.split(' ');
    console.log(str2[3]);

