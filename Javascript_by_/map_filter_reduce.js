// for each , map, filter, set,reducer

const arr=[10,20,30,"rohit",90];
arr.forEach((number,index)=>{
    console.log(number,index,arr);
})
/*Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. */

// const newArr=arr.filter((number)=>number>10);
// console.log(newArr)

const compare=(number)=>number>25;
// creating custom filter 
arr.filtering=function(compare){
    const ans=[];
    for(let num of this){
       if(compare(num)){
        ans.push(num);
       }
    }
    return ans;
}
const newArr=arr.filtering((num)=>num>10);
console.log(newArr)
