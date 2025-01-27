//hoisting


// console.log(x);
// var x = 4;//undefined


// console.log(y);
// let y =6;//refference error

// console.log(z);
// const z=8; //refference error


//clousure
//  function first(){
//     let x=5;
//     function second(){
//         console.log(x);

//     }
//     second()
//  }
//  first()



//  higher order function

//  function x(){
//     console.log("hello");
    
//  }
//  function y(){
//     console.log("hhj");
    

//  }
// y(x);


// //pure function

// function add(a,b){
//     return a+b;

// }
// console.log(add(2,3));
// console.log(add(2,3));


// const person= {
//    firstname: function (city,country) {
//       return this.firstname + " " + this.lastname + "," + city +" ,"+ country;
//    }
// }
// const person1 = {
//    firstName:"John",
//    lastName: "Doe"
//  }
// console.log(person.fullname.call(person1,"oslo","norrway"));



//first class function

// const sayHello= function(){
//    return "Hello";

// };
// console.log(sayHello());
   

 function executefunc(fn){
   

   console.log(fn());
}
executefunc(sayHello);
