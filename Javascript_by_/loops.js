//1. 1->10 using various loops

for(let i=1;i<=10;i++){
    console.log(i);
}
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
let j=12;
do{
    console.log(j);
    j++;
}
while(j<10)

// 2. No from 10->1 decn loop
for(let i=20;i>0;i--)
    console.log(i);

let w=10;
while(w){
    if(w==0)
        break;
    console.log(w);
    w--;
}


//3. even No 1->20 
for(let i=0;i<=20;i+=2){
    if( i==0)
        continue;
    console.log(i);
}

//4. 5 ka table in js.
for(let i=0;i<=10;i++){
    if(i==0)
        continue;
    console.log("5 X "+ i+" -> "+5*i);
}

//5/ sum of 1->100;
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log("sum of 100 Natural No :- "+sum);

// all No b/n 1->50 div by 3;

let Var=0;
while(Var<=50){
    if(Var==0){
        Var+=3;

        continue;
    }
    
    console.log(Var);
    Var+=3;
}

// ask input from user.
let Num=prompt("Enter a NUmber");
for(let i=1;i<=Num;i++){
    i%2===0?console.log(`${i} is Even`):console.log(`${i} is Odd`);
}
// count No of digits in NUmber take input from users;
let num=prompt("Enter Number:- ");
let count=0;
// its js Not c++ so auto floee->int nahi hoga do it exlicitely 
let nuM=num;
while(num>0){
    count++;
    num=Math.floor(num/10);


}
console.log(`Total Digits NUmber ${nuM} are :- ${count} `);