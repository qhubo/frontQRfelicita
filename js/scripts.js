/* Start Bootstrap - Small Business v5.0.6. Copyright 2013-2023 Start Bootstrap. MIT license. */
const menuButton = document.querySelector('.navbar-toggler');
const menu = document.getElementById('menu-principal');
function closeMenu() {
    menu.classList.remove('show');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
}
menuButton.addEventListener('click', () => {
    const expanded = menu.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Cerrar menú' : 'Abrir menú');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('show')) {
        closeMenu();
        menuButton.focus();
    }
});
