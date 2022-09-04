// // function my(){
// //     return "my name is mohit"
// // }

// // function fullname(){
// //     return `${my()} mahawar`
// // }
// // console.log(fullname())



// // rest operator
// // function rest(...input){
// //     // console.log(...input) // 2 4 12 5 6 33
// //     // console.log(input) // [ 2, 4, 12, 5, 6, 33 ]
// // }
// // rest(2,4,12,5,6,33)

// // spread operator
// // function speard(arr){
// //     console.log(arr[1])
// // }

// // let ar1 = [12,23,34]
// // let ar2 = [11,22,33,44]

// // let arr1 = [...ar1,...ar2]
// // speard(arr1)


// // let pattern = ""
// // for(let i=1;i<=5;i++){
// //     for(let x=1;x<=5-i;x++){
// //         pattern += " "
// //     }
// //     for(let y=1;y<i+1;y++){
// //         pattern += i
// //     }
// //     for(let j =1;j<i;j++){
// //         pattern += i;
// //     }
// //     pattern += "\n"
// // }
// // console.log(pattern)



// // function mypattern(){
// //     let pattern = ""
// //     let count =1
// //     for(let i=1;i<=5;i++){
// //         for(let j=1;j<i+1;j++){
// //             pattern += 5-i+1            
// //     }
// //     pattern += "\n"
// // }
// // console.log(pattern)
// // }
// // mypattern()

// // function myname(){
// //     let name = "mahawar"
// //     return function xyz(){
// //         console.log(`my name is mohit ${name}`);
// //     }//()
// // }
// // // console.log(myname()())
// // myname()()


// // function square(n){
// //     return n*n
// // }
// // function cube(n){
// //     return n*n*n
// // }

// // function number(params,num){
// //     return params(num)
// // }
// // console.log(number(cube,5));


// // let x = 5;
// // {
// //     let x =10; //can do 
// //     console.log(x)
// // }

// // const x = 10;
// // {
// //     const x =50  //can do
// //     console.log(x)
// // }
// // console.log(x)


// // var x = 10;
// // var x =50  //can do
// // console.log(x)


// // var x = 10;
// // let x = 50; //can't do
// // console.log(x)


// // let x = 10;
// // var x = 50; //can't do
// // console.log(x)


// // let x= 10;
// // {
// //     var x = 50; //can't do
// // }
// // console.log(x)


// // var x = 10;
// // {
// //     let x = 50;
// //     console.log(x)
// // }


// // let x = 55;
// // let x = 60; //can't do
// // var x = 100; //can't do
// // console.log(x)

// // (function (){ 
// //     let name = "mohitji";
// //     console.log("my name is "+name)
// //     })();



// // var obje1 = {
// //     name : "mohit",
// //     branch : "IT",
// //     year : "4th",
// //     college : "arya",
// //     fees : 38500,
// //     detail : function(){
// //         return `${this.name} and college ${this.college} & fees is ${this.fees}`;
// //     }
// // }

// // console.log(obje1.detail())


// // x = new String()
// // console.log(typeof(x));


// // let name = "krishna";
// // let level = 10;
// // (function(){
// //     this.name = "mohit mahawar";
// //     this.level = 12
// //     console.log(`${this.name} and ${this.level}`)
// // })()



// var mydetail = document.querySelector(".container");
// // console.log(mydetail.innerText())
// // console.log(mydetail.innerText
// // console.log(mydetail)

// // mydetail.style.backgroundColor = "red"
// // console.log(mydetail)
// mydetail.classList.add("newnode")
// mydetail.classList.remove("container")
// console.log(mydetail)
// console.log(document.all)
// console.log(document.documentElement)
// console.log(document.anchors)


// let api_data;
// async function a()
// {
//     await fetch("https://jsonplaceholder.typicode.com/users").then(resposne => resposne.json()).then((result) => console.log(result) ).catch((error) => console.log(error) )
// }
// console.log(a())



// let api_data;
// async function a()
// {
//   api_data =  await fetch("https://jsonplaceholder.typicode.com/users")
//   api_data = await api_data.json();
//   console.log(api_data)
// }
// a()


// function getData()
// {
//     let name = document.querySelector(".name").value
//     let password = document.querySelector(".password").value
//     console.log(name, password)
// }

// let promise = new Promise((resolve, reject) => {
//         if(false)
//         {
//             resolve("connection is succesfully done")
//         }
//         else{
//             reject("could not make it")
//         }
// } )

// promise.then(data => console.log(data)).catch(error => console.log(error))

 

// let person = {
//     name : "ravi",
//     last_name : "malviya"
// }

// console.log(person.name)
// person["last_name"]

let a = [4,2,5,9,5]
a.length =1
console.log(a)


