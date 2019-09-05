// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
var apiUrl = 'https://api.magicthegathering.io/v1/cards';
var cards = document.getElementById('cards');
var searchBtn = document.getElementById('searchButton');
var searchField = document.getElementById('search');

// Fetch data once loaded.
document.addEventListener('DOMContentLoaded', mainFetch());

// Fetch API for all cards.
function mainFetch() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => apiResponse(res))
        .catch(err => console.log(err))
}

    // Display cards
function apiResponse(res) {
    // Check to see if fetched array is empty. 
    if(res.cards.length > 0) {
        for(var i = 0; i < res.cards.length; i++) {
            cards.innerHTML += '<div class="col-sm-4"><div class="card-container"><h4>' + res.cards[i].name + '</h4><img src="' + res.cards[i].imageUrl + 
            '" width="100%"><a href="card-specific.html?id=' + res.cards[i].id + '" class="btn btn-success">View More</a>';
        }
    } else {
        cards.innerHTML = 'No matches.';
    }
}



// Search field

/*
Search button trigger click event.
    This event should delete all content in 'cards' div.
Get value from search text input.
Make API call, return all results.
    Filter through results for value from search text input.
        If any results were found, add to a new array.
            Display this array as HTML, like 'cards', but only value searched for should display. (whole card)
        If NO results were found, display suitable message.
*/

searchBtn.addEventListener('click', function() {
    cards.innerHTML = ''; // Empty 'cards' div for content.

    // Check if anything had been entered in search field. Display message if empty.
    if (searchField.value) {
        searchAPI();
    } else {
        cards.innerHTML = 'Search field cannot be empty.';
    }
})

function searchAPI() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {

            var searchFor = [];
            searchFor.push(searchField.value)
            var searchRes = [];

            function matcher(regexp) {
                return function (obj) {
                  var found = false;

                  Object.keys(obj).forEach(function(key){
                      if (!found) {
                          if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
                              found = true;
                          }
                      }
                  });
                return found;
                };
            }
                      
            searchFor.forEach(function(needle) {
                var regex = new RegExp("\\b" + needle + "\\b", 'i');
                var matches = res.cards.filter(matcher(regex));
                searchRes.push(matches);

                console.log(searchRes[0].length + ' match(es) for ' + searchFor); // console.log amount of matches for entered text.

                // Display each result in a new div.
                if (searchRes[0].length > 0) {
                    for(var i = 0; i < searchRes[0].length; i++) {
                        cards.innerHTML += '<div class="col-sm-4"><div class="card-container"><h4>' + searchRes[0][i].name + '</h4><img src="' + searchRes[0][i].imageUrl + 
                        '" width="100%"><a href="card-specific.html?id=' + searchRes[0][i].id + '" class="btn btn-success">View More</a>';
                    }
                } else {
                    cards.innerHTML = 'No matches.';
                }
            });
        })
        .catch(err => console.log(err))
}