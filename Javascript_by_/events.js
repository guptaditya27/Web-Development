// function handleclick(){
//     const element=document.getElementById("first")
//     element.textContent="Strike is Coming"
//     // DOM Ki help se change kr rhe hai by geeting element using id.
//     // resposible for performing action against triggerred event.

// }

// Another mtd to do same
// const ele = document.getElementById('first');
// ele.onclick = function handleclick() {
//   ele.textContent = 'Ram Ram Ji ';
// };
// but redclaring onclick can override prev fn defn so we dont use this that much

// const element = document.getElementById('first');

// if (element) {
//   element.addEventListener('click', () => {
//     element.textContent = 'RAM RAM JI ';
//   });

//   element.addEventListener('click', () => {
//     element.style.backgroundColor = 'brown';
//   });
// }

// Now multiple transfromation can be applied on a same elemnt at single event occurence no overriding will occur.

// Explicitely adding eventlistner on child1 only
// const child1 = document.getElementById('child1');
// child1.addEventListener('click', () => {
//   child1.textContent = 'I Am CLicked';
// });

// loop lga ke har children pe event listener lga diya
// const parent = document.getElementById('parent');
// for (let child of parent.children) {
//   child.addEventListener('click', () => {
//     child.textContent = 'I Am Clicked';
//   });
// }

// BUBBILING MORE OPTIMISED APPCH

// first try by applying event lsiteners indep on all three divs gp par child
// const gp = document.getElementById('grandparent');
// gp.addEventListener('click', () => {
//   console.log('grapndaprent is clicked');
// });

// const parent = document.getElementById('parent');
// parent.addEventListener('click', () => {
//   console.log('Parent is clicked');
// });

// const child = document.getElementById('child');
// child.addEventListener('click', () => {
//   console.log('child is called');
// });

// child pe click krne pe teeno evenets divs ke event listentener trigger ho rhe hai op
//child is called
//events.js:54 Parent is clicked
//events.js:49 grapndaprent is clicked

// can change ordereing by pasing args as true

// const gp = document.getElementById('grandparent');
// gp.addEventListener('click', () => {
//   console.log('grapndaprent is clicked');
// },true);

// const parent = document.getElementById('parent');
// parent.addEventListener('click', () => {
//   console.log('Parent is clicked');
// },true);

// const child = document.getElementById('child');
// child.addEventListener('click', () => {
//   console.log('child is called');
// },true);

// Now the new order on clicking the child is :-
// true denotes ki capture phase mein hi event ke action ko perform kr do and then target phase pe jao and buble phase mein jab bapas aayega tb kuch nhi krega khali laut jyega upar .

// grapndaprent is clicked
// events.js:78 Parent is clicked
// events.js:83 child is called

// const gp = document.getElementById('grandparent');
// gp.addEventListener(
//   'click',
//   () => {
//     console.log('grapndaprent is clicked');
//   },
//   true
// );

// const parent = document.getElementById('parent');
// parent.addEventListener(
//   'click',
//   () => {
//     console.log('Parent is clicked');
//   },
//   false
// );

// const child = document.getElementById('child');
// child.addEventListener(
//   'click',
//   () => {
//     console.log('child is called');
//   },
//   true
// );

// op expected is:- on clicking child
// grapndaprent is clicked
// events.js:113 child is called
// events.js:104 Parent is clicked

// kyuki parent ka capturepahse = false tha isliye uska event bubbling phase mein execute huaaa..

// Event ka  object returned by event Listener
// const gp = document.getElementById('grandparent');
// gp.addEventListener(
//   'click',
//   (e) => {
//     console.log(e);
//     console.log('grapndaprent is clicked');
//   },
//   false
// );

// const parent = document.getElementById('parent');
// parent.addEventListener(
//   'click',
//   () => {
//     console.log('Parent is clicked');
//   },
//   false
// );

// const child = document.getElementById('child');
// child.addEventListener(
//   'click',
//   (e) => {
//     console.log('child is called');
//     e.stopPropagation(); // bubbling rok deta hai ab parent and grandparent ke events nhi chlege .

//     // e.target() mujhye bta deta hai ki iss event ko kisne trigger kiy hai konse elemnt ke wajah se triggger hua hai event e
//   },
//   false
// );

/*
    event ke object ke andar all the details related to event rehti hai khaa click kliya konsa event hai etc..

*/

// Kya single event listener on parent se mujhe parent ko pta chl skta hai konse child pe event trigger hua hai
// haa e.target ki help se

/*
    Replacement of this approach 
// loop lga ke har children pe event listener lga diya
// const parent = document.getElementById('parent');
// for (let child of parent.children) {
//   child.addEventListener('click', () => {
//     child.textContent = 'I Am Clicked';
//   });
// }
*/

// const parent = document.getElementById('parent');
// parent.addEventListener('click', (e) => {
//   e.target.textContent = 'I am Clicked';

// });

// removing event listener

const parent = document.getElementById('parent');
function handleClick(e){
    e.target.textContent="Iam Clicked";
    parent.removeEventListener('click', handleClick);
    // this gurantees ki event ek baar to chlega hi kam se kam.

}
parent.addEventListener('click',handleClick);

// dono mein same event ka refn ja rha hai to same memory ko point krege and will work fine.