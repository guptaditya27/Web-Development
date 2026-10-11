// let marks=[10,2,0,54,50]
// console.log(typeof marks) // object hai array

// console.log(marks)
// console.log(marks.toSorted())
// console.log(marks);
// console.log(marks.toSorted())
// // array mutable hai
// //array is hetro type in js
// // can store any datatype values in single array.
// console.log(marks[-1])
// // no -ve indexing in array

// marks.push(30); // pushes at end and returns new length of array.
// console.log( marks.pop())// deletes last element and returns it
// console.log(marks)

// marks.unshift(10)
// marks.unshift(11) // adds elemnt at front of array and returns new length.
// console.log(marks);
// marks.shift() // deletes value from array front and returns it.
// console.log(marks)

// iterate over array
//let arr=[10,20,30,40,50]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// using for of loop
// for(let num of arr){
//     console.log(num)
// }

// let arrcopy=arr; // arrcopy arr ko hi point krne lagta hai chages in arrcopy gets reflected in arr also
// arrcopy.push(25);
// console.log(arrcopy);
// console.log(arr);
// they copy by refrence objects are copy of refrence

// variables are in stack and objects have memory allocated in heap
// so they just points the same memeory block only

// const se agr declare kiya hai to i cant change the refn also

//const arr=[10,20,30];
//arr=[11,22,33]
//console.log(arr) // error dega const mtlb value ya refn ficed can't be changed

// but arr[index]=new val is allpwed
//arr[0]=20;
//console.log(arr)
// kyuki address chnage nhi ho skta but add ke andar stored val can be modified

// slicing array
//arr.push(11,22,33,44)
//console.log(arr);
//console.log(arr.slice(2,4))
/*The beginning index ,of the specified portion of the array. If start is undefined, then the slice begins at index 0.
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array. */

// splicing array
//arr.splice(1,1) //trims original array part
// arguments -- start index , no elemnts to trim

//console.log(arr)

//arr.splice(1,2,"rohit","negi",19);
//console.log(arr)
// rohit negi 19 will be inserted after trimming 2 elemnts starting from index 1

/*The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted*/

// merge array spread optr use
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[arr1,arr2]
// console.log(arr3) // 2d array ban ja rha hai

// let arr4=[...arr1,...arr2]
// console.log(arr4)
//arr---> string conversion

// let names=["Alice","BOB","Charlie"]
// console.log(names.toString())
// console.log(names.join('/'))// isme string seprator we can specify likr , . etc..

//searching in array
// console.log(names.indexOf("BOB")); // first occurance index dega
// console.log(names.includes("rahul")) // true ya false
// console.log(names.lastindexof()) // retruns last occurence

// sorting in array
// const arr = [4, 1, 5, 2, 5, 11, 10, 2, 3];
// arr.sort();
// console.log(arr); // why seort nhi ho rha 
// // because default sort fn string basis pe compare krke sort krta hai 
// arr.sort((a,b)=>a-b);
// console.log(arr); // sorts in ascending order 
// arr.sort((a,b)=>b-a) // sorts descending order
// console.log(arr)
// arr.sort((a,b)=>{
//     if(a<b) return 1;
//     if(a>b) return -1;
//     return 0;
// }) 
// console.log(arr) // desc sort
// elaborated custom comparator js sort fn int value pe work krta hai -ve if in desired ord
// +ve if not in desired ord 0 if both are same
// -ve a,b a ko b se phle rkho 
// + b ko a se phle rkho 
// just use a-b for asc and b-a for desc 
// string mei nbhi ascii table based comparison hota hai not dict orde 
// i.e. A--a aayeaga

// why this weird rule to sort on basis of string only?
// simple -> arrays in js are hetrogeneous so koi trika ya paprameter to compare chaiye hi tha to string le liya .



const arr=[10,20,[30,[22.31,22,],50]];
console.log(arr[2][0]) //2d array acccessing
const a=arr.flat(2)// 2 2nd level 3d array ko flat krega
console.log(a); // flats only single level 3d->3d->1d in 2 flat optn 
console.log(arr.flat(Infinity)); // jitne bhi nestied so sab flat hojyega.
// reversing an array
arr.reverse()
console.log(arr);

// flattening nested array

// concat arrays return new array

// why arrys are not arrys in js?
//hetrgeneous , no contiguous memory allc
// size of data is not fixed 
// direct access from add not accessbile
// array is object is js.
