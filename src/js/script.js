const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.skills__progress-count'),
    lines = document.querySelectorAll('.skills__progress-scale span');

counter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



