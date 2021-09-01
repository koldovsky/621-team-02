(function() {
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const pointMenu = document.querySelectorAll('.menu>a');


    closeMenu.addEventListener('click', close);
    openMenu.addEventListener('click', show);


    for (let i = 0; i < pointMenu.length; i++) {
        pointMenu[i].addEventListener('click', close);
    }

    function show() {
        menu.style.display = 'flex';
    }

    function close() {
        if (window.innerWidth < 768) {
            menu.style.display = 'none';
        }
    }

    function showBurgerControls() {
        if (window.innerWidth < 768) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }

    showBurgerControls();
    window.addEventListener('resize', showBurgerControls);
})();