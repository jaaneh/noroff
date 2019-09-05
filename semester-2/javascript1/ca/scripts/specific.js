// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");


// ----- My code below this line. -----
var url = 'https://api.magicthegathering.io/v1/cards/';

// Using self-executing function to manage variable scopes. 
(function() {
    // Check to see if 'id' url query is empty.
    if (id) {
        var cardImage = document.getElementById('cardImage');
        var cardDetails = document.getElementById('cardDetails');

    fetch(url + id)
        .then(res => res.json())
        .then(res => {
            cardImage.innerHTML += '<img src="' + res.card.imageUrl + '" width="100%">';
            cardDetails.innerHTML += '<h2>' + res.card.name + '</h2>';
            cardDetails.innerHTML += '<div><b>About:  </b>' + res.card.text + '</div>';
            cardDetails.innerHTML += '<div><b>Rarity: </b>' + res.card.rarity + '</div>';
            cardDetails.innerHTML += '<div><b>Color: </b>' + res.card.colors[0] + '</div>';
        })
        .catch(err => console.log(err))
    } else {
        document.getElementById('cardDetails').innerHTML = '<h1>No query string.</h1>';
    }
})()