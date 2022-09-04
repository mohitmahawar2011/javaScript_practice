// reverse a ARRAY
function reverse(array){
    var output = [];
    for (var i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }
    return output;
}
console.log(reverse([1,2,3,4,5,6,7]));

// number reverse

var reverse_number = (num)=>{
    let mynum = num.toString().split("").reverse().join("");
    if(mynum.endsWith("-")){
        mynum = "-"+mynum
        // console.log(typeof(mynum));  
        return parseInt(mynum);
    }
}
console.log(reverse_number(-123))


// linear search
function linear(arr,ele){
        for(let i =0; i<= arr.length;i++){
            if(arr[i] == ele){
                return i
            }
        }
}
a = [3,5,2,8,6,7]
console.log(linear(a,8))


// binary 
function binary(arr,ele){
    if(ele in arr){
        let high = (arr.length)-1
        let low = 0
        let mid =0
        while(low <= high){
            mid = Math.floor((low+high)/2)
            if(arr[mid] < ele){
                low = mid+1
            }
            else if(arr[mid]>ele){
                high= mid-1
            }
            else{
                return mid+1
            }
         }
    }
    else{
        return -1
    }
}
ar1 = [1,3,4,6,8,9,12]
binary(ar1,6)



