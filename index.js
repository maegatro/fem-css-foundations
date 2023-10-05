const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const body = document.querySelector('.body');

menu.addEventListener("click", () => {
    nav.classList.add('nav--visible');
    menu.classList.add('hide--menu');
    close.classList.add('show--close');
    body.classList.add('body--no-scroll');
});

close.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    menu.classList.remove('hide--menu');
    close.classList.remove('show--close');
    body.classList.remove('body--no-scroll');
})