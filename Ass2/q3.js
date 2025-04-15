const prompt=require('prompt-sync')()

function mult(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
const num1=Number(prompt("Enter a num1: "));
const num2=Number(prompt("Enter a num2: "));
const num3=Number(prompt("Enter a num3: "));
const result=mult(num1)(num2)(num3)
console.log("The result is:",result)