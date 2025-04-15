const prompt=require("prompt-sync")()
function callback(number,callback){
    return callback(number);
}
const Input= parseFloat(prompt("Enter a number:"))
const result=callback(Input ,x=>x*2);
console.log(result)