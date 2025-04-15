const prompt=require("prompt-sync")()

class shape{
    area(){
        return 0;
    }
}

class rectangel extends shape{
    constructor(width,height){
        super();
        this.width=width
        this.height=height
        
    }

    area(){
        return this.width * this.height
    }
}
const width=parseFloat(prompt("Enter a width:"))
const height=parseFloat(prompt("Enter a height:"))

const result= new rectangel(width,height)
console.log("Area of Rectangle:",result.area())