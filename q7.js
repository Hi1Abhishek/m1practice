const prompt = require('prompt-sync')()

const id=Symbol('id')

const name =prompt("Enter name:");
const age=parseInt(prompt("Enter the age:"));
const secretId=prompt("Enter the secreat id:");

const person={
    name,
    age,
    [id]:secretId,
}

console.log(person[id])
console.log(person)