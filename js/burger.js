(function() {
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