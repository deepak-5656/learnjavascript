

//functions in js


// function myfunction(){
//     console.log("I am learning js");
// }
// myfunction();

// function with parameters
// function myfunction(msg){  //paratmeters
//     console.log(msg);
// }
// myfunction("I love js");  //inside function call known as ---argument


//functiion --to print sum of 2 numbers

// function sum(x, y){
//    let s = x+y;
//     return s;
//     // after return nothing will be executed
     
// }
// let val = sum(3,4);
// console.log(val);

// arraow functions --easier then normal function to write
// used mainly in modern js
// const sum = (a,b) =>{
//     console.log(a+b);
// };

 

// practice quest
// 1)---create a function using keyword that takes a string as an argument and returns the number of vowels in the string 

// function countVowels(str){
//     let count =0;
//     for(let char of str){
//         if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }

//     console.log(count);
// }



// forEach loop in arrays  

// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })


//practice quest--print the square of all the numbers in array using for each loop 

// let nums = [2,3,4,55,6];

// let calsquare = (num)=>{
//     console.log(num*num);
// };
// nums.forEach(calsquare);



// some array methods-->map (similar like foreach)

// let nums = [1,2,3,5,6];
// nums.map((val)=>{
//     console.log(val);
// });
// // also we can create newarray like copy of nums array 
// let newarr = nums.map((val)=>{
//     return val;
// });
// console.log(newarr);


// filter method of array methods

// let arr = [1,2,3,4,5,6,7];
// let evenarr = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenarr);

// reduce methods

// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// practise question
// we are given array of marks.filter the marks of student scored 90+;
// let marks = [97,84,56,97,34,36,100];

// let toppers = marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);


// create an array from user input

let n = prompt("enter a number: ");

let arr = [];
for(let i=0; i<n; i++){
    arr[i] = i;
}
console.log(arr);