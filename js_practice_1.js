// higher and call back functions:---

// `
// // first class function -->
// Can be stored as a value in a variable
// Can be returned by another function
// Can be passed as a function's argument
// Can be stored in an array, stack, or queue
// Can have its own properties and methods.
// `

// `
// // pure function -->
// pure function always returns the same result if the same arguments are passed. 
// It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.
// `

// ` 
// // closures -->
// the inner function has access to the outer function variable.
// Access to its own scope.
// Access to the variables of the outer function.
// Access to the global variables.
// `

// `
// // higher order function -->
// accepts one or more functions as arguments and returns a function as a result.
// forEach,setTimeout, map, CompactMap, flatMap, filter, reduce, sort, and sorted
// `

// `
// // callback function --> 
// function passed into another function as a parameter.
// It is useful to develop an asynchronous JavaScript code.
// `

// function xyz(a,param = function (m){return m**2}){
//     return param(a);
// }
// let my = xyz(7)
// console.log(my)

// my = xyz(6,myfunction)
// console.log(my)

// function myfunction(m){
//     return m**2
// }

// closures :--

// function myfunc(){
//     let b = 10;
//     return function fun(z){
//         return `return by the function fun ${z} and ${b}`
//     }(11)
// }
// var me = myfunc()
// console.log(me)


// const api_url = "https://jsonplaceholder.typicode.com/todos";
// async function fetchdata(url){
//     await fetch(url).then((response)=>response.json()).then((data)=>{data}).catch((err)=>console.log(err))
// }
// let mydata = fetchdata(api_url)
// console.log(mydata)

// Promise ------->

// let mypromise =  new Promise((response,reject)=>{
//     let error = false;
//     if(!error){
//         response("this is my true response")
//     }else{
//         reject("sorry some error are there")
//     }
// })
// console.log(mypromise.then((result)=>{console.log(result)}).catch((err)=>{console.log(err)}))

 
// Memoization in js --->
// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and 
// returning the result from it.

// let sum = 0;
// const calc =(n)=>{
//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum;
// }
// const memoize = (fun)=>{
//     let cache={};
//     return function(...args){
//         let n = args[0]
//         if(n in cache){
//             console.log("cache")
//             return cache[n];
//         }else{
//             console.log("calculating first time");
//             let result = fun(n)
//             cache[n] = result;
//             return result;
//         }
//     }
// }
// console.time()
// const efficient = memoize(calc);
// console.log(efficient(5));
// console.timeEnd()