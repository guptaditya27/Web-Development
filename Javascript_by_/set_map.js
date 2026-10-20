// set enforces unique values storage
// const arr=[11,11,12,22,10,10,33];
// const set1=new Set(arr);
// set1.add(15); //adds at last
// console.log(set1.entries())
// console.log(set1.has(2))
// console.log(set1)


//set to Array
const arr=[11,11,12,22,10,10,33];
const unique=[...new Set(arr)] // used spread operator here.
console.log(unique)
// iterate using for of loop


// map hashmap in js
// key value storage 
// object ya json mein key sirf string hi hoti hai but map mein key kuch bhi ho skti hai

const m1=new Map([
    [1,'Aditya'],
    [2,'muskan']
])
console.log(m1)
// advance optn of map will be studied... from notes...



