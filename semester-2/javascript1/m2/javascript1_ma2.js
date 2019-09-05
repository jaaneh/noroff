//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function House() {
    this.color = 'red';
}

House.prototype.addColor = function() {
    console.log('My house is big, square and bright ' + this.color + '.');
}

var ourHouse = new House();
ourHouse.addColor();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numArray = [1,2,3,4,5,6,7,8,9,10]
var numArrSlice = numArray.slice(4,5);
console.log(numArrSlice);


//3. Delete the last number in the array that you created above.
delete numArray[9];
// using numArray.pop() also works.

console.log(numArray);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
function replacement() {
    var str = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
    var string = str.toLowerCase();

    string = string.replace(/strawberries/g, 'bananas').replace(/strawberry/g, 'banana');

    console.log(string);
}
replacement();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var btnArr = ['Barcelona', 'Chelsea', 'Liverpool', 'Real Madrid'];
console.log(btnArr);

button.addEventListener(
    'click',function(){
        btnArr = []; //Probably won't need this line, but adding for safe measure.
        btnArr = ['Mercedes Benz', 'Porche', 'Lamborghini', 'Rolls Royce'];
        console.log(btnArr);
    }
);


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
    {name: 'Alice', age: '22'},
    {name: 'Richard', age: '25'},
    {name: 'Tom', age: '23'},
]

var peopleFilter = people.filter(function(nameFilter){
    return (nameFilter.name === "Richard");
})

console.log(peopleFilter);


//7. Create a simple function that logs the date.
function date() {
    console.log(Date());
}

date();
