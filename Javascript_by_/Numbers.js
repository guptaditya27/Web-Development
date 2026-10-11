// Number
// let a=10;
// let b=3.14575;
// console.log(typeof a);
// console.log(typeof b);

// // js mein sirf ek hi primitive datatype hai i.e Number only used to store all int float double etc values 

// let c=b.toFixed(2); // rounds off to 2 decimal places 
// console.log(c);
// console.log(typeof c) // string deta hai in return mein
// // yeh string hi kyu return kr rha 
// // primitive datatypes immutable hote hai so change nhi kr skta tha isliye string return kr rha hai ..


// console.log(b.toPrecision(3)) // total 3 dig incl before decimal and after decimal .

// let k=b.toString();
// console.log(typeof(k))
// // no to string conversion krta hai 



// let val=new Number(20);
// //  yeh kya btata hai Number is a class in javascript so javascript is purely object oriented 

// val.toString();
// console.log(typeof val) // object why?

// // jab new keyword ka use krta hu to number class ka obj bnta hai isliye val ka type object hai .

// console.log(val)


// Quick Equality check 
// let a=20,b=20;
// console.log(a==b) // true
// // kyuki dono ki value same hai and dono ek hi ref / memory block ko point kr rhe hai jisme val=20 padi huii hai 

// let val1=new Number(20);
// let val2=new Number(20);
// console.log(val1==val2) // false 
// // new se jb object banta hai to memery alag alag assign hoti hai no refrence overlapping
// // to dono ka memmory alag hai but val same hai dono mein.

// // val1 and val2 are both diff objects .
// // comparison only checks refrence pointing only no value check 

// let obj1={
//     name:"Aditya"
// }
// let obj2={
//     name:"Aditya"
// }
// console.log(obj1==obj2) // false  same prev reason disussed above.


// let obj1={
//     name:"Aditya"
// }

// let obj2=obj1  // shallow copy hogi yhaa pe nyaa obj nhi create hoga obj2 will just act like pointer pointing obj1 

// console.log(obj1==obj2)
// // true aayega bcozz of shallow copy 

// // primitive data mein data copy hota hai 
// // but in object or user defined datatype refrence copy hota if assign using assignment operator (=)

// let a=2;
// let b=a;
// console.log(b==a) //true reason disscussed above .


// empty object array string [] list truthy values hoti hai boolen of there will result true always.
// as boolean sirf reference check krta hai values store hai ya nhi se usey  mtlb nhi hai .

// console.log(Boolean(0))//false
// console.log(Boolean(new Number(0))); // true 

// console.log(Boolean({}));//true
// console.log(Boolean([]));//true
// //agr kisi bhi obj ka ref heap mein ja rha haito woh truth hogi .
// console.log(Boolean(null)) // false null rep obj having no refn assigned thats why false aaya.

// non primitive datatypes refn basis copy and compare hoge

// Math Object in js that provides basic mathematical functionalities to user ya object
console.log(Math.abs(-3)) // 3 just modulus value.

console.log(Math.PI);
console.log(Math.LN10)
console.log(Math.ceil(3.145)) //upper int val
console.log(Math.floor(3.145)) //lower int val

console.log(Math.log10(20))

console.log(Math.max(11,22,44,-1));

console.log(Math.random());
// 0----0.99999999999 tk random no  chaiye 

// sattebaazi ka game 0--9
console.log(Math.floor(Math.random()*10))
//1---10 random
console.log(Math.floor(Math.random() * 10)+1);

// dice roll eg 1--6 
//*6 kr do 
console.log(Math.floor(Math.random() *6)+1); // 0----5.9999999

// formula -- Math.floor((Math.random()*No Outcomes)+startpos)

//15--25-- no out=11
console.log(Math.floor(Math.random() *11)+15);
// 0+15--15   && 10+15-->25.

//Math.floor(Math.random() * (max-min+1))+min;

// math.random()  banan hai aisa fn jo random no genenrate krke dede mujhe 

// why we don't use math.random for otp generation

// .random() kbhii bhi nyaa kuch generate nhi krta its just ki kuch  ip diff hota hai usey se diff op aajata hai and if ip track hojye kya hai then its hackable 






