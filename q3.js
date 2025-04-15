const prompt=require("prompt-sync")()

const name=prompt("Enter name:")
const age=prompt("Enter the age:")

const sentence=`My name is ${name} and, I am ${age} year old.`
console.log(sentence)