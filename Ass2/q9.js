const prompt=require("prompt-sync")()

class car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    showDetails(){
        console.log(`car detais ${this.make} ${this.model} ${this.year}`)
    }

}
const make=prompt("Enter the make of car:")
const model=prompt("Enter the model of car:")
const year=prompt("Enter the year of car:")

const mycar= new car(make,model,year)
mycar.showDetails()
