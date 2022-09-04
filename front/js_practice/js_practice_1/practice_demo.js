// reverse string in js -->
// var reverse = (num) =>{
//     var newnum = "";
//     for (let i = num.length-1;i>=0;i--){
//         newnum += num[i]
//     }
//     if(newnum === num){
//     console.log(`${num} is palindrome`);
//     }
//     else{
//         console.log(`${num} not palindrome`);
//     }
// }
// var num = 'lol';
// reverse(num)


// reverse number in js -->
// var num_rev = (num)=>{
//     let rev = 0;
//     let rem = 0;
//     while(num > 0){
//         rem = num%10
//         rev = rev*10+rem
//         num = parseInt(num/10)      
//     }
//     console.log(rev);
// } 
// var num = 1234
// num_rev(num);


// anagram string in js  -->
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

anagrams('monk','konm')
