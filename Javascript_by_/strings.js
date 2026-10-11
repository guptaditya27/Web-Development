// string
// const str1 = 'Aditya';
// const str2 = 'raju';
// const str3 = `Capgemini is coming`; // most modern way to create string

// let str = 'jai shree ram';
// console.log(typeof str);
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// // all are of datatyoe string

// const str4=`strike is
// coming next
// year ` ; // yeh jis format mein ip diya isey mein print hoga isliye mordenest way .

// console.log(str4);
// // // error dega aise likhna
// // const str5="aditya
// // Gupta "
// const day=18
// const str5=`strike is
// coming next ${day} of
// year ` ; // %{variable} gets replaced by variable value
// console.log(str5)

const str = `Hello Coder Army`;
// console.log(str.charAt(10)); // return element at index i.
// console.log(str.concat('iam aditya'));
// // concat at end and return appended string.
// console.log(str); // original string remains as it is as strings are immutable

// console.log(str.length);
// console.log(str.endsWith('samy')); // false
// // agr string search string se end horhi hogi to true otherwise false.

// console.log(str[0]);
// // strings are immmtable .

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// // first letter lowercase of each word
// console.log(str.toLocaleUpperCase());
// // first letter uppercase of eachword
// console.log(str.toLowerCase());
// // lowercase string entirely
// // purani string mein kuch bhi chnage nhi kr skte yeh fns nyii string bna ke return krte hai usey.

// let uppr = str.toUpperCase(); // new string bnegi uppr.
// console.log(uppr);

// // finding substrings
// console.log(str.indexOf('Coder'));
// // indexOf returns the starting index, or -1 if the substring is not present.

// function sliceString(string, start, end) {
//   return string.slice(start, end);
// }

// console.log(str.slice(6, 11)); // Built-in slice() returns "Coder"; end index is excluded.
// console.log(sliceString(str, 6, 11)); // The helper uses the same built-in slice() method.


// console.log(str.slice(3)) // from index 3 string slice ho jyegi .

// console.log(str.slice(-4))
// // -4 index se slicing shuru hogi till -1 last of string tk slice hojyegi // Army ayega op mein.

// console.log(str.substring(2,5))
// // No -ve indexing markdown in substring mtd 
// // otherwise works exactly like slice fn
// let str1="rohit"
// const str2=" negi"
// console.log(str1+str2) // + concatinates two strings and returns them 

// str3=str1+str2;
// console.log(str3)


// console.log(str1.concat(str2))

// console.log(24+"rohit") // just concatinates by doing type coercion of 24 to string .
// console.log(24+"rohit"+10) // just concatinates by doing type coercion of 24, 10 to string .

// console.log(24+30+"rohit")
// // op 54rohit
// //left to right scope resolution hota hai 
// // 54 conv to string and concat with rohit

// str1=(str1.replace('it','an'))
// console.log(str1) 
// // error aarha yeh nhi kr skta mein 
// // agr const se declare kiya hai to nhi kr skta but agr let se declare kkiya hai string ko to replace hojyega 

// // repplaceall()  replaces all the instances of the substr/ word given


const user=" Rohit  Negi  ";
console.log(user.trim()) // removes leading spaces from start and end .
// .trimstart(),.trimend() expilicitely removing from start and end only

// splitting string into array
const names="Rohit,Mohit,Neeraj,Suraj,Ritik";
name_list=(names.split(','))
console.log(name_list)
// we can provide splitting with criteria in fn only .

