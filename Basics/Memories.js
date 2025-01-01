// there are two types of memory in js
// 1. Stack memory
// stack memory is a memory which is used to store the data of the variables
// stack memory used in premitive data types
// in stack memory we get copy from the memory of varaiables
   let myName = 'Huzaifa';
   let secondName =" MuhammadTariq";
   anotherName = "Talha";
   console.log(myName)
   console.log(anotherName);

// 2. Heap memory
// in heap memory we get the reference of the memory of the variables
// heap memory is used in non premitive data types

let obj = {
    name: 'Huzaifa',
    age: 20
};
let obj2 = obj;
obj2.name = 'Tariq';
console.log(obj.name); // Tariq
console.log(obj2.name); // Tariq