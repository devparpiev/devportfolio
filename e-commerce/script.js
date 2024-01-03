// Header Scroll Color Change
let Header = document.querySelector('header');

window.addEventListener('scroll', () => {
	Header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu
let Menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

Menu.onclick = () => {
	Menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// Remove Menu on Scroll
window.onscroll = () => {
	Menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};
