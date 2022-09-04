// rest parameter  -->
// var num = 12
// function Sum(...inputs){
//     console.log(inputs);
// }
// Sum(12,33,44,5);

// var sum = (...inputs)=>{
//     return console.log(inputs);
// }
// sum(11,22,33);




// spread operator -->
// var func = (a,b,c)=>{
//     return console.log(a+b);
// }
// arr = [11,22,33,44]
// func(...arr);




// var arr = [11,2,233,44,55];
// console.log(arr.length);




// find max num in array -->
// var arr = [2,5,7,3,9];
// var ele = arr[0];
// var total = 0;
// var maxsum = (arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if (ele < arr[i]){
//             ele = arr[i]
//         }
//     }
//     console.log(`${ele}`);
// }
// maxsum(arr);




// bubble sort -->
// function sorts(arr){
//     var temp = 0;
//     for (let i=0;i < (arr.length)-1;i++){
//         for (let j=0;j< (arr.length)-i-1;j++){
//             if (arr[j] > arr[j+1]){
                
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     // return console.log(arr);
//     for (a=0; a<arr.length; a++) {
//         console.log(arr[a]);
//         }
// }
// var arr1 = [17,4,6,2,3,9]; 
// sorts(arr1);



// searching -->
// function linear(arr,ele){
//     if (ele in arr){
//         for (let i=0;i<arr.length;i++){
//             if (ele === arr[i]){
//                 console.log(`${i}`)
//             }
//         }
//     }
//     else{
//         console.log("-1");
//     }
// }
// var arr = [3,6,5,2];
// var ele = 2
// linear(arr,ele);





// class , object , constructor -->
class Student{
    constructor(name,age,cls){
        this.name = name,
        this.age = age,
        this.cls = cls
    }
    // instance method
    Biodata(){
        return `Hi my name is ${this.name} and my age is ${this.age} and my class is ${this.cls}..!`
    };
}

class City extends Student{
    constructor(name,age,cls,cname){
        super(name,age,cls);
        this.cname = cname;      
    }
    details(){
        return `name is ${this.name} and my age is ${this.age} and my class is ${this.cls} and curr city is ${this.cname}`
    };
    deta(){
        return `${this.name} and the main work is ${this.details()}`
    }
}

let ct = new City("mohit",22,"btech","jaipur");
console.log(ct.details());
console.log(ct.Biodata());
console.log(ct.deta());

let std = new Student("mohit",21,"12th")
console.log(std.Biodata())
console.log(std.name)





// for loop -->
// for (let i=0;i<10;i++){
//     console.log(i);
// }


// for in loop -->
// let arr = ["mohit","mahawar"];
// for (let x in arr){
//     console.log(arr[x]);
// }


// for of loop -->
// let arr = ["mohitji","mahawarji"];
// for (let i of arr){
//     console.log(i);
// }



// for Each loop--->
// var arr = ['mohit','danish','ravi'];
// arr.forEach(function(val){
//     // document.write(val+"<br>");    
//     console.log(val);
// });




// String Method -->
// let a = "$521";
// let b = a.replace("$","");
// // let c = b.parseInt(b);
// console.log(a);
// console.log(b);




// DOM -->(set) innerHTML,innerText,setAttribute , Attributes, removeAttribute ->
// var val = document.querySelector(".head3").innerText = "<p>MahawarJI</p>";
// console.log(val);    //  --> <p>MahawarJI</p>

// var val = document.querySelector(".head3").innerHTML = "<h1>MahawarJI!!</h1>";
// console.log(val);

// var val = document.querySelector(".head3").setAttribute("style","background-color:red");
// console.log(val);



// DOM -->(get) innerHTML,innerText,getAttribute,getAttributeNode,Attribute ->
// var val = document.querySelector(".head3").innerText;
// console.log(val);

// var val = document.querySelector(".head2").innerHTML;
// console.log(val);

// var val = document.querySelector("#main").getAttribute("method");
// console.log(val);

// var val = document.querySelector(".head3").attributes;
// console.log(val);



// let arr = [1,2,3,4,5];
// let sum = arr.reduce((accum,curr) =>{
//     console.log(`values ${accum+curr}`);
//     return accum + curr;
// },2)
// console.log(sum);



// const arr1 = [10,20,30,40];
// const arr2 = arr1.filter((val,index,arr) =>{
//     console.log(`${val} index is ${index} array is a ${arr}`)
// })
// console.log(arr2);



// const arr1 = [10,20,30,40];
// const arr2 = arr1.filter((val) =>{
//     return val>21;
// })
// console.log(arr2);



// const arr1 = [10,20,30,40];
// const arr2 = arr1.findIndex((val) =>{
//     return val>=20;
// })
// console.log(arr2);



// const arr1 = [10,20,30,40];
// const arr2 = arr1.find((val) =>{
//     return val>21;
// })
// console.log(arr2);



// const arr1 = [10,20,30,40];
// const arr2 = arr1.map((val)=>{
//     return 1+val;
// })
// console.log(arr2);



// const arr = ['mohit','pawan','vimal'];
// const newarr = arr.map((cvalue,i)=>{
//     return i+":"+cvalue+" mahawar";
// });
// console.log(newarr);



// const data = {
//     name : "mohit",
//     age : 21,
//     deg : ["btech",'12th']
// }
// console.log(`age is ${data.age}`);  //ES5
// console.log(data.deg[0]);
// let {name,age,deg} = data;
// console.log(`name is ${name}`);

// // change dataname
// let{name:fname,age:cur_age,deg:degree} = data;
// console.log(`currant changes : ${cur_age}`);



// let arr1 = [11,22,33];
// let arr2 = [1,2,3];
// let arr3 = [10,20,30];
// let arr = [...arr1,...arr2,...arr3];
// console.log(arr);
// console.log(`this is forst value ${arr[0]}.....!`)
// for (let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }



// sums = (...inp) => {
//     let t = 0
//     for (let i=0;i<inp.length;i++){
//         t += inp[i];
//     }
//     return  t; 
// }
// var arr = [2,10,4,3,1]
// x = sums(...arr);
// console.log(x);



// function sum(...inputs){
//     console.log(inputs);
//     let total = 0;
//     for (let i=0; i<inputs.length;i++){
//         total +=inputs[i];

//     }
//     console.log(total);

// }
// sum(1,5,8,9,3,7);
