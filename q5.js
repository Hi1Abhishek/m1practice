const prompt=require("prompt-sync")()

const array1=prompt("Enter the array1:").split(',').map(Number)
const array2=prompt("Enter the array2:").split(',').map(Number)

const combine=[...array1,...array2]
console.log("Combined array:",combine)
