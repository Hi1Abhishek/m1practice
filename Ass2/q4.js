const prompt=require("prompt-sync")()

const constarray=prompt("Enterthe array:").split(",").map(Number)
console.log("original array:",constarray)

 constarray[2]=40;
 constarray.push(30);
 console.log("new array:",constarray)