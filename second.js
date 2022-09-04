// // hoisting
// var a = 12;
// console.log(a);
// // console.log(fun(2012));

// // function fun(year){
// //     // console.log("hello world");
// //     let month = 'nov';
// //     return `hello ji ${year} and ${month}`
// // }

// // console.log(func())
// fun()


// var fun = ()=>{
//     // return "mohit mahawar"
//     console.log("mohit")
// }
// // console.log(fun())
// // fun()

// a = 100;
// console.log(`a is ${a}`)

// var func = function(){
//     return "pawan"
// }
// // console.log(func())


// var a= 122;
// // console.log(window.a);
// console.log(a)
// console.log(this.a);

// function check(){
//     console.log(`${this.a} is a `)
// }
// check()

// values & References

let a = 10;
let b = a + 5;
console.log(a);
console.log(b);


let obj1 = { "name": "mohit", "salary": 23300 };
let obj2 = obj1;
obj2.age = 21
obj1.salary = 45200
obj2["number"] = 10;
console.log(obj1);
console.log(obj2);
delete obj2.number
console.log(obj1);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())


function my() {
    var name = "mohit"
    var lname = "mahawar"

    function myname() {
        return name + " " + lname;
    }
    return myname()
}
var m = my();
// m.myname()
console.log(m)


var app = {"name":"mohit",
        "class":234}
console.log(JSON.stringify(app));

const letters = new Set(["a","b","c"]);
console.log(letters)

// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
//   add();
//   add();
// console.log(add());

const add = (function () {
    let counter = 0;
    // console.log(counter)
    function sal() {counter += 1; return counter}
    return sal()
  })
  
add()
add()
console.log(add())
