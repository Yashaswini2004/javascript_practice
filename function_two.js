let arr=[1,2,3,4,5,6,7,8,9,10];
let evenArr=arr.filter((val)=>{
   return val%2==0
})
console.log(evenArr)

let oddArr=arr.filter((val)=>{
    return val%2!=0
})
console.log(oddArr)
let arr1=arr.filter((val)=>{
    return val>4;
})
console.log(arr1);

let arr2=arr.filter((val)=>{
    return val<5
})
console.log(arr2);