const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    menu.style.display = 'flex';
}

function close() {
    menu.style.display = 'none';
}

$(window).resize(function() {
    if (window.innerWidth >= 768) {
        show();
    } else {
        close();
    }
});