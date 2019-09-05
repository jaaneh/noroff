/*
  8. Use vanilla JavaScript to make a request to the URL above and log the results to your console.
*/
const API_URL = 'https://api.cryptonator.com/api/ticker/btc-usd';
const req = new XMLHttpRequest();

req.onreadystatechange = function () {
  // Using readyState 4 which is the DONE state.
  if (req.readyState === 4) {
    console.log(req.responseText)
  }
};

req.open("GET", API_URL);
req.send()