// check prime or not--->
// function primes(num){
//     let flag = true;
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             flag = false;
//             break
//         }
//     }
//     if(flag){
//         return "prime";
//     }else{
//         return "not prime"
//     }
// }
// console.log(primes(11));

// find the common greatest diviser for two numbers--->
// function diviser(a,b){
//     var greatdiviser = 1;
//     var division = 2;

//     if(a<2 && b<2){
//         return 1;
//     }
//     else{
//         while(a>=division && a>=division){
//             if(a%division ==0 && b%division==0){
//                 greatdiviser = division;
//                 division++           
//             }
//             division++;
//         }
//     }
//     return greatdiviser;
// }
// console.log(diviser(21,14))

// remove duplicates --->
// function duplicates(arr){
//     obj1 = new Object();
//     for(let i=0;i<=arr.length;i++){
//         if(!arr[i] in obj1){
//             obj1[arr[i]] =1;
//         }else{
//             obj1[arr[i]]++;
//         }
//     }
//     let ans = Object.keys(obj1)
//     return ans.slice(0,-1)
// }
// console.log(duplicates([2,4,5,2,3,4,5,7,6]))

// marge two array -->
// function margeArr(arr1,arr2){
//     var arr = [...arr1,...arr2]
//     return arr.sort((a,b)=>{return a-b})  
// }
// console.log(margeArr([2,6,9,15],[3,5,8,12]));

// swap to numbers without temp --->
// let a = 2;
// let b = 5;
// console.log(a,b);
// a = b-a;
// b = b-a;
// a  =a+b;
// console.log(a,b)

// reverse string -->
// function reverseStr(str1){
//     let arr = str1.split("").reverse().join("")
//     return arr
// }
// console.log(reverseStr("myname"))


// palindrome -->
function palindrome(str){
    ans = true;
    let low = 0
    let high = (str.length)-1;
    while(low<= high){
        if(str[low] == str[high]){
            low++;
            high--
        }else{
            ans = false
            break
        }
    }
    if(ans){
        return "palindrome";
    }else{
        return "not palindrome"
    }
}
console.log(palindrome("mohiom"))