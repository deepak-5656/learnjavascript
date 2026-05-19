// synchronous programming in js
// executes when prevous code executes one by one
// console.log("one");
// console.log("two");
// console.log("three");



// how asynchronous programing work using timeout it runs paralley with rest of code without sequence
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000) //timeout; 1s=1000ms we will time in ms
// else we can write function in this as well 
// console.log("one");
// setTimeout(()=>{
//     console.log("hello")
// },4000);
// console.log("two");



// callbacks in js

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(1,2,sum); // passing the function sum as argument to another function


// callback hell
//nesting ifelse like that callback hell is formed
// let age =19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }
//     else{
//         console.log("middle");

//     }
// }else{
//     console.log("child");

// }



// example2 for callback hell understandng
// function getdata(dataid,getnextdata){
//    setTimeout(()=>{
//      console.log("data ",dataid);
//      if(getnextdata){
//       getnextdata();

//      }
//    },2000);
// }
// //i need now data1 and data2 then data3 like one abter that
// // see this is what callback but we dont understood nested callback known as callback hell it is difficult to understand and manage
// getdata(1,()=>{
//     getdata(2,()=>{    //this is what an callback function insde the function
//         getdata(3);
//     });    
// });


// to solve the callback hell---here is what promises exist to solve callback hell
// promises

// let promise = new Promise((resolve,reject)=>{   //in js this resolve and reject is like a function in js
//     console.log("i am a promise");
//     // resolve(123);
//     reject("some error");
// })


// let api gives promises okay basic we createing promises like assume api is a function now we  will only handle that promise because we will not create promise we only handle
// function getdata(dataid,getnextdata){
//   return new Promise((resolve,rejefct)=>{
//      setTimeout(()=>{
//      console.log("data ",dataid);
//      resolve("success");            //now after printing data it gives resolves the promises
//      if(getnextdata){
//       getnextdata();

//      }
//    },5000);
//   });
// }



// how to handle the promises

// let getPromise = ()=>{  //this is promise returning instead of api 
//    return new Promise((resolve,reject)=>{    
//     console.log("i am a promise");
//     resolve(123);
//     reject("network error");
// });
// };
// let promise = getPromise();
// // if this promise resovled then we use then() method 
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
// // if it gets the error then we use catch()
// promise.catch((err)=>{
//     console.log("rejected",err);
// });


// what is an promise chain

// function asyncfun1(){  //assums as api CRREATED asyncfunction--which means we use settimeout
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA1");
//             resolve("success");
//         },4000);
//     });
// };

// function asyncfun2(){  
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA2");
//             resolve("success");
//         },4000);
//     });
// };
// // after we return the promise with handling then()--if resolved then only then methdo executes if rejected means then catch executes
// console.log("fetching data1")
// let p1 = asyncfun1();
// p1.then((res)=>{         
//     // console.log(res);
//     console.log("fetching data2");    //this is what then() inside then() known as prommise chaining
//     let p2 = asyncfun2();
//     p2.then((res)=>{
//     // console.log(res);
// });
// });



// now promise chain also--difficult to understand the code if we do chain then onnly here came async-await to make simple the code 
// async-await

// async function hello(){
//     console.log("hello");  //when printing this it returns the promise
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("wether data");
//         resolve(200);
//         },2000);
//     });
// }

// // await api(); await used only async function not outside that
// //so inorder to using then catch method of promise to return the promise of api we use async funtion and await keyword
// async function getwetherdata(){
//     await api();   //1st execute first then only below next line will be execute
//     await api();

// }



//we will use async await for code above we practised

function getdata(dataid,getnextdata){
  return new Promise((resolve,rejefct)=>{
     setTimeout(()=>{
     console.log("data ",dataid);
     resolve("success");            //now after printing data it gives resolves the promises
     if(getnextdata){
      getnextdata();

     }
   },2000);
  });
}

// handling that above ffunction generates the promise using async
// so to call the function(getdata()) we should create the async function because await used only in async function 
async function getalldata(){
    await getdata(1);  //awai tmeans wait for this function to execute it keeps pause rest all below codes
    await getdata(2);
    await getdata(3);
}

// now we reached end from callback hell to promises code to then async-await 
// overall async await iss easy to implement then the call back and promises code so we use async await to get the promises or data from api 