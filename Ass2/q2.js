const prompt=require('prompt-sync')()

function higher(fun,arr){
    return arr.map(fun)
}
const num=(prompt("Enter the number:")).split(",").map(Number)
const double=higher(x=>x*2,num)
console.log(double)