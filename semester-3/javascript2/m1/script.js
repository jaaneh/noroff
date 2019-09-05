// Question 4
var team = document.getElementById('team');
console.log(team.dataset.team);

// Question 5
var span = document.createElement('span');
team.appendChild(span);

// Question 6
var allMyDivs = document.querySelectorAll('.myDiv');

for (var i = 0; i < allMyDivs.length; i++) {
	allMyDivs[i].style.backgroundColor = '#000000';
}

// Question 7
function writeLocalStorage(keyName, keyValue) {
	localStorage.setItem(keyName, keyValue);
}

writeLocalStorage('Name', 'Jan Henning');

// Question 8
function getLocalStorage() {
	var getStorage = localStorage.getItem('Name');
	// Saved to a variable, and can easily be logged to console or used on the website.
	// return getStorage;
}

// Question 9
var appendTextNode = document.getElementById('appendTextNode');
var textNode = document.createTextNode('Hello, World!');
appendTextNode.appendChild(textNode);

// Question 10
// Comment out this code and the text will change from a red colored "Hello from Shadow DOM" to a non-styled "Hello" from the main HTML page..
var shaodwHost = document.querySelector('#shadowHost');
var shadowRoot = shaodwHost.createShadowRoot();
shadowRoot.appendChild(document.querySelector('#template').content);
