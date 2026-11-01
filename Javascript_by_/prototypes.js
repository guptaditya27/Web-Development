// prototypes and classes
 
const obj={
    name:"Pinky",
    age:29,
    greet:function(){
        console.log("hello im  pinky");
    }
}

obj.greet();
console.log(obj.name,obj.age);
// we can access these fields as they are defined inside our object.
// but we can also access some mtds that has not been defined inside my obj  still i can call them using my object obj

console.log(obj.toString());
console.log(obj.hasOwnProperty("name"));
// mein yeh fn kaise acees kr pa rhu using my obj 

const obj2={
    account:30
}
//console.log(obj2.name) name kyu nhi access kr pa rha mein obj2 se 
// konse fn prop mera obj access kr skta hai other than defined inside its body 

obj2.__proto__=obj;
console.log(obj2.name); // ab aceess kr pa rha hai obj2 name ko kaise ?

// obj2.__proto__=obj;  
// proto obj2 ko obj1 se link kr deta hai works just like inheritence this is cs prototype 
// prototype ki wajah se obj ke pass hasOwnProperty toString jaise mtd present hote hai .

// isey wajah se array ke pass mtds aa ja rhe hai sorting slicing length 
// array object link with array prototype to saare mtds aa jate hai array object ke pass
// Array.prototype givees all prop of array object 
// arr=[1,2,3];
// arr.__proto__ --> array prototype 
// arr.--proto__.__proto__ --> object.prototype 
// isliye we says javascript mein array object hai .

// to follow DRY principle they did in js 
// just like inheritence 

//console.log(Object.prototype.__proto__); // null yeh final object hai 

// function.prototype.__proto__ --> object.prototype 

// yaani function bhi object hi hai js mein 

