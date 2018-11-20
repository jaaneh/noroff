//Console.log out elements in JSON file

// var author = require ('./author.json');
var author = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

console.log(author.video[0].id);
console.log(author.video[0].name);
console.log(author.video[0].url);
// console.log(author.video[0].author);

// Set variable to use in forEach loop.
var authorData = author.video[0].author.data;

// Using forEach instead of for.
authorData.forEach(function(data){
  for (var obj in data) {
      if (data.hasOwnProperty(obj)){
         console.log(data[obj]);
      }
  }
});
