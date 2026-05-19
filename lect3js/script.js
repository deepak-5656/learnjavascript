

//for loop
// console.log("loops and strings");


// for(let i=0; i<5; i++){
//     console.log("loops and strings");

// }

//to calculate sum of 1 to 5
// let sum=0;
// for(let i=1; i<=5; i++){
//     sum = sum +i;
// }
// console.log(sum);

// while loops
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

//do while loop
// it dont check condition first evern if it is false executes one time 
// let i=20;
// do{
//     console.log("apna deepak");
//     i++;
// }while(i<=10);



// for-of loop in js 
// let str = "Apnadeepak";

// let size=0;
// for(let i of str){   //iterator->gets each character of a string
//     console.log("i=",i);
//     size++;
// }
// console.log("string size= ",size);

// for-in loop in js

// let student = {
//     name:"rahul",
//     age:20,
//     mark: 87
// };
// for(let i in student){
//     console.log("key-",i," value=",student[i]);
// }


//practice question
// Qs--print all even numbers from 1 to 100 

// for(let count=1; count<=100; count++){
//     if(count%2===0){
//         console.log("Even numbers are: ",count);
//     }
// }


// Q2--creae a game where you start with any random game under,ask the user to keep guessing the game number unitl the user enters the correct  value 
// let gameNum =25;
// let number = prompt("Guess the number to search: ");
// console.log(number);

// while(number!= gameNum){
//     number =  prompt("You entered wrong numberGuess the number again: ");
// }
// console.log("Congratulations, you entered the right number!");



//strings in js
// let str = "Deepak";
// let str2 = 'workman';

// printing the string
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// // other way to make strings --Template Literals(this is a special type of string)
// let sentence = `This is a template literal`;
// console.log(sentence);

// let obj = {
//     item:"pen",
//     price:10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);


// string methods in js

// let str = "Deepak";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let str2 = "    Apna college JS  ";
// console.log(str2.trim());  //starting and last spaces are removed not at centers or middle not removes
// let st = "343432";
// console.log(st.slice(1,3));
// let s = "hello";
// console.log(s.replace("h","d"));


// practise question

let str = prompt("Enter you name to generate username: ");

let res = `${"@"}${str}34`;
console.log(res);