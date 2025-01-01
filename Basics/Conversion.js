let score = '100';

console.log(typeof score); // string
console.log(typeof (score)); // string


// converting string to number
 let ValueInNumber = Number(score);
 console.log(typeof ValueInNumber); // number


 let score1 =  'ii33';
    let ValueInNumber1 = Number(score1);
    console.log(ValueInNumber1); // NaN

let score2 = 'null';
let ValueInNumber2 = Number(score2);
console.log(ValueInNumber2); // 0
let score3 = 'undefined';
let ValueInNumber3 = Number(score3);
console.log(ValueInNumber3); // NaN
let score4 = 'true';
let ValueInNumber4 = Number(score4);
console.log(ValueInNumber4); // 1
let score5 = 'false';
console.log(Number(score5)); // 0

// kahani of conversion of conversions 
// when we convert number from '0' then it will give type of number this is called string to number
// when we convert number like 'ii33 ' then it will give NaN
// when we convert number from 'null' then it will give 0 
// when we convert number from 'undefined' then it will give NaN

//boolean conversion
 let isLoggedIn = 1;
 let booleanLoggedIn = Boolean(isLoggedIn);
 console.log(booleanLoggedIn); // true
 // the conversion of boolean is possible here
 let isLoggedIn1 = 0;
 let booleanLoggedIn1 = Boolean(isLoggedIn1);
 console.log(booleanLoggedIn1); // false
  let isLoggedIn2 = 'Huzaifa';
  let booleanLoggedIn2 = Boolean(isLoggedIn2);
    console.log(booleanLoggedIn2); // true
let isLoggedIn3 = '';
let booleanLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanLoggedIn3); // false
// when we convert number from 1 then it will give true
// when we convert number from 0 then it will give false
// when we convert number from any string then it will give true
// when we convert number from empty string then it will give false

//conversion of number to string
let score6 = 100;
let stringScore = String(score6);
console.log(stringScore); // 100
console.log(typeof stringScore); // string
//it will easily convert number to string but the from the type of we know that it is number


// Opeartions  Concept
 let score7 = '100';
 let negValue = -score7;
 console.log(negValue); // -100
 //simply opeartion concept is that when we use - sign before the number then it will give negative value of that number

 //two string concatation on opeartions 
 let str1 = 'Hello';
 let str2 = 'World';
    let str3 = str1 + str2;
    console.log(str3); // HelloWorld

    // game counter slve example of prefix and postfix
    let counter = 0;
    counter++;
    //console.log(counter++); // 1
    // postfix increment will first return the value and then increment the value
    console.log(++counter); // 2   
  // prefix increment will first increment the value and then return the value