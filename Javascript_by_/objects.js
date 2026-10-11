// const user={
//     name:"Aditya Gupta",
//     age:22,
//     college:"Gu",
//     emailId:"adgupta285@gmail.com"
// }
// // console.log(user)
// // console.log(user.emailId)

// // // CRUD - create Read Update Delete

// // user.age=13; // updation 
// // user.adhaar="744308382162" // adding if dne in object
// // console.log(user)

// // delete user.college;
// // console.log(user)

// // // kays are always stored as a string in js 
// // // name - string college ->string 
// // console.log(user["age"]) // aise bhi access kr skte hai 


// const user2=user;
// user["name"]="rahul"
// console.log(user,user2)
//  // dono mein change hoga kyuki objects refrence ko copy krte hai shallow copy


// console.log(Object.keys(user));
// // returns keys of the object given in a object 

// console.log(Object.values(user));
// //values of object
// console.log(Object.entries(user)) // key , value pairs de dega.
// for(let keys in user){
//     console.log(keys,user[keys])
// }
// // restructuring of object
// const {name,age}=user;
// console.log(name,age);

// // array ki restructuring
// const arr=[11,21,40,36];
// const [first,second]=arr
// console.log(first,second);
// const {name:username,age:userage}=user;
// console.log(username,userage);

// for(let keys of Object.keys(user)){
//     console.log(keys)
// }

// for(let values of Object.values(user)){
//     console.log(values)
// }
// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

// Methods inside objects ..


// const user={
//     name:"Aditya Gupta",
//     age:22,
//     college:"Gu",
//     emailId:"adgupta285@gmail.com",
//     greeting:function(){
//         console.log(`Hello Ji iam ${this.name} under the Water`)
//         return 20;
//     }
// }
// let val=user.greeting();
// console.log(val);

// nested objects
// const user={
//     name:"Rahul",
//     age:"22",
//     address:{
//         city:"mainpuri",
//         state:"Uttar Pradesh",
//         pincode:"205001"
//     }
// }
// console.log(user)
// console.log(user.address)
// const user2={...user}; // spread optr use krne se dono obj deep copy hote hai and mja aajta hai both act as independent copy
// spread sirf single level deep copy krta hai 
// agr mein changes address mein kruga to user 1 aur user2 dono ke add mein changes hoge

// user2.address.city="Noida";
// console.log(user)
// console.log(user2)
// // dono mein city noida ho jyegi 


// deepest copy all level copy 
// const user2=structuredClone(user);
// user2.address.city="Noida";
// console.log(user,user2)
// both independent copy bnege ..


//key of object can be no also type coercion string mein hi hojyega uska
// const user = {
//   name: 'Rahul',
//   age: '22',
//   0:'123',
//   address: {
//     city: 'mainpuri',
//     state: 'Uttar Pradesh',
//     pincode: '205001',
//   },
// };
// console.log(user[0]);


//how array stores values in js
// const arr={
//     0:1,
//     1:3,
//     2:5
// }
// console.log(Object.values(arr));


