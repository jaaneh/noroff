fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((res) => {
        forLoop(res);
    })
    .catch((err) => console.log('fetchError', err))


function forLoop(res) {
    for (i = 0; i < 12; i++) {
        createTodo(res, i);
    }
}


function createTodo(res, i) {
    var row = document.getElementById('row');

    row.innerHTML += '<div class="col-md-3 col-sm-6"><div class="card"><div class="card-body"><p class="card-text" id="id"><b>ID:</b> ' + res[i].id + 
    '</p>\n<p class="card-text"><b>Title:</b> ' + res[i].title + 
    '</p>\n<p class="card-text completed"><b>Completed:</b> ' + res[i].completed + '</p>';
}
