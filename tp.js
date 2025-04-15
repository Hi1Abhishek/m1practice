const prompt=require("prompt-sync")()

class shape{
    area(){
        return 0;
    }
}
class Rectangle extends shape{
    constructor(width,height){
        super();
        this.width=width
        this.height=height
    }
    area(){
       return this.width*this.height
    }
}
width=parseFloat(prompt("Enter the width:"))
height=parseFloat(prompt("Enter the height:"))

const result=new Rectangle(width,height)

console.log("Area of Rectangle:",result.area())