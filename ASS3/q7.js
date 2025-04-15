var Mystorage = /** @class */ (function () {
    function Mystorage() {
    }
    Mystorage.prototype.store = function (value) {
        this.data = value;
    };
    Mystorage.prototype.retrieve = function () {
        return this.data;
    };
    return Mystorage;
}());
var numstorage = new Mystorage();
numstorage.store(22);
console.log(numstorage.retrieve());
var strstore = new Mystorage();
strstore.store("Shravanii");
console.log(strstore.retrieve());
