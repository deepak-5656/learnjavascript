

// Doms in js  dom is the object of window object so every thing html can be accessed throw the document properties
// console.log(window.document);
// console.log(document.body)   //body and head also accessed of html ccode in the document
// console.dir(document.body.childNodes[3])

// using this dom in js we can dynamically change in runtime of any text or modigy
// document.body.childNodes[2].innerText="abc";  //it will change the text in run time


// Dom manipulation--how we select the html elements ad give properties and manage the code
// selecting with id 
// let head = document.getElementById("heading");
// console.log(head);

// // selecting with class 
// let heading  = document.getElementsByClassName("headingclass");
// console.log(heading);

// // accessing heml element with tag 

// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);

// // we can do query selector as well it automatically finds all the name like class,id and tag 

// let elements  = document.querySelector("p");  //returns 1st element of paragrapgh tage in html anything we can pass in this lik id or class or tagname 
// console.dir(elements);
// //
// let ele =  document.querySelectorAll("p");   //it selects all the tag present in the code
// console.dir(ele);

// let classele  = document.querySelector(".headingclass");  //accessing the using class name
// console.dir(classele);




//properties of dom manipulation
//  let ele =  document.querySelectorAll("p"); 
//  ele.tagName;
// console.log(ele.innerText);  //returns the text content of the elemet
// console.log(ele.innerHtml);   //returns the html page of the content 

// let heading3 = document.querySelector("h3");
// heading3.innerText = "abcd";   //we can change the text content of html element in runtime
// console.log(heading3);



