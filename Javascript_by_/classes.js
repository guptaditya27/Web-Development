class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`hi  I am ${this.name}`);
    }
}

const person1=new person("Rohit",20);
person1.sayHi();

console.log(person1) // fn nhi print hota hai .

const objj={
    name:"Rohit",
    age:20,
    greet:function(){
        console.log(`Hi i am ${this.name}`)
    }
}

console.log(objj) // fn ko bhi print krta hai yeh 

// why? this diff behv?
//kyuki  person ka prototype banta hai 
// person.prototype mein fn rehta hai 
// taaki jitne bhi objects bnee to sab iss fn ko access and use kr pyee 

// in case of classes this points first an empty object and then constructor se value assign hoti hai 
// jb bhi fn chalana hot ahai to 
// obj1.__proto__ ---> person.prototype mein jayega fn ko dhodne then fn chlega 
// obj ke body mein fn hote hi nhi hai jo obj class ke bnte hai .

// DRY follow krne ke liye yeh hota hai .

// sab kuch object ke andar hi convert ho rha hai 

// variables kyu nhi rkhe prototype mein kyuki woh object specific hai har object ke liye alag value .


// inheritence 
class Customer extends person{
    constructor(name,age, account,balance){
        super(name,age);
        this.account=account;
        this.balance=balance;
    }
    checkBalance(){
        return this.balance;
    }
}

// inheritence in objects ,,,
const obj2=Object.create(objj);