const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


closeMenu.addEventListener('click', close);
openMenu.addEventListener('click', show);

function show() {
    menu.style.display = 'flex';
}

function close() {
    menu.style.display = 'none';
}

// $(window).resize(function() {
//     if (window.innerWidth > 768) {
//         show();
//     } else {
//         close();
//     }
// });