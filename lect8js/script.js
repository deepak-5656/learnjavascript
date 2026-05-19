
// events handling
let btn1= document.querySelector("#btn1");

// btn1.onclick = ()=>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// };



// event objects--we get additional infromation of that even attributes
// btn1.onclick = (evnt)=>{
   
//     console.log(evnt);
//     console.log(evnt.type);
//     console.log(evnt.target);
//     console.log(evnt.clientX, evnt.clientY);
// };

// eventlisteners--same as above but widely used  one as even hanling in js
// btn1.addEventListener("click", ()=>{
//     console.log("btn1 was clicked--handler1");
// })
// // we can aceess the event object as in the eventlistents
// btn1.addEventListener("click", (evt)=>{
//     console.log("btn1 was clicked --handler2");
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);

// })

// const handler3 = () =>{  //if we want to delete we create an function object then we will pass callback should be same 
//      console.log("btn1 was clicked--handler3");
// }
// btn1.addEventListener("click", handler3)
// btn1.addEventListener("click", ()=>{
//     console.log("btn1 was clicked--handler4");
// })

// // we can remove event listeners as well
// btn1.removeEventListener("click",handler3);




// practice--create a toggle button that changes the screenn to dark-mode when clicked and light-mode when clicked again
