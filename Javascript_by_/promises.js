console.log("Hello World Starts..")

//const p1 = fetch('https://api.github.com/users');
// states of promise are pending accepted rejected.
// display / consume data after promise is accepted barna 
// pending hi dikhata rhega .

//console.log(p1);

//promise : object hai  having 3 states pending fulfilled rejected.

// fetch() is an asynchronous task waqt leke execute hota hai yeh 

// p1.then((response)=>{
//     console.log(response);
// }); // jsb response from server aa jye tb hi execute krna is done using then();

// ab data byte ki form mein aata hai from server response likhne se dikhega nhi to resopnse.json likhna pdega.


// const p2=p1.then((response) => {
//     return response.json(); // yeh bhi asyncronous hai 
// }); 

// p2.then((response)=>{
//     console.log(response);
// })

// we can create promise chaining to do same task 


// fetch('https://api.github.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })



// fetch('https://api.github.com/users')
//   .then((response) => {
//     if(!response.ok){
//       throw new Error("Data is Not Present");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const parent=document.getElementById("first");
//     for(let i=0;i<30;i++){
//         const image=document.createElement("img");
//         image.src=data[i].avatar_url;
//         image.style.height="100px";
//         image.style.width="100px";
//         parent.append(image);
//     }
//   })
//   .catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent="Failed To Fetch..";
//   })
// chaining krke error handling kr li 

// request failed sirf 3 case mein hogi server down , internet down ,dns resolve error.

// server jb bhi respond krega resp fulfilled hi maani jyegii..

// aise cases kaise handle kru client side pe jb data nhi ho requested server pe aur url hi glt ho but resp promise fullfilled maanega and blank hojyega webpage .

// this se all we consume a promise 

// creating a Promise

// const p1=new Promise((resolve, reject) => {
//   resolve({
//     name:"mukesh",
//     age:101
//   })
// })
// .then((response)=>{
//   console.log(response)
// })
// .catch((error)=>{
//   console.log(error)
// })

// const p2 = new Promise((resolve, reject) => {
//   reject({
//     meassage:"Nhi hai data"
//   });
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



