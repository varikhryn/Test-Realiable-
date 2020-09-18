document.addEventListener('DOMContentLoaded', function () {

    let btnShowMenu = document.getElementById('show_menu');
    btnShowMenu.onclick = openMenu;

    let btnCloseMenu = document.getElementById('close_menu');

    btnCloseMenu.onclick = closeMenu;
});

function openMenu() {
    let menu = document.getElementById('menu');
    menu.classList.add('active-show-menu');
}

function closeMenu() {
    let menu = document.getElementById('menu');
    menu.classList.remove('active-show-menu');
}