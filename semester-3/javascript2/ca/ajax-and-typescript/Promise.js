const API_URL = 'https://www.amiiboapi.com/api/amiibo/?name=mario';

fetch(API_URL)
	.then((res) => {
		return res.json();
	})
	.then((json) => console.log(json))
	.catch((err) => console.log(err));
