const prompt=require("prompt-sync")()

class car{
    constructor(Make,Model,Year){
        this.Make=Make
        this.Model=Model
        this.Year=Year
    }
    showDetails(){
        console.log(`Car Details: ${this.Model} ${this.Make} ${this.Year}`)
    }
}
const make=prompt("Enter the make of the car:")
const model=prompt("Enter the model of the car:")
const year=prompt("Enter the year of the car:")

const mycar=new car(make,model,year)
mycar.showDetails()