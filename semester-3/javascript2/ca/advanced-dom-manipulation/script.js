const cards = document.querySelector('#cards');

for (i = 0; i < 9; i++) {
	cards.innerHTML += `
  <div id="card" data-loop="${i}">
    <div class="card--topText">This is a test Card for Noroff it is number ${i}</div>
    <hr/>
    <div class="card--byText">By Jan Henning</div>
    <div class="card--whenText">43 minutes ago</div>
    <div class="card--button">
      <a href="#">View on site</a>
    </div>
  </div>
  `;
}
