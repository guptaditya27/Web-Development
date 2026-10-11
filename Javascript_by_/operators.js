//console.log(2 + 3);
//console.log('hello');

// increment decrement optr
//let postfix = 5;
//let prefix = 5;

//console.log(postfix++); // Prints 5. `postfix` is now 6.
//console.log(postfix); // Prints 6.

//console.log(++prefix); // Prints 6. `prefix` is now 6.
//console.log(prefix); // Prints 6.

//console.log(7 == '7'); // true (string "7" is coerced to number 7)
//console.log(0 == false); // true (boolean false is coerced to number 0)

//console.log(7 === '7'); // false (number is not a string)
//console.log(0 === false); // false (number is not a boolean)

// comparison operator
// let x = 20;
// let y = 10;
// console.log(x == y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x === y);

// diff ==  and ===
//let x=10,y='10'
//console.log(x==y) // true as matched with type coercion

//console.log(x===y) // false strict type checking.
// type check first then value match hogi

// type conversion
// let z = '10';
// let a = Number(z);
// console.log(typeof a);
// console.log(a)

//let a="1234ac";
//let b=Number(a);
//console.log(b); // Nan Not a Number
//console.log(0/0); // Nan
// type of Nan is Number only

// Number->string
// let a=10;
// let b=String(a);
// console.log(b);

// let x=true;
// let y=Number(x);
// console.log(y);

//console.log(x==y)
//console.log(Number(null)) //0
// console.log(Number (undefined)) // Nan

console.log(String(true)); // string true ban jati hai
// string mein bas string ban jata haai

// boolean Conversion
console.log(Boolean(0));
console.log(Boolean('as'));
// Truthy --> true
// falsy -->false.

// floating point storage challange
let a = 0.1;
let b = 0.2;
let c = a + b;

console.log(c == 0.3); // false kyu aarha
console.log(c); // 0.30000000000000004 why yeh val kyu aarhi hai

// possible solution
// string mein convert krke solve kr skte hai iss problem ko
// another way appx check kr ke

// some ecma scripts js cases dunder caasee of js

// 1. null is loosely equal to undefined
console.log(null == undefined); // true type coercion checking
console.log(null === undefined); // false strict type checking

console.log(null == false); // false
console.log(null == 0); // false
console.log(null == ''); // false

// >,<,<=,>= (null-->0 ), (undefined -->Nan) mein type coercion ho jata hai.

console.log(null >= 0); // true
console.log(null <= 0);// true
console.log(null == 0);// false
console.log(null > 0);// false
console.log(undefined>=0) // false

console.log("Rohit">"Mohit") // compare based on ascii value chart 


// in most of comparisons in js type coercion  ho jata hai.

console.log(10>=true) // true
// agr during comparison datatypes alg alg hai to dono phle middle ground pe aayege 
//. both convert to number then compare

console.log(null>="");

console.log(NaN==NaN);





