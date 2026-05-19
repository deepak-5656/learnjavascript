
// how basic api is called
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const factpara = document.querySelector("#fact");
const btn =document.querySelector("#btn");
// .use fetch method for api
// let promise = fetch(URL);  //fectch always returns promise only
// console.log(promise);


//now we use api execution using async method

// const getFacts = async()=>{
//     console.log("getting data.....");
//     let response =await fetch(URL);
//     console.log(response);    //response will be in json formate
//     let data=await response.json();  //to get parse the data to json  formate we write ike this using json mentod
//      console.log(data[0]);
    //  factpara.innerText=data;
// };
// // using button when click it generates the facts 
// btn.addEventListener("click",getFacts);


// same above one is done in async we can do code using promise chaining allso see this
// this code is not readable to understand so we use above async method for api fetch
// function getfacts(){
//     fetch(URL).then((response)=>{
//         return response.json();

//     }).then((data)=>{
//         console.log(data);
//         factpara.innerText=data[8].id;
//     });
// }

// btn.addEventListener("click",getfacts);
