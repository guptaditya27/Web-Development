// for each , map, filter, set,reducer

// const arr=[10,20,30,"rohit",90];
// arr.forEach((number,index)=>{
//     console.log(number,index,arr);
// })
/*Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. */

// const newArr=arr.filter((number)=>number>10);
// console.log(newArr)

//const compare=(number)=>number>25;
// creating custom filter
// arr.filtering=function(compare){
//     const ans=[];
//     for(let num of this){
//        if(compare(num)){
//         ans.push(num);
//        }
//     }
//     return ans;
// }
// const newArr=arr.filtering((num)=>num>10);
// console.log(newArr)

// for each loop
// const arr=[10,20,"aditya",'aditi',true,{"name":"rahul"}];
// arr.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })
// for each is member function of list in js
// takes a callback as argument ie fn in args.
// callback ke args mein ham index bhi de skte hai, arr bhi print kr skte hai

// filter select element from array acc to specific condn
// const arr1=[11,22,33,88,15,21,42,12];
// const newar=arr1.filter((value)=>{
//     return value%2!=0
// })
// console.log(newar)

// call back ke ()=>{
//  curley braces mein return likha mendatory hai agr direct likhte hai to return khud lg jata hai but agr {mein likhega } to return lgana pdega .
//}

// filter naya array return krkre deta hai

// creating filtering mtd
// const compare=(num)=>num%2!=0;
// arr1.filtering=function(compare){
//     const ans=[];
//     for(let num of this){
//         if(compare(num))
//             ans.push(num);
//     }
//     return  ans;
// }
//const a=arr1.filtering(compare)
// same as
//const ar = arr1.filtering((val)=>val%2!=0);

//console.log(a,ar);

// but yeh filtering mtd sirf uss array object pe kaam krega jiske liye decalre kiya gya hoga sab array object pe kaam nhi kreg a

//const arrn = [11, 22, 33, 88, 15, 21, 42, 12];
//arrn.filtering is not a function

// generic fn so that it will work with every object .

// Array.prototype.filtering=function(compare){
//     const ans=[];
//     for(let num of this ){
//         if(compare(num)){
//             ans.push(num);
//         }

//     }
//     return ans;
// }
//console.log(arrn.filtering(compare));
// ab kaam kr jyega jitne bhi array create kruga sabme filtering mtd included hoga
// prototype mein array ke saare mtd's rkhe hote hai to woh har array ke liye accessble ho jate hai agr prototype mein daalte hai to .

// Map in array

// const arr=[10,20,30,5,90,87];
// map mein jo callback dete hai woh call back har array element pe apply hot ahai and nyii array after modfn return kr deta hai .
//const newarr=arr.map((num)=>num**2);
//console.log(newarr)

// real life usage of filtering mtd.
// pdt ke json mein custom sorting and filtering .

const products = [
  {
    id: 1,
    name: 'iPhone 15',
    category: 'Mobile',
    brand: 'Apple',
    price: 79999,
    rating: 4.8,
    stock: 25,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    category: 'Mobile',
    brand: 'Samsung',
    price: 74999,
    rating: 4.7,
    stock: 40,
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    category: 'Laptop',
    brand: 'Apple',
    price: 114999,
    rating: 4.9,
    stock: 12,
  },
  {
    id: 4,
    name: 'Dell XPS 13',
    category: 'Laptop',
    brand: 'Dell',
    price: 99999,
    rating: 4.6,
    stock: 18,
  },
  {
    id: 5,
    name: 'Boat Rockerz 550',
    category: 'Headphones',
    brand: 'Boat',
    price: 1999,
    rating: 4.2,
    stock: 100,
  },
  {
    id: 6,
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    brand: 'Sony',
    price: 28999,
    rating: 4.9,
    stock: 8,
  },
];

/*const newpdt=products.filter((product)=>product.price>10000).sort((a,b)=>b.stock-a.stock);

  console.log(newpdt)


  // all pdts having price greater than 10000 and sorted descending order acc to stock */

// map ka use case ..

// const name_brand=products.map((pdt)=>({name:pdt.name,brand:pdt.brand}));

// console.log(name_brand)

// map poore array pe chlta hai and jo bhi transformation krna ho krke nyaa result nikal ke laa skte hai anyting any functionality req to perform upon entire array done using map.

// same Result can be achived using filtering and chaining also

// const nm_br=products.filter((pdt)=>pdt.price>10000).sort((a,b)=>a.price-b.price).map((pdt)=>({name:pdt.name,category:pdt.category,price:pdt.price}))

// console.log(nm_br);

// woh pdt ke naam category price in asc order jinka price > 100000 hai.

//Creating our Map functionality.
// custom map for array and object ke liye let's try.

// function comp(val){
//     return val%2;
// }
// const arr = [10, 20, 30, 5, 90, 87];
// arr.mapping=function(comp){
//     const a=[];
//     for(let val of this){
//         const modf=comp(val);
//         a.push(modf)
//     }
//     return a;
// }
//const newa=arr.mapping((val)=>val*2)
//const newa = arr.mapping(comp);
// hee hee mja aagya
//console.log(newa)



// actual map functionality ki tarah implement
// arr.mapping=function(callback){
//     const arr=[];
//     for(let i=0;i<this.length;i++){
//         let val=callback(this[i],i,this);
//         arr.push(val);
//     }
//     return arr;
// }
// newarr=arr.mapping((val,i)=>{
//     if(i%2==0)
//         return val;
// })
// console.log(newarr);
// sirf even index wali values will be in newarr.






// trying for products array. objects ke liye mapping jo specific values nikaal ke lyee

// products.mapping = function (callback) {
//   let arr = [];
//   // isko array of objects bnauga
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], this));
//   }
//   return arr;
// };

// const nyaaarr = products
//   .mapping((pdt) => ({ name: pdt.name, price: pdt.price }))
//   .sort((a, b) => b.price - a.price);

// console.log(nyaaarr);

// // Actual map Like implementation

// Array.prototype.mapping = function (callback, thisArg) {
//   const result = new Array(this.length);

//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       result[i] = callback.call(thisArg, this[i], i, this);
//     }
//   }

//   return result;
// };

// // chaining like mtd.

// function createMappableArray(arr) {
//   return {
//     data: arr,

//     mapping(callback) {
//       const result = [];

//       for (let i = 0; i < this.data.length; i++) {
//         result.push(callback(this.data[i], i, this.data));
//       }

//       return createMappableArray(result);
//     },

//     value() {
//       return this.data;
//     },
//   };
// }

// const result = createMappableArray([1, 2, 3, 4])
//   .mapping((x) => x * 2)
//   .mapping((x) => x + 1)
//   .value();

// console.log(result);





//REDUCE() functionality in js
// optn on entire array and final ek calc value de de aake 

// const sum=products.reduce((accumulator,currenValue)=>{
//     return accumulator+currenValue.price;
// },0)
// console.log(sum);

// // total stocks/pdts having rating >4
// const total=products.reduce((accumulator,curr)=>{
//     if(curr.rating>=4.5)
//        return accumulator+curr.stock;
//     else{
//         return accumulator;
//     } 
// },0)// accumulator ki current val 0 initialize kiya.
// console.log(total)


