const prompt=require("prompt-sync")()

const num1=Number(prompt("Enter the num1:"))
const num2=Number(prompt("Enter the num2:"))

const add=(a,b) =>{ return a+b}
console.log("sum is:",add(num1,num2))