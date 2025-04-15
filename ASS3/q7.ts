class Mystorage<T>{
    private data! :T;

    store (value: T):void{
         this.data=value;
    }
    retrieve ():T{
        return this.data
    }
}

const numstorage= new Mystorage<number>()
numstorage.store(22)
console.log(numstorage.retrieve())

const strstore= new Mystorage<string>()
strstore.store("Shravanii")
console.log(strstore.retrieve())