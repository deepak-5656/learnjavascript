
// creating an object in js quite simple
//this is a object created in js like normal methods like array in js also treated as object datatype
// const student = {
//     fullname: "deep",
//     marks:86.7,
//     // we can create methods in object as well
//     printmarks:function(){
//         console.log("marks: ",this.marks);
//     },

// };

// how functions and methods written inside objects lots of methods are there

// const employee={
//     caltax1(){
//         console.log("tax rate is 10%");
//     },
//     // caltax2: function(){
//     //     console.log("tax rate")
//     // }
// };


// const karanarjun={
//     salary:50000,
// };
// // if i want to use the employee object as properities to karanarjun objects the i will create prototype for karanarjun 
// karanarjun.__proto__=employee;  //this prototype is reference to an object(empllyee)

 

// classes in js 
// class is templatecode acts as blueprint to make different objects with same class bluprint like manufacturig useses same bluprint in alll branches
// class Toyatocar{
//     // constructor--creation
//     // constructor(){
//     //     console.log("creating new object");
//     // }
//     //parameterized constructors 
//     constructor(brand){
//         console.log("creating new object");
//         this.brand = brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }
// // from that above blue print we create different objects to creat car this what real world example
// let fortuner = new Toyatocar();
// // fortuner.setBrand("fortune");
// let lexus = new Toyatocar("lexus"); 


//  inheritance in js

// class parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{
    
// }
// let obj = new child();


// example 2 inheritance 
// class person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
   
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class Engineer extends person {
//     work(){
//          console.log("solve problems,build something");
//     }
// }
// class Doctor extends person {
//     work(){
//          console.log("treat patients");
//     }
// }

// // when the function in parent and child class as same method then child class will be executed it is called method overriding
// let deep = new Engineer();


// super keyword

// class person{
//     constructor(){
//         // console.log("enter parnet constructor");
//         this.species = "human sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
    
// }

// class Engineer extends person {
//     constructor(branch){
//         super(); //to invoke parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         super.eat();  //if we want to use the parent class method so we use as super keyowrd
//          console.log("solve problems,build something");
//     }
// }


// let engobj = new Engineer("chemicall engineering");



// practise questions 
// 1) you are creating a website for your colleg. crea a class user with 
// 2 properties , name and email . it has also a mthod called viewdata() tht allowsuser to view website data

// const data = "secret information";
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data=",data);
//     }
// }
// let student1 = new User("DEEP","deeabc@gmail.com");
// let student2 = new User("rohit","rohit@gmail.com");




// 2) create a new class called admin which inherits from user. add a new method called editdata to admin that allows it to edit website data
// let data = "this is the ### code";
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data=",data);
//     }
// }

// class admin extends User{
//     constructor(name,email){  //whenever constructor is created in child then we need to take or call parent class constructore okay
//         super(name,email);
//     }
//     editdata(){
//         data = "new #### code";
//     }
// }

// let admin1 = new admin("admin","admin@gmai;.com");




// Error handiling --try-catch

let a =5;
let b=6;
console.log(a);
console.log(b);
console.log(a+b);
// console.log(a+c);    //when error comes in js it stops upto there and dont execut after that 
try{
    console.log(a+c); 
}catch(err){
    console.log(err);
}
console.log(a);