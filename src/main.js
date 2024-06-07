const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.mobile-menu-items');

openMenu.addEventListener('click', () => {
    openMenu.classList.add('d-none');
    closeMenu.classList.remove('d-none');
    menu.classList.remove('d-none');
})

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove('d-none');
    menu.classList.add('d-none');
    closeMenu.classList.add('d-none');
})