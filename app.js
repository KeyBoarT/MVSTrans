const btnMenu = document.querySelector('.fa-bars');
const btnCloseMenu = document.querySelector('.fa-xmark');
const menu = document.querySelector('.nav-links');
const services = document.querySelector('#services');
const facilities = document.querySelector('#facilities');

services.addEventListener('click', () => {
    facilities.scrollIntoView({behavior: 'smooth'});
});

function showMenu() {
    menu.style.right = '0';
}

function closeMenu() {
    menu.style.right = '-200px'
}