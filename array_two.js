let heros=["superman","spiderman","jockey chan"];
for(let idx=0;idx<heros.length;idx++){
   console.log(heros[idx])
}
let cities=["bangalore","delhi","hyderabad","mumbai"];
for(let city of cities)
{
   console.log(city.toUpperCase());
}
let marks=[98,45,67,87,25,56];
let sum=0;
for(let mark of marks){
  sum+=mark;
}
let avg=sum/marks.length
console.log(avg);
marks.push(12)
console.log(marks.pop());
console.log(marks);
console.log(cities.toString());
console.log(marks.toString());