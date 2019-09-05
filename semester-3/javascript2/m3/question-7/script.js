/* 
  7. Use a JavaScript promise to retrieve data from the following URL: 
  https://api.cryptonator.com/api/ticker/btc-usd console log your result. 
*/
const API_URL = 'https://api.cryptonator.com/api/ticker/btc-usd';

fetch(API_URL)
	.then((res) => {
		return res.json();
	})
	.then((json) => console.log(json))
	.catch((err) => console.log(err));
