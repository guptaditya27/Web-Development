// scope closure, Higher order Function

// let a=10
// const b=20

// // scope of both a,b is global

// function greet(){
//     console.log(a,b)
// }
// greet(); // hnn yeh a,b fn ke andar bhi acess ho ja rhee hai .
// global variable ka scope poora program hota hai khii bhi access kro

// har block mein accessible hoge
// yeh block like if else etc...

// function fn(){
//     let c=30;
//     console.log(c);
// }
//console.log(c);
// kisi bhi block ke andar declare and defined variable ka scope uss block ke andar tk ka hi hota hai
// isliye c ko fn ki body ke bahar hm access nhi kr pa rhe hai

// block scoped variable
// life of block scoped varibles is till the time that block is executing only..

// let and cosnt follows block functional and global all scopes
// var follows functional , global scope but ignores block scope

// if(true){
//     var ab=1;
//     console.log(ab);

// }
// console.log(ab); // block ke bahar bhi access ho ja rha hai var declare variable.

// function ab(){
//     var temp=10;
//     console.log(temp);
// }
//console.log(temp); // ab yhaa yeh error dega due to fn level scope followed

// let global=30;
// function greet(){
//     let global=20;
//     console.log(global);
// }
// greet();
// console.log(global);
// No name conflict arising
// variable ki matching always block level se shuru hoti hai
// if found in block refn than mapped it with that
// block level is first preference
// then function level priority
// then global level least preferrable.

// let global = 30;
// function greet() {
//   let global = 20;
//   console.log(global);
//   function meet(){
//     console.log(global);
//   }
//   meet();
// }
// greet();
// console.log(global);
// 20 due to greet() global variable 
// 20 due to variable global in greet fn 
// 30 due to global outside fn body actual global variable.


// function createcounter(){
//     function increment(){
//         console.log("i am increment function")
//         return 20
        
//     } 
//     return increment; // returning refrence of increment function.
    
//     // return increment() // fn call krta hai and jo val fn return kr rha hai woh neeche count mein store ja rhi hai 

// }
// let count=createcounter();
// console.log(count) // [Function: increment] this is how we are returning refrence of our fn.
// count(); // executes the fn we are returnning.



function createcounter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
//console.log(count) // inaccesible outside of fn body due to limitation of scope.
let counter=createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// iss trike se ham count ko access kr skte hai outside its scope 
// this is closure 
// closure is a fn which remembers values fetched from its outer fn even after completing the execution of itself .

//questions arising?
/*
    let fn level follow krta hai and memory of count release hoja rhi hogi after execution of createcounter fn and 2nd call mein dobara memory milegi and count=0 reinitialize hojana chaiye 
    to 1 1 1 aana chaiye to value purani wali kaise hold krke rkh rha hai yeh ?

*/
// count ko memory stack se heap me krega during closure if inner fn using it and returning its refrence then only this will happen.
// count as an context object heap mein rhega and heap ki memory released by garbage collector 


// js is single threaded ek baar mein ek task hi chlega 
// parallely gc and code execute nhi hote phle chunk of code execute hota hai then gc chlta hai and this process repets 


// usecase of this ..
// let balance = 500;




// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }





// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


function double(value){
  return function execute(num) {
    return num * value;
  };
    /*
    function execute(num){
        return num*value;
    }
    return function;
    
    */
}

//const n = double(20)(5); // dono fn mein args jyega . 1st val fn1 2nd arg nested fn mein.
//console.log(n);


//other way 
const n=double(20);
console.log(n(5));
