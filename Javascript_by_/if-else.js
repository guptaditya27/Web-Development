const prompt = require('prompt-sync')();
let age = Number(prompt('Enter your age: '));

if (isNaN(age) || age < 0) {
  console.log('⚠️ Invalid input. Please enter a valid age.');
} else if (age >= 18) {
  console.log('✅ You are eligible to vote.');
} else {
  console.log('❌ You are not eligible to vote yet.');
}

let a = Number(prompt('Enter your age: '));
if (isNaN(a) || a < 0) {
  console.log('Enter valid age Invlaid Ip recived !!');
} else if (a < 15) {
  console.log('Kid');
} else if (a <= 35) {
  console.log('Adult');
} else {
  console.log('Buddha');
}
