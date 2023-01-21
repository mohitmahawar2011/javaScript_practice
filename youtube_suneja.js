/*
Q -> In javascript everything is an object ------
    Nearly everything in JavaScript is an object other than six things that are not objects 
    which are — null , undefined , strings, numbers, boolean, and symbols. These are called primitive values or primitive types.
*/

// lec -1
// rest and spread operation

// rest --  
// function rest(a,b,...input){
//     c = a+b;
//     console.log(c);
//     console.log(input);
// } 
// rest(4,6,2,5,7,8);


// spread--
// function spread(a,b,c){
//     console.log(a+b+c);
// }
// let mydata = [2,4,6];
// let youdata = [6,8,2];

// spread(...youdata);


// lec -2
// callback,async and await,promises

// const data1 =[{
//     name:"mohit mahawar",
//     profile:"software developer"
// },
// {
//     name:"ravi malviya",
//     profile:"frontend developer"
// }]
// function getdata(){
//     setTimeout(()=>{
//         let output="";
//         data1.forEach((value,index)=>{
//             output+=`<li>${value.name} & ${value.profile}</li>`
//         })
//         document.getElementById("main").innerHTML = output;
//     },2000);
// }

// function createdata(newdata,callback){
//     setTimeout(()=>{
//         data1.push(newdata);
//         callback()
//     // },1000)
//     },3000)
// }


// // getdata()
// createdata({name:"chirag",profile:"cloud developer"},getdata)


// promises--

// const data1 =[{
//     name:"mohit mahawar",
//     profile:"software developer"
// },
// {
//     name:"ravi malviya",
//     profile:"frontend developer"
// }]
// function getdata(){
//     setTimeout(()=>{
//         let output="";
//         data1.forEach((value,index)=>{
//             output+=`<li>${value.name} & ${value.profile}</li>`
//         })
//         document.getElementById("main").innerHTML = output;
//     },2000);
// }

// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             data1.push(newdata);
//             let error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("kuch sahi nhi hai...")
//             }
//         },3000);
//     })
// }

// // createdata({name:"chirag",profile:"cloud developer"}).then(()=>{console.log(getdata)}).catch((err)=>{console.log(err)})


// async function start(){
//     await createdata({name:"chirag",profile:"cloud developer"})
//     getdata();
// }
// start();



// lec -3
// closures

// var sum = function(a){
//     let b = 10
//     console.log(`first ${a}`)
//     return function(c){
//         return a+b+c;
//     }
// }
// total = sum(5)
// console.log(total(9));


// var sum = function(a){
//     let b = 10
//     console.log(`first ${a}`)
//     return {first:function(d){
//         return d+b;
//     },
//     second:function(c){
//         return a+b+c;
//     }
// }
// }
// total = sum(5)
// // console.log(total.first(9));
// console.log(total.second(6))


// lec -4
// call,apply,bind methods
// Call is a function that helps you change the context of the invoking function.

// let userDetails1 = {
//     name:"mohit",
//     age : 21,
//     profile:"software engineer",
//     printDetails:function(){
//         console.log(this.name)
//     }
// }
// userDetails1.printDetails();

// let userDetails2 = {
//     name:"ravi",
//     profile:"frontend developer",
//     // printDetails:function(){
//     //     console.log(this.name);
//     // }
// }

// userDetails1.printDetails.call(userDetails2);



// let userDetails1 = {
//     name:"mohit",
//     age : 21,
//     profile:"software engineer",
    
// }
// let printDetails=function(city,country){
//     console.log(this.name +" "+city+" "+country);
// }
// // printDetails.call(userDetails1,"jaipur","india");

// // printDetails.apply(userDetails1,["Jaipur","India"])

// let user1 = printDetails.bind(userDetails1,"Jaipur","india")
// user1()

// let userDetails2 = {
//     name:"ravi",
//     profile:"frontend developer",
// }
// // printDetails.call(userDetails2,"pali","india");

// // printDetails.apply(userDetails1,["Palli","India"])

// let user2 = printDetails.bind(userDetails2,"Pali","india")
// user2()


// lec -5
// forEach,filter,map,reduce,sort

// const data = [{company:"infosys",bond:12,salary:360000,inhand:25000},
//             {company:"accenture",bond:16,salary:450000,inhand:32000},
//             {company:"TCS",bond:11,salary:330000,inhand:24000}]
// const arr = [12,25,87,54,35,23,66,85,34]
// normal for --
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// forEach --
// data.forEach((val,index)=>{
//     console.log(val.company)
// })

// filter --
// arr.filter((val)=>{if(val>50){
//     console.log(val)
// }})

// map --
// let mapdata = data.map((val)=>{
//     return `${val.company} and ${val.salary}`
// })
// console.log(mapdata);

// reduce --
// let count = 0
// let reduce_data = arr.reduce((total,val)=>{
//     if(val < 30){
//         total += val;
//     }
//     return total;
// },2)
// console.log(reduce_data);


// // sort --
// const sort_data = data.sort((c1,c2)=>{
//     if(c1.salary<c2.salary){
//         return 1
//     }
//     else{
//         return -1
//     }
// })

// console.log(sort_data);


// lec -6
// undefined , not define --

// console.log(a);
// var a = 10;
// let c;
// console.log(c);
// console.log(b);


// lec -7
// prototype ,and prototypal inheritance

// object prototype ---
// const obj = {
//     name:"mohit mahawar",
//     getname:function(){
//         return this.name
//     },
//     getroll:function(){
//         return this.roll
//     }
// }
// console.log(obj.getroll());

// const obj2 = {
//     roll :101,
//     // name:"pawan",
//     __proto__:obj,
//     getclass:function(){
//         return this.myclass
//     }

// }

// console.log(obj2.getroll())

// const obj3 = {
//     myclass:"IT",
//     __proto__ : obj2
// }
// console.log(obj3.getname())


// // other method to create prototype ---
// function myPrototype(name){
//     this.name = name;
// }
// myPrototype.prototype = obj;
// const myproto = new myPrototype("rahul sharma");
// console.log(myproto);


// array prototype --
// Array.prototype.show = function(){
//     return `Array : ${this}`;
// }
// const cities = ["jaipur","delhi"]
// console.log(cities.show())


// Array.prototype.convertintoObject = function(){
//     let newObj = {}
//     this.forEach((element)=>{
//         newObj[element] = element+"!";
//     })
//     return newObj;
// }
// console.log(cities.convertintoObject())



// lec -8 --
// Map, Set, weakSet, weakMap --

// set --> it contains only unique values
// object constructor -- {11,22,33}

// let myArray = [11,22,33,44]
// let obj = new Set(myArray);
// console.log(obj);
// obj.add(56);
// obj.add(67);
// console.log(obj);
// obj.delete(56);
// console.log(obj);
// let obj2 = {name:"mohit"}
// obj.add(obj2);
// console.log(obj);
// console.log(obj.has(obj2))
// obj.add({roll:101})
// console.log(obj);
// console.log(obj.has({name:101}))

// for(let new1 of obj){
//     console.log(new1)
// }

// Map --> (key -> values)-- {key -> value, key -> value}

// let myMap = new Map([["a1","mohit"],["a2","ravi"],["a3","pawan"]]);
// myMap.set("a2","Ajay")
// console.log(myMap)
// console.log(myMap.get("a1"))
// myMap.delete("a3");
// console.log(myMap)

// myMap.forEach((element,val)=>{
//     console.log(element+"-"+val);
// })


// WeakSet --> only store object 
// it can not be interated --

// let ws = new WeakSet();
// var ob1 = {name:"mohit"};
// var ob2 = {};
// ws.add(ob1);
// ws.add(ob2);
// console.log(ws.has(ob2))
// ws.delete(ob2)
// console.log(ws.has(ob2))
// console.log(ws)



// WeakMap -->only store object 
// it can not be interated --

// let wm = new WeakMap();
// var ob1 = {name:"krishna"};
// var ob2 = {};
// wm.set(ob1,"shyam");
// wm.set(ob2,"vishnu");
// console.log(wm.get(ob1))
// console.log(wm)
// console.log(wm.has(ob1))
// wm.delete(ob2)
// console.log(wm)


// lec -9 --
// Hoisting --

// hoisting correct -----> var,function
// console.log(myfunction(10));
// console.log(a);
// var a = 10;
// function myfunction(c){
//     let b = 5;
//     return b*c;
// }

// Hoisting create issue -->
// console.log(myfunc);
// myfunc = function(){
//     return "this is hoisting function"
// }

// console.log(myshow("mohit"));
// myshow = (a)=>{
//     return "hello! "+a
// }

// console.log(al);  /* -> undefined */
// console.log(bl);
// console.log(cl);
// var al;  
// let bl = 12;
// const cl = 5;


// lec -10 ---

// event bubbling and event capturing  and stopPropagation and stopImmediatePropagation   ---->
// without using true event bubbling child to parent 
// using true means event capturing parent to child
// let like = document.getElementById("likebutton").addEventListener("click",()=>{
//     console.log("like me")
// }) //true
// let like1 = document.getElementById("like1").addEventListener("click",()=>{
//     console.log("like1")
// }) //true
// let like2 = document.getElementById("like2").addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("like2")
// })//true


// let like = document.getElementById("likebutton").addEventListener("click",()=>{
//     console.log("like me")
// },true) //true
// let like1 = document.getElementById("like1").addEventListener("click",()=>{
//     console.log("like1")
// },true) //true
// let like2 = document.getElementById("like2").addEventListener("click",(event)=>{
//     event.stopPropagation()
//     console.log("like2")
// },true)//true



// lec -11 ---
// function curring ---
// method 1 ->

// var myfunc = function(a1){
//     let a2 = 5;
//     return function(b1){
//         return function(c1){
//             let c2 = 2;
//             return a2+a1+b1+c1+c2;
//         }
//     }
// }

// method 2 ->
// var fun = function(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }(2)(6)
// console.log(fun(3))


// method 3 ->
// var myfunc = (a)=>(b)=>(c)=> a+b+c
// console.log(myfunc(10)(5)(2))

// lec -12 ---
// infinite curring method -->

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }
// console.log(add(4)(5)(7)(9)());


// Extra -->
// higher order function , pure function , first class function -->

// pure function -->

// function myfun(param){
//     return param*5;
// }
// console.log(myfun(10));


// higher order function -->

// function X(){
//     return "function X !"
// }
// function Y(param){
//     console.log(param());
// }

// Y(X)


// first class function -->

// function myfunction(){
//     return function(){
//         return "my name is mohit"
//     }
// }
// console.log(myfunction()())


// // other way --->
// function first(param){
//     return param()
// }
// function myname(){
//     return "mohit mahawar"
// }
// console.log(first(myname));


// fatch method -->
// const api_url = "https://jsonplaceholder.typicode.com/todos";
// async function fetchdata(url){
//     await fetch(url).then((response)=>response.json()).then((data)=>{for(let i in data){ document.write(`${data[i].title}<br>`)}}).catch((err)=>console.log(err))
// }
// let mydata = fetchdata(api_url)
// console.log(mydata)



// function statement --> (function declearing) -->
// function myfunction(){
//     console.log("hello!")
// }

// function expression -->
// let func = ()=>{
//     console.log("hello!")
// }


// iterator -->

// let arr1 = [11,22,33,44]
// let iter = arr1[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// generators -->

// function *generator(num){
//     for(let ii =0;ii<num;ii++){
//         yield ii
//     }
// }
// let func = generator(6)
// console.log(func.next())
// console.log(func.next())

// exception handling-->

// function func(n){
//     try{
//         for(let i =0;i<n;v++){
//             console.log(i)
//         }
//     }
//     catch(err){
//         console.log("sorry "+err)
//     }
//     finally{
//         console.log("this is finally stap")
//     }
// }
// func(4);


// let t=()=>{
//     if(2<6) throw "sorry bro";
//     }
// console.log(t())

// class,Object,inheritance -->
// class myclass{
//     constructor (name,branch){
//         this.name = name;
//         this.branch = branch
//     }
//     myfunction(){
//         return `${this.name} and ${this.branch}`
//     }
//     yourfunction(myname){
//         this.name = myname;
//         return `${this.name} and ${this.branch}`
//     }  
// }
// class yourclass extends myclass{
//     constructor(name,branch,mod){
//         super(name,branch);
//         this.mod = mod;
//     }
//     func(){
//         return `${this.name} and ${this.branch} and ${this.mod}`
//     }
// }
// let obj1 = new yourclass("mohit","It",1200);
// console.log(obj1.myfunction());
// console.log(obj1.yourfunction("pawan"))
// console.log(obj1.func())



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

// encapsulation using closures------>
// function countercount(){
//     var count = 0;
//     this.incerement = ()=>{
//         count++
//         console.log(count)
//     }
//     this.decrement=()=>{
//         count--
//         console.log(count)
//     }
// }
// let mycount = new countercount()
// mycount.incerement()
// mycount.incerement()
// mycount.incerement()
// mycount.decrement()



// destructuring ------>
// let arr = [11,22,33]
// var [top1,top2,top3] = arr;
// console.log(top1)

// let obj = {
//     name:"mohit",
//     mod:"fast"
// }
// let {name,mod} = obj;
// console.log(name)


// call by value and call by reference ----->

// let num1 = 10
// let num2 = num1;
// num2 = num2+5
// console.log(`num1 ${num1}`)
// console.log(`num2 ${num2}`)


// // call by reference 
// let obj1 = {"name":"mohit","mod":10}
// let obj2 = obj1
// obj2["mod"] = 99
// console.log(`obj1 ${obj1}`)
// console.log(`obj2 ${obj2}`)

// let arr1 = [11,22,33,44]
// let arr2 = arr1
// arr2.push(50)
// console.log(`arr1 ${arr1}`)
// console.log(`arr2 ${arr2}`)


// shellow copy 
/*
let obj = {
    name:"mohit",
    pass:"admin"
}

//let myobj = obj; // call by reference problem
//let myobj = {...obj} // reduce call by reference problem (shellow copy)
//let myobj = Object.assign({}, obj) // shellow copy -> this process is copy only main object they do not copy nested objects.

let name = "shree";
myobj.name = name;

console.log("obj is : ", obj);
console.log("myobj is : ", myobj);
*/


// deep copy 
/*
const _ = require('lodash');
obj = {
    name:"mohit",
    pass:"admin",
    getdata:function(){
        console.log("hi");
    },
    address: {
        city:"jaipur",
        state:"raj"
    }
}


//let myobj = JSON.parse(JSON.stringify(obj)); // it can copy nested object as well but it can't copy inner functions and dates.
//let myobj = Object.assign({}, obj) // it not work for nested object "jaipur" convert into kota in obj & myobj both. but it copy inner function also.

let myobj = _.cloneDeep(obj); // it is lodash package install by using npm and you can use cdn script link also it can do deep copy of object.

myobj.address.city = "kota";

console.log("obj is : ",obj);
console.log("my is :", myobj);

*/



// Polyfill--->
// A polyfill is a piece of code that is used to provide/fill-in some feature on older browsers that don't support that feature by default. 
// For example, there are some JavaScript functions/features that Google Chrome supports but Internet Explorer does not support (like Promises or Object.assign()).
// In order to ensure that the website doesn't break in IE, a developer could write a piece of polyfill code that simulates the missing functionality that IE does not support.

// polyfill of bind method --->
/*
let name = {
   firstname:"mohit",
   lastname:"jain"
  }
let printName = function(hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " " + this.hometown + " " + this.country);
  }
  
 let printMyName = printName.bind(name, "jaipur", "rajasthan");
 printMyName("India");
 
 Function.prototype.mybind = function(...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printName2 = printName.mybind(name, "jaipur", "rajasthan");
printName2("India");


*/
