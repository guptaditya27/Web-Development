// file contaning all the codes and problems solutions related to functions in javascrpt.
function Greeting(){
    console.log("Allha ka Sasriyall\n baheguru ji ki balle balle \n Jesus ki jay Ho !!")
}
Greeting();

let hlw=function(){
    console.log("hello !!");
}

// let hllw=()=>{
//     console.log("I am fat arrow fn");
// }

// parameters and arguments
function dance(v1){
    console.log(`${v1} naach rhah hai !!`);
}

dance("ghoda");
dance("kutta");
dance("hathi");
dance("gadha");

// parameter vs argument

function sum(v1,v2){
    console.log(`${v1}+${v2} => ${v1+v2}`);
}
sum(10,20);

// default parameter 
function Greet(v1="mr",v2="unknown"){
    console.log(`Good Morning ${v1} ${v2}`);
}
Greet();
Greet("mrs");
Greet("mrs","ANITA");
Greet("mr","Ram");


// Rest operator array as argument

function abcd(v1,... val){
    console.log(val);
}
abcd("raghu","mein",'Hu','gian');
// v1=raghu ND VAL HAVING ARray.

// return keyword 

function ab(val){
    return val;
}
let var1=ab("raj");
let var2=ab(10);
console.log("var1 ="+var1+"\n var2= "+var2);

// first class function

// function can be passed as values and as argm of fn also 
function abf(val){
    val();
}
abf(function(){
    console.log("first class function !!");
});

// Higher order Functions 

function Hlw(){
    return function(){
        console.log("Function inside fn return !!");
    };
}
Hlw()();

// closures
function fn1(){
    let vark=12;
    return function(){
        console.log(vark);
    };
}
fn1()();

// lexical scoping of variables and functions.
function fn0(){
    let vari="adi";
    function fn2(){
        let varj="gup";
        function fn3(){
            let varl="ta ji";
        }
    }
}
