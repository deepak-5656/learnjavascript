
console.log("Apna college");
console.log("I am Deepak");

//variables in js

fullname = "Tont Stark";
age =23;
x=null;
y = undefined;
isfollow =  false;
//we can store any datatype value to variable it is dynamic typed allcoates the datatype
isfollow=23;
console.log(isfollow  );

//naming conventions
myname = "deep";
_hello = 23;
$hello = 23;


// keyword in valrialble

let mark =400;   //it can updated if we use the let but cannot be redeclared
let price = 1000;
const  k =4;      //this cannot be updated so we use const
console.log(price);

{ 
    let a =5;
    console.log(a);

}
//datatypes 
// primitive datatypes
let name = "deepak";
//non primititve datatypes this are known as objects and functions in js 
// we write  this in value pair 
const student ={
    name:"deep",
    roll:34,
    age:19
};
// if we want to update the values of objects
student["age"] = student["age"]+1;
console.log(student.age);
console.log(student["roll"]);



//practise questions
// create a const object called product to store infromation shown in the picture 

console.log("--------------------");

const product = {
    title:"Ball pen",
    rating:4,
    offer:5,
    price:70
};
console.log(product);


const profile={
    name:"DEEPAK",
    post:34,
    followers:35,
    following:23,
    bio:"hello i am deepak"

};
console.log(profile);