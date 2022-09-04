// "use strict"
// string -->

// str1 = String(["mohit"])
// console.log(str1)
// str2 = "mohitji"
// console.log(str2.concat(" ",str1))

// str3 = "mohit mahawar is great person";
// console.log(str3.slice(5,10))  //" maha"
// console.log(str3.slice(-8,-2)); //"t pers"
// console.log(str3.substring(6,13)) //"mahawar"
// console.log(str3.substr(6,14)) //"mahawar is gre"
// console.log(str3.indexOf("h")) //2
// console.log(str3.toUpperCase())
// console.log(str3.toLowerCase())
// console.log(str3.split(" "))
// console.log(str3.search("is"))
// console.log(str3.replace("great","nice"))
// console.log(str3.match("awar")) //9
// console.log(str3.includes("is")) //true
// console.log(str3.length)



// array -->
// let arr1 = [11,22,33,44]

// let mapper = arr1.map((data)=>{
//     return data+1
// })
// console.log(mapper)

// let filtered = arr1.filter((data)=>{
//     if (data%2 ==0){
//         return data
//     }
// })
// console.log(filtered)

// let reducer = arr1.reduce((result,cur)=>{
//     if(cur){
//         result = result+cur;
//     return result;
//     }
// })
// console.log(reducer)

// let everies = arr1.every((data)=>{
//     return data >10;
// })
// console.log(everies)

// let somes = arr1.some((data)=>{
//     return data>50;
// })
// console.log(somes)

// let finds = arr1.find((data)=>{
//     return data <= 33;
// })
// console.log(finds)


// get form values -->

// function myFunction() {
//     var x = document.getElementById("frm1");
//     console.log(x.elements[0].value)
//     var text = "";
//     var i=0;
//     for (i = 0; i < x.length ;i++) {
//         text += x.elements[i].value + " \n";
//     }
//     console.log(text)
//     }


// var name = "mohit";
// let obj = {
//     name:"pawan",
//     mod:"fast",
//     myfun : function(){
//         return this.name
//     },
//     fun : ()=>{
//         // let name = "vimal"
//         return name
//     }
// }

// console.log(obj.mod)
// console.log(obj.myfun())
// console.log(obj.fun())

// arr = [11,22,33,44]
// arr.forEach((data,index)=>{
//     console.log(`${index} : ${data}`)
// })
// ----------------------
// var a = 10;
// console.log(this.a)


// const obj = {
//     name:"mohit mahawar",
//     getname:function(){
//         return this.name
//     },
//     getroll:function(){
//         return this.roll
//     }
// }

// function myPrototype(name){
//     this.name = name;
// }
// myPrototype.prototype = obj;
// const myproto = new myPrototype("rahul sharma");
// console.log(myproto);
// console.log(obj["name"])


// let myMap = new Map([["a1","mohit"],["a2","ravi"],["a3","pawan"]]);
// myMap.set("a2","Ajay")
// console.log(myMap)

// var myfunc = function(a1){
//     let a2 = 5;
//     return function(b1){
//         return function(c1){
//             let c2 = 2;
//             return a2+a1+b1+c1+c2;
//         }(5)
//     }(3)
// }
// console.log(myfunc(2));


// this.name = "pawanji"
// function my(){
//     var name = "mohit"
//     var roll = 20;
//     return this.name
// }

// console.log(my())

// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(){
//     console.log(this.address); 
//   }
// }
       
// var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay",address : "pune,India"};

// var ans = obj1.getAddress.bind(obj2)
// ans()

// object1 = {
//     name :"mohit",
//     mod : 12,
//     self : this.__proto__
// }
// object2 = {
//     name:"danish",
//     state : "rajsthan",
//     __proto__ : object1
// }
// console.log(object2.mod)

// Function.prototype.mybind = function(){
//     return "mybind funtion"
// }

// function func(){
//     return mystar
// }

// (()=>{
//     console.log("hello")
// })()

// function fun(){
//     let a = 10
//     var b =11
//     return `${a},${b}`
// }
// console.log(fun())

//  ---------->
// memorization  -->
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
// console.time()
// console.log(efficient(5));
// console.timeEnd()

// function factorial(n){
//     if(n ==0 || n ==1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(8))

// function fibonacci(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else if(n==2){
//         return 1
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// console.log(fibonacci(8))

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


// destructuring
// let arr = [11,22,33]
// var [top1,top2,top3] = arr;
// console.log(top1)

// let obj = {
//     name:"mohit",
//     mod:"fast"
// }
// let {name,mod} = obj;
// console.log(name)

// function mypromise(){
//     return new Promise((response,reject)=>{
//     let error = false;
//     if(!error){
//         response(()=>{
//                 return "this is my true response"         
//         })
//     }else{
//         reject(()=>{
//             return "sorry some error are there"
//         })
//     }
// })
// }
// console.log(mypromise().then((result)=>{console.log(result())}).catch((err)=>{console.log(err())}))



// let mypromise =  new Promise((response,reject)=>{
//     let error = false;
//     if(!error){
//         response("this is my true response")
//     }else{
//         reject("sorry some error are there")
//     }
// })
// console.log(mypromise.then((result)=>{console.log(result)}).catch((err)=>{console.log(err)}))



// const api_url = "https://jsonplaceholder.typicode.com/todos";
// async function fetchdata(url){
//     console.log("hello")
//     await fetch(url).then((response)=>response.json())
//     .then((data)=>{for(let i in data){console.log(data[i]["id"])}}).catch((err)=>console.log("err"))
//     console.log("buy")
// }
// let mydata = fetchdata(api_url)
// console.log(mydata)
// console.log("ok")


// event bubbling and event capturing ---->
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



// use of "this"  keyword---->
// var a = 10
// let b = 20
// var obj = {
//     name:"mohit",
//     a:100,
//     b:200,
//     getdata:()=>{
//         return `${this.a} and ${this.b} and ${this.name}`
//     },
//     finddata:function(){
//         return `${this.a} and ${this.b} and ${this.name}`
//     }
// }

// console.log(obj.getdata())
// console.log(obj.finddata())
// console.log(this.a)
// console.log(this.b)
// console.log(b)
// console.log(this)

// var a = new Set([11,22,33,{"name":"mohit"}])
// console.log(a)

// document.getElementById("H2my").setAttribute("style","background-color:pink");
// document.querySelector("#H2my").style.backgroundColor="green"
// document.getElementById("H2my").style.backgroundColor = "pink"
// document.getElementById("H2my").innerHTML = "mohiji hai na!"
// let a = "mohit mahawar is"
// console.log(a.slice(2,8))
// let l =[11,22,33]
// console.log(l[l.indexOf(22)])



// document.getElementById("Divmy").innerHTML = "<h1>mohit is back</h1>";
// console.log(document.getElementById("Pmy").innerText = "mohit is back")
// console.log(document.getElementById("Divmy").innerText) 



// document.getElementById("H2my").onclick = function(){console.log("hello H2my function")}
// document.getElementById("H2my").addEventListener("click",function(){console.log("thnaks H2my function")})


// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// console.log(a);

// a[c]=456;

// console.log(a);

// console.log(function f(aa){return aa>1?aa*f(aa-1):aa}(8))   //recursion by using ternary operator

// var name = "mohit"
// var obj = {
//     mod : 12,
//     branch:"It",
//     getinner : function(){
//         return `${name}, ${this.mod}`
//     },
//     getouter : ()=>{
//         return `${this.name} , ${this.mod}`
//     } 
// }
// console.log(obj.getinner())
// console.log(obj.getouter())

// function got(){
//     return new Promise((result,reject)=>{
//         console.log("wait response is pending");
//         setTimeout(()=>{
//             let error = false;
//             if (!error){
//                 result()
//             }else{
//                 reject("oops")
//             }
//         },3000)
//     })

// }

// let myans = got().then(()=>{console.log("chalo sahi hai")}).catch((err)=>{console.log(`error aa gyi ${err}`)})
// console.log(myans)



// const api_url = "https://jsonplaceholder.typicode.com/todos";
// async function fetchdata(url){
//     console.log("hello")
//     await fetch(url).then((response)=>response.json())
//     .then((data)=>{for(let i in data){console.log(data[i]["id"])}}).catch((err)=>console.log("err"))
//     console.log("buy")
// }
// let mydata = fetchdata(api_url)
// console.log(mydata)
// console.log("ok")

// async function myfunctions(){
//     await fetch("https://reqres.in/api/users/")
//     .then(data=>data.json())
//     .then(data=>{for(i in data){console.log(data[i])}})

// }

// myfunctions();