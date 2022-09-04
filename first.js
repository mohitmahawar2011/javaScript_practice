var a = 10;
function my(){
    let b = 20
    console.log(`${a} and ${b} `+"hello")
    return function inner(z){
        console.log(a+b+z);
    }
}

// var x = my()(5);
var x = my();
x(5);


function first(a){
    let x = 10;
    console.log("first ",a+x);

}
first(a);

var second = function(c){
     console.warn("this is second" , c)
 }

second(12);

var third = (z)=>{
    console.warn("third" , a+z);
 }

third(15);

// spread operator:
var func = (a,b,c)=>{
    console.log(`${a} ${b} ${c} =>`,a+b+c);

}
var arr = [2,4,6,8,10];
var ar = 100
func(...arr,ar);

// rest opretor:

function Sum(...arr){
    
    // for (let i in arr){
    //     console.log(arr[i]);
    //     total = total + arr[i]
    // }
    // arr.forEach(function(val){
    //     total = total + val;
    //     console.log(val) 
    // })

    console.log(...arr)
}
Sum([22,33,44,55])


function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
 
console.log("sum is" ,sum(1,2,3,4,5));

// var arr = [1, 2, 3, 4];
// var total = 0;
// for (var i in arr) {
//   total += arr[i];
// }
// console.log(total)



function err(){
    console.log("arr function");
}
err()

ar = ()=>{
    console.log("ar function");
}
ar()

class myoneclass{
    constructor(myname,myclass){
        this.name = myname
        this.class = myclass
    }

    myfunction(){
        console.log(`${this.name} and ${this.class}`)

    }
    static mytwo(){
        console.log("mytwo func")
    }
}

class secondclass extends myoneclass{
    constructor(myname,myclass,mybranch){
    super(myname,myclass)
    this.branch = mybranch 
    }
    mysecondfunc(){
        console.log(`${this.name} and ${this.class} ${this.branch}`)
    }

}
let s = new secondclass('mohit','seventh','IT')
s.myfunction()
s.mysecondfunc()

var arr = ['mohit','pawan','vimal']
var arr1 = arr.entries();
console.log(arr1)
for (let i of arr1){
    console.log(i[1]);
}
// for(let i in arr1){
//     console.log("ok")
//     console.log(i)
// }

var a = [22,33,11,12,34]
var b = a.filter(check)
console.log(b)
function check(p){
    return p > 15
}

var a = [22,33,44,12,11,14];
var check = (a) =>{
    let b = a.length;
    for(let i=0;i<b;i++){
        if(a[i] <23){
            console.log(a[i]);
        }
    }
}
check(a)

// var a = 5;
// var fact = (a) =>{
//     let fac = 1;
//     for(let i =a;i>1;i--){
//         fac = fac*i;
//     }
//     console.log(fac);
// }
// fact(a)

// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return factorial(n-1)*n
//     }
//     }
// console.log(factorial(5));


// function fibo(n){
//     if(n < 2){
//         return n}
//     else{
//         return fibo(n-2)+(fibo(n-1));}
// }
// console.log(fibo(8))

// function prime(num){
//     let flag = true;
//     for(let i =2;i<num;i++){
//         if(num%i == 0){
//             flag = false;
//         }       
//     }
//     if(flag == true){
//         return "prime number";
//     }
//     else{
//         return "not prime number";
//     }
// }
// console.log(prime(20));


var result = (num)=>{
    let mynum = num.toString().split("").reverse().join("");
    if(mynum.endsWith("-")){
        mynum = "-"+mynum
        console.log(typeof(mynum));  

        return parseInt(mynum);
    };
    // console.log(mynum);  
    // console.log(typeof(mynum));  
}
console.log(result(-123));


// var number = (num)=>{
//     let rem =0;
//     let rev = 0;
//     while(num > 0){
        
//         rem = num%10;
//         rev = rev*10+rem;
//         num = num/10;
//     }
//     console.log(rev);
// }

// number(123);

// document.write("hello ji")
// var i,j,k = 0
// for(i=0;i<=5;i++){
//     // for(k=0;j<=5-i;k++){
//     //     document.write("<br>")
//     // }
//     for(j =0;j<=i;j++){
//         document.write("*&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// ------------------------------
// pattern -->
// let string = ""
// for(let i =1 ; i<=5 ; i++)
// {     for(let j =1; j<=i ; j++)
//      {
//           string += "* "
//       }
//      string += "\n"
// }
// console.log(string);

// console.log("\n");

// let str = ""
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         str+=" "
//     }
//     for(let k=1;k<=i;k++){
//         str+="* "
//     }
//     str+= "\n"
// }
// console.log(str)


// let st = ""
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         st+="* "
//     }
//     st+= "\n"
// }
// console.log(st)


// let stt = "";
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         stt+="  "
//     }
//     for(let k=1;k<=i;k++){
//         stt+="* "
//     }
//     stt+="\n"
// }
// console.log(stt)


// let pattern = ""
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         pattern += " "
//     }
//     for(let k=1;k<=i;k++){
//         pattern += "* "
//     }
//     pattern += "\n"
// }
// for(let i=2;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         pattern += " "
//     }
//     for(let k=5;k>=i;k--){
//         pattern += "* "
//     }
//     pattern += "\n"
// }

// console.log(pattern)
// ----------------------------






