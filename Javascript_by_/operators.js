console.log(2+3);
console.log("hello");


// increment decrement optr
let postfix = 5;
let prefix = 5;

console.log(postfix++); // Prints 5. `postfix` is now 6.
console.log(postfix);   // Prints 6.

console.log(++prefix); // Prints 6. `prefix` is now 6.
console.log(prefix);   // Prints 6.

console.log(7 == "7");   // true (string "7" is coerced to number 7)
console.log(0 == false); // true (boolean false is coerced to number 0)

console.log(7 === "7");   // false (number is not a string)
console.log(0 === false); // false (number is not a boolean)