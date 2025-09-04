let sum=0;
function Total_score(...scores){
    scores.forEach(function(val){
        sum+=val;
    })
    return sum;
}
console.log(Total_score(10,11,12,36,25));


// fn returning no value returns undefined
function fn(){
    return;
}
console.log(fn());
