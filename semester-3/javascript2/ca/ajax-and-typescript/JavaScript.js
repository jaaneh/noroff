const API_URL = 'https://www.amiiboapi.com/api/amiibo/?name=mario';
const req = new XMLHttpRequest();

req.onreadystatechange = function() {
	// Here I am using one of the 5 readyStates to check if the request reached the "DONE" state.
	if (req.readyState === 4) {
		console.log(req.responseText);
	}
};

req.open('GET', API_URL);
req.send();
