const array1=[1,2,3,4];
const sumWithInitial=array1.reduce((accumulator,currValue)=>accumulator+currValue);
console.log(sumWithInitial);

const max=array1.reduce((acc,curr)=>{return curr>acc?curr:acc})
console.log(max);
const multiply=array1.reduce((res,val)=>{return res*val})
console.log(multiply);