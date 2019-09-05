class FavoriteFruit {
	fruit: string;
	constructor(favorite: string) {
		this.fruit = favorite;
	}

	model() {
		return `My favorite fruit is ${this.fruit}`;
	}
}

let myFavFruit = new FavoriteFruit('Apple');
console.log(myFavFruit.model());
