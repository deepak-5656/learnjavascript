
// arrays in js
// already we have objects in js then why arrays
// let marks = {  //this is not right method rather we store in arrays rather then using objects
//     stud1:89,
//     stud2:78,
// };


//arrays

// let marks = [96,35,34,25];
// console.log(marks);
// console.log(marks.length);  //property of array

// let heroes = ["ironman","thor","hulk","spiderman","antman"];
// // printing all elements of arrys 
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }
// // we can use for-of and for-in loop as well to print the array eleents
// for(let hero of heroes){
//     console.log(hero);
// }


// practice question--for givern array marks find the average marks of entire class

// let arr = [85,97,44,37,76,60];
// let sum=0;

// for(let val of arr){
//     sum = sum+val;
// }
// let avg = sum/arr.length;
// console.log("Avg marks of the class = ",avg);


//practice quest---given array with prices of item and have offer of 10 percent off on them. change the array to store final price after applying offer

// let items = [250,645,300,900,50];
// let i=0;
// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i]-offer;
//     console.log(`val after offer = ${items[i]}`);
//     i++;
// }

// Array methods in js

// let fooditems = ["onion","tommato","apple","litchi"];
// fooditems.push("chips","burger");  //used to push at end of the array changes the original array itslef
// console.log(fooditems);
// fooditems.pop();
// console.log(fooditems);

// console.log(fooditems.toString());  //coverts entire array to the string 

// let mar = ["thor","spiderman","ironman"];
// let dc = ["superman","batman"];
// let heroes = mar.concat(dc);  //not changes original array it creates new array
// console.log(heroes);
// mar.unshift("antman");  //adds the element at start;
// console.log(mar);
// mar.shift();
// console.log(mar);
// console.log(mar.slice(0,2));


