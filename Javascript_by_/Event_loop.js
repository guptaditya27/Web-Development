/* 
    Js is single threaded synchronous Language 
    single threaded - ek task hi ek time pe hoga no parallel taske in bag or parrel processes to run
    synchronous ka mtlb usey order mein hoga jisme likha gya hai fifo follow hoga 

*/

// console.log('first');
// let sum=0;
// for(let i=0;i<10000000;i++){
//     sum+=i;
// }
// console.log(sum);
// console.log("last");

// setTimeout counting code:-
// console.log('hello ji');
// setTimeout(() => {
//   console.log('Time Out Executed');
// }, 5000);
// console.log('I am the End');
/*
    Agar single threaded hai to op aisa ky aaya js ka kon count kr rha hai yeh 5000 ms hai last bala phke kaise chl gya ..
    OUTPUT--
    
    hello ji
    I am the End
    Time Out Executed

    this behv is asynchronous 

*/

// Another asynchronous code
// console.log('hello ji');
// setTimeout(()=>{
//     console.log("Time Out 1 Executed")
// },6000)
// setTimeout(() => {
//   console.log('Time Out Executed 2');
// }, 5000);
// console.log('I am the End');
/*
    output:- 
    hello ji
    I am the End
    Time Out Executed 2
    Time Out 1 Executed

    2 phle chala useke 1 sec ke  badd 1 chala .
    and Event Listener applied on apps bhi ko js handle nhi krta
    js yeh sab nhi handle krta web api's handle all sync async functionalities.
*/

/*
    each line of the code goes into call stack.
    and specifcally in the global execution context of the 
    call stack .

    Js never waits for any statement jo dikhta hai execute and aage badho to yeh settimeout kaise chala phir 

    using Web api 
    How?


*/


/*
    WEB API TO INTRODUCE ASYNCHRONUS FUNCTIONALITY IN JS 
    api IS JUST A FN CALL.
    let arr=[100,20,30];
    arr.push(10);
    push is a fn call also its mtd of array class.
    arr.map(x=>x*10);

    function hello(){
        console.log("hello");
    }

    hello(); // api is just fn call
    window object gets us web api call by browser and handles these dom setTimeout fetch  location localstorage time etc .. functionalities 

    javascript is single threaded but browser is multithreaded 
    setitmeout etc.. ko js browser ko de deta hai  callback and fn timeout lga deta hai 
    browser ke pass timer hota hai 
    
    js block nhi krta koi bhi process 
    browser ke pss callback queue hoti hai usme saari iss tarah ki processes stored rehti hai jaise timer poora hota hai ya i/o perform ho jata hai to chal jati hai that respective process..

    yhaa pe Event loop ka role aata hai 
    event loop checks whether there are some calls in callbackqueue or not 
    if yes then checks the call stack call stack should be empty then event loop chlega most imp condition for event loop to work 
    khali kyu chaiye call stack 
    taaki predictable op aaye isliye poora stack khali chaiye .

    webapi ke pass poora dom tree build rehta hai already to document.get waale sare excn  browser dekhta hai 

    eventloop--> checks callbackstack --> if some call  present --> checks call stack --> if empty --> pushes callbackfn() onto call stack --> in call stack js executes the callback fn .. 

    aise button wala fn kaam kr rha hai ...

    Microtak queue bhi hoti hai uske baaare mein bhi padhna 
    like konse call back microtask mein jate hai and priority konsi queue ki jada hoti hai ..
*/


