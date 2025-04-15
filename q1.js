const prompt=require("prompt-sync")()

let constInput=prompt("Enter thenumber of constarray:")
const constarray= constInput.split(',').map(Number)
console.log("constarray",constarray)


let letInput=prompt("Enter the number of letarray:")
let letarray=letInput.split(',').map(Number)
console.log("letarray",letarray)


constarray[3]=60;
constarray.push(30);
console.log("modified constarray:",constarray)

letarray[2]=40;
letarray.push(40);
console.log("Modified letarray:",letarray)
