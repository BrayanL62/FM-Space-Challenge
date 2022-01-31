const btn = document.querySelector('.icon__hamburger');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    navbar.classList.toggle('navbar__hidden')
})