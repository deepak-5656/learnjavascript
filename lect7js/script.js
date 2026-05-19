// let div = document.querySelector("div");
// console.log(div);

// attribute properties of dom we can access the attribute of particular element of html
// let val = div.getAttribute("id");   //value of that id will be return
// console.log(val);
// let name = div.getAttribute("name");   //i can get that div elements name attruibutes value like that i can use this method or functionaliteis
// console.log(name);

// // set attribute
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// // to access the styling of div element of html using javascript
// div.style.backgroundColor="purple";
// div.style.fontSize="27px";


//  inserting the element 
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// console.log(newbtn);
// // if i want to add the element inside the div at last
// let div = document.querySelector("div");
// // div.append(newbtn);
// // div.prepend(newbtn); 
// // div.before(newbtn)  //outside of div before
// div.after(newbtn);  //outside of div prints which is afrer below

// //if i want to create new heading add at the top of any element in js
// let heading = document.createElement("h1");
// heading.innerText = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(heading);


// // how i can delete the htmp elements like paragrage i can remove
// let para = document.querySelector("p");
// para.remove();



// practice--do in javascript not in html okay
// create a new button element.give it a text "click me",background color of red and text color of white ---insert the button as the first element inside the body tag
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);
