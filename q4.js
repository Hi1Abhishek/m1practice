const prompt =require("prompt-sync")()

const person={name:prompt("Name:")||'jhon',age:+prompt("Age:")||30}
const {name,age}=person;
console.log(name,age)