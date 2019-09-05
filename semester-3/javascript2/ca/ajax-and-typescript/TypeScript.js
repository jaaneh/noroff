var FavoriteFruit = /** @class */ (function () {
    function FavoriteFruit(favorite) {
        this.fruit = favorite;
    }
    FavoriteFruit.prototype.model = function () {
        return "My favorite fruit is " + this.fruit;
    };
    return FavoriteFruit;
}());
var myFavFruit = new FavoriteFruit('Apple');
console.log(myFavFruit.model());
