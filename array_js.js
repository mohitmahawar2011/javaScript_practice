// // "use strict"

// let arr = [11,22,33,44,55]
// console.log(arr.indexOf(33))
// console.log(arr.length)
// console.log(arr.includes(44))
// console.log(arr.reverse())
// console.log(arr.sort())
// console.log(arr.at(2))
// console.log(arr.concat([77,88]))
// console.log(arr.slice(2,4))
// console.log(arr.push(99))
// console.log(arr.pop())

// let sorted_inc = arr.sort((a,b)=>{return a-b});
// console.log(sorted_inc);

// let sorted_decs = arr.sort((a,b)=>{return b-a});
// console.log(sorted_decs);


// let every = arr.every((data)=>{
//     return data > 30;
// })
// console.log(every)

// let some = arr.some((data)=>{
//     return data < 10
//     })
// console.log(some)

// let find = arr.find((data)=>{
//         return data < 33
// })
// console.log(find)

// let findindex = arr.findIndex((data)=>{
//     return data > 33
// })
// console.log(findindex)

// let map = arr.map((data)=>{
//     return data*10
// })
// console.log(map)

// let filter = arr.filter((data)=>{
//     if(data%2==0){
//         return data
//     }
// })
// console.log(filter)

// let reduce = arr.reduce((result,curr)=>{
//     result = result+curr
//     return result
// })
// console.log(reduce)


// // object change into array-->
// let obj = {name:"mohit",branch:"IT",section:"4th"}

// let arr1 = Object.entries(obj)
// console.log(arr1)

// const array = [[11,10],[22,20],[33,30]]
// let arr2 = Object.fromEntries(array)
// console.log(arr2) 



// for(let i=0;i<=6;i++){
//     setTimeout(()=>{
//         console.log(i)
// },1000*i)
// }


let myarr = ["mohit","pawan","vimal","ravi"]
myarr.splice(2,1,"danish","rohit");
console.log(myarr)
