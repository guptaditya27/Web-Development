console.log("Hello, world!");
// This is a simple JavaScript file that logs a message to the console.
// You can add more functionality here as needed.   
var a=5;
console.log("The value of a is: " + a);

// Datatypes and types.

//1. reference and primitive
let p=12;
let q=p;
p++;
q=q-3;
console.log("value of p:- "+p+"\n"+"value of q:- "+q);
//  primitive hai having hteir independent copies.

let arr1=[10,12,30];
let arr2=arr1;
// here spot diff b/n shallow and deep copy / reference 
// changing arr 1 and how it affects arr2 values.
console.log("original arr 1: "+arr1+"\nOriginal arr 2 :- "+arr2);
arr1[1]+=20;
console.log("updated arr 1: "+arr1+"\nAffected arr 2 :- "+arr2);
// arr2 is not independent as its storing reference of arr1 only and affectd
// by changes of it.


//  strings.
/* 
' ' -> single quotes.
" " -> double quotes.
` ` -> back tick
*/


let ab=9007199254740991n;
console.log(ab+3n);


// loops in js
for(let i=0;i<=10;i++){
    console.log(i+"\n");
}

// break and continue
 for(let i=10;i<=150;i++){
    if(i===11)
        continue;
    else if(i%3===0)
        continue;
    if(i==125)
        break;
    console.log(i);
 }