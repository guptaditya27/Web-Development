// function greeting(){
//     console.log("Helo Coders Strike is coming ")
// }
// greeting();

// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(2,3))


// console.log(greeting) // stores fn defn  refn 


// // default arguments in js
// function addn(num1,num2,num3=0,num4=0){
//     return num1+num2+num3+num4;
// }


// rest operator in js
// function add(...val){
//     // array create kr deta hai
//     let sum=0;
//     for(let num of val){
//         sum+=num;
//     }
//     return sum;
// }
// console.log(add(1,2,3,4))
// console.log(add(1));
// console.log(add());



// diffn spread and rest optr 
// spread optr array ya object ko kholne ka kaam krta hai like merging two arrays

// let arr1=[10,20,30,40];
// let arr2=[50,60,70];
// let arrmerge=[...arr1,...arr2];
// console.log(arrmerge);
// let arr2d=[arr1,arr2] // diff observe kro 
// console.log(arr2d);

// let [num1,num2,...numrest]=arr1;
// console.log(num1,num2,numrest); 

// num 1 index 0 valof arr ko rkhega 
// num2 index1 val of arr ko 
// numrest baaki bachi huii values ko catch krke array mein rkh dega 
// rest catches both saari values of array


// const add=function(num1,num2){
//     return num1+num2;
// }

// console.log(add(3,5));

// variable can also point fn in js

//diff in both mtd's

// variable holding fn cant be called before declaration 
// but fn made using std decln can be called before decln in js bcoz of hoisting in js.


// arrow fn in js 
// const add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(3,4))

// const sub=(num1,num2)=>num1-num2;
// console.log(sub(5,2))

// self returning hota hai yeh khud value return krta hai no explicit return is required to wirte
// arrow fn used in sorting custom comparator to sort values

// const sqr=num=>num*num;
// console.log(sqr(5));

// if single parameter hai then braces can also be removed.



// fn returning Object created inside their body.
// const greeting=()=>{
//     return{
//         name:"Aditya  Gupta",
//         age:"21"
//     }
// }

// const greet=()=>{
//     const user={
//         name:"Aditya",
//         city:"Mainpuri"
//     }
//     return user;

// }
// console.log(greeting())
// console.log(greet());

// const gr=()=>({name:"Aditya",age:22});
// console.log(gr());



// IIFE Immediately Invoked fn
// (function greet(){
//     console.log("hello")
// })();

// (()=>{
//     console.log("hi");
// })();



// function call back
// fn passed as argm to another fn is call back fn

function greet(){
    console.log("hello")
}
function meet(callback){
    console.log("hi");
    callback();
    console.log("baad mein chale callback ke")
}
meet(greet); // greet ji as a refn pass krna hai 
// phle meet() chlega fir greet() chlega.
// call back fn ko teusable bnata hai harcode nhi krta dynamic at runtime decide kr skte hai konsa fn chalana hai acc to fn arg passed

// use case sort fn mein arrow fn asc,desc ka case.


