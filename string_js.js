// "use strict"
let st = "mohit mahawar,is a Best person, ever "
console.log(st.split(","))
console.log(st.toLowerCase())
console.log(st.toUpperCase())
console.log(st.indexOf("i"))
console.log(st.match("Best"))
console.log(st.charAt(8))
st1 = "pawan mahawar"
console.log(st.concat(" "+st1))
console.log(st.includes("Best"))
console.log(st.length)
console.log(st.repeat(2))
console.log(st.replace("person","guy"))
console.log(st.valueOf("mahawar"))
console.log(st.at(15))
console.log(st.search("mahawar"))

// for(let i=0;i<=st.length;i++){
//     console.log(st[i])
// }

// for(let i of st){
//     console.log(i)
// }

for(let i in st){
    console.log(st[i])
}
