const navbar = document.querySelector('#navbar');
const navbarBrand = document.querySelector('.navbar-brand');

scrollNavFunc = () => {
	if (window.scrollY >= 20) {
		navbar.classList.add('nav-scrolled');
		navbar.classList.remove('nav-not-scrolled');
		navbarBrand.style.transform = 'scale(0.85)';
	} else {
		navbar.classList.add('nav-not-scrolled');
		navbar.classList.remove('nav-scrolled');
		navbarBrand.style.transform = 'scale(1)';
	}
};

window.addEventListener('scroll', scrollNavFunc);
