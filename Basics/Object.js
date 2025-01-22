//object k kahnai
//if you want to learn js u have to need to learn Object and event handler 
 // when we declare it object litearls not make single ton object
    // object is collection of key value pair
    // object is noted by curly braces and inside braces we have key value pairs
    // object can have any type of data
    // object literls
    const myObject = { 
        name:"kahnai",
        age:25,
        city:"dhaka", 
        isLogeedIn:true,

    };
    console.log(myObject);
    // when we declare a value in object as a string we cannot access it by dot notation
    // we have to access it by bracket notation
    //like i want to acess the value of name mostly it will be acess by dot notation
    console.log(myObject.name);


    // addinh an array into object 
    myObject.greeting = function () {
            console.log(`Hello JS user, ${this.name}`);
    }
          console.log(myObject.greeting())
    // also degine function in the object and we can easily acess it fro object 
    // taking symbol concept in onbjects so much important
    const mySum =Symbol("Key1")
    const myObject2 = {
        name:"kahnai",
        age:25,
        city:"dhaka",
        [mySum]:"Key1"
    }
    console.log(myObject2);
    console.log(myObject2 [mySum]);//this is concept in objects when 
    // in interveiw some oone ask create a symbol and define in object and the print its value 
    // object declartion on single ton 
     const tinderUser = new Object()
     // this is single ton object
     const tinderUser1 ={}
     console.log(tinderUser)
     console.log(tinderUser1)