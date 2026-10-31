// const jsobj={
//     name:"Aaditya",
//     age:"20",
//     add:"Greater noida",
//     c:undefined,
// }

// // convert js obj to json 
// const jsonFormat=JSON.stringify(jsobj);
// console.log(jsonFormat);


const jsonobj=`{
    "name":"Rohit",
    "age":20,
    "address":"Greater Noida"
}` // its just js obj currenctly we have to convert it to json ` jsobj in json format  ` becomes json 
// json is in string only

// convert it to js object

const jsobj=JSON.parse(jsonobj);
console.log(jsobj);