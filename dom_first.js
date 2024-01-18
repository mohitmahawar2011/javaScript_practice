// console.log("mohitji")
// // var ele = document.getElementById('name').innerText;


// let mylst = ['mohit','mahawar','share'];
// console.log(mylst.length)
// for(let i=0;i<mylst.length;i++){
//     console.log(document.getElementById('myname').innerText = mylst[i]);

// }

// // console.log(ele);
// var lists = document.getElementById("gender").innerHTML;
// console.log(lists)



// function binary(arr,eles){
//     if(arr.length >=1){
//         let high = (arr.length)-1
//         let low = 0
//         let mid = 0
//         while(low<=high){
//             // mid = low+Math.floor((high-low)/2);
//             mid = Math.floor((low+high)/2);
//             if(eles > arr[mid]){
//                 low = mid+1
//             }
//             else if(eles<arr[mid]){
//                 high = mid-1
//             }
//             else{
//                 return arr[mid];
//             }
//         }
//     }
// }
// let myarr = [2,4,6,7,9,12,32];
// let target = 12
// console.log(binary(myarr,target));



// function linear(arr,ele){
//         for(let i=0;i<arr.length;i++){
//             if(arr[i] == ele){
//                 return i
//             }
//         }
//         return -1
// }

// let arr1 = [2,5,12,6,8,4];
// let tar = 6;
// // console.log(linear(arr1,tar));
// const myans = linear(arr1,tar);
// if(myans == -1){
//     console.log("not")
// }else{
//     console.log(myans);
// }


// const arr = [1, 2, 3, 4, 2, 5, 6, 3,1];
// Using functional programming to find duplicates
// const findDuplicates = (arr) =>
//   arr.filter((value, index, self) => self.indexOf(value)!==index );
// console.log("Duplicate values:", findDuplicates(arr));

// function Duplicate(arr){
//     let result = [];
//     arr.forEach((val,index, self)=>{
//         self.slice(0,index).includes(val) && result.push(val)
//     })
//     return result;
// }
// console.log(Duplicate(arr))


// remove duplicates

// function remove_duplicqates(arr){
//     let myanswer;
//     myanswer = new Set(arr);
//     return myanswer
// }

// let li = [2,4,5,2,4,6,8,5,1]
// const mytarget = remove_duplicqates(li);
// console.log(mytarget);


// function duplicate(arr){
//     let arr1 = [];
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] in arr1){}
//         else{
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }

// let li = [2,4,5,2,4,6,8,5,1]
// const mytarget = duplicate(li);
// console.log(mytarget);


// find duplicates
// function find_duplicates(arr){
//     let dup = []
//     for(let i = 0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] == arr[j]){
//                 dup.push(arr[j])
//             }
//             else{}
//         }
//     }
//     return dup
// }

// let li = [2,4,5,9,4,6,8,5,1,9,2,10]
// const mytarget = find_duplicates(li);
// console.log(mytarget);


// find min ele
// function mins(arr){
//     let target = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<target){
//             target = arr[i]
//         }else{}
//     }
//     return target
// }
// let li = [20,4,5,3,7,6,9]
// const mytarget = mins(li);
// console.log(mytarget);
