// 
// wraps up around promise obj then return 

//async function greet(){
//     return "rohit";
// }
// const response=greet();
// console.log(response);
// // op Promise { 'rohit' } returns a promise object
// response.then((data)=>{
//     console.log(data);
// })

// Equivalent to 
// async function greet(){
//     return new Promise((resolve,reject)=>{
//         resolve("Rohit");
//     })
// }
// const resp=greet();
// resp.then((data)=>{
//     console.log(data);
// })


// // reject wali condition 
// async function greet(){
//     return new Promise((resolve,reject)=>{
//         reject("Rohit");
//     })
// }
// const resp=greet();
// resp.then((data)=>{
//     console.log(data);
// }).catch((Error)=>{
//     console.log("Error :- ",Error)
// })

// prev format to fetch data 
// fetch("https://api.github.com/users")
// .then((resp)=>{
//     return resp.json()
// })
// .then((data)=>{
//     console.log(data);
// })



// await jab tk task poora n ho jyee aage mat chalana ruk jao rok do sab kuch 
// const response=await fetch("https://api.github.com/users");
// const data=await response.json();
// console.log(data);

// lekin yeh code js ko block kr de rha hai progm wait kr rha hai prog freeze ho ja rha hai .


// async kaise kaam krta hai
async function github(){
  const response=await fetch("https://api.github.com/users");
  const data=await response.json();
  console.log(data);
}
github();
console.log("Should run first and dont block")
// isme web api and event loop ka kaam aata hai and progm block nhi hota hai..

