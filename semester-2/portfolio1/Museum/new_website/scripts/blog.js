const pathArray = window.location.pathname.split('/');
const query = window.location.search.split('?');
const pagination = document.querySelectorAll('.page-item');

const page = pathArray[1];

if (page === 'blog.html' && query[1] === 'page=1') {
  pagination[0].classList.add('disabled');
} else if (page === 'blog.html' && query[1] === 'page=2') {
  pagination[1].classList.add('disabled');
} else if (page === 'blog.html' && query[1] === 'page=3') {
  pagination[2].classList.add('disabled');
} else {
  pagination[0].classList.add('disabled');
}