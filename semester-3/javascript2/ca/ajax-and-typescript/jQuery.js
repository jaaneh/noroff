const API_URL = 'https://www.amiiboapi.com/api/amiibo/?name=mario';

$.getJSON(API_URL, (json) => {
	console.log(json);
});
