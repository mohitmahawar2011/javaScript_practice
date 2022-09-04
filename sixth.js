// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelectorAll()
// document.querySelector()

// document.getElementById().setAttribute()
// document.getElementById().getAttribute()
// document.getElementById().getAttributeNode()
// document.getElementById().innerHTML
// document.getElementById().innerText
// document.getElementById().attributes
// document.getElementById().removeAttribute()

// let name = "mohit mahawar";
// document.getElementById("head_div").innerText = name;
// let details = document.getElementById("head_2").innerText;
// console.log(details);
// document.write(details);
// document.write("\t")
// let det = document.getElementById("p_head").innerText;
// document.write(det+" rajasthan")

// document.getElementById("inner_head").innerHTML = "<h1 id='itisme'>it is me</h1>"
// let detail = document.getElementById("itisme").innerText;
// console.log(detail)

// my = "sorry for being there";
// document.getElementById("inner_head").innerHTML= my;

// back = document.getElementById("inner_head").getAttribute("style");
// console.log(back)


// document.getElementById("head_2").setAttribute("style","background-color:grey")


// document.getElementsByTagName("h3")[0].innerHTML="mohitji";


// let know= document.getElementById("head_div").attributes;
// console.log(know);

// document.getElementById("head_div").removeAttribute("style");

// document.getElementById("head_div").className = "my_div"

// document.querySelector("#head_1").style.backgroundColor = "red";

// let head_1 = document.getElementById("head_1").getAttribute("style");
// console.log(head_1);

// // document.getElementById("main").onclick=myfunc();
// function myfunc(){
//     document.getElementById("main").style.backgroundColor = "pink"
// }

// // function myfunction(){
// //     document.getElementById("paratag").innerHTML = "hello world";
// // }

function myfunction(){
    setTimeout(()=>{
        document.getElementById("paratag").innerText="mohit";
    },4000);
}



// class myclass{
//     constructor(name,fname){
//         this.name = name;
//         this.fname = fname;
//     }
//     details(){
//         console.log(`${this.name} son of ${this.fname}`)
//     }
// }
// class yourclass extends myclass{
//     constructor(name,fname,sname){
//         super(name,fname)
//         this.sname = sname;
//     }
//     show(){
//         console.log(`${this.name} son of ${this.fname} and ${this.sname}`)
//     }
// }
// my = new yourclass("mohit","krishnaji","mahawar")
// my.show();




// let myread = ()=>{
//     document.getElementById("readmy").innerText = "readmy function clearly";
// }
// document.getElementById("itmy").onclick=()=>{
//     document.getElementById("readmy").innerText = "readmy function clearly";
//     // document.getElementById("readmy").style.backgroundColor="red"
//     // document.querySelector("#readmy").style.backgroundColor = "red"
// }

// document.getElementById("itmy").addEventListener("click",()=>{
//     document.getElementById("head_2").style.backgroundColor="red"
// })


