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

const allLevels = document.getElementById('alllevel');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
var projectL1 = document.querySelectorAll('.p-level1')
var projectL2 = document.querySelectorAll('.p-level2')
var projectL3 = document.querySelectorAll('.p-level3')

allLevels.addEventListener('click', () => {
    projectL1.forEach((project) => {
        project.classList.remove('d-none')
    })
    projectL2.forEach((project) => {
        project.classList.remove('d-none')
    })
    projectL3.forEach((project) => {
        project.classList.remove('d-none')
    })
})

level1.addEventListener('click', () => {
    projectL2.forEach((project) => {
        project.classList.add('d-none')
    })
    projectL3.forEach((project) => {
        project.classList.add('d-none')
    })
    projectL1.forEach((project) => {
        project.classList.remove('d-none')
    })
})

level2.addEventListener('click', () => {
    projectL2.forEach((project) => {
        project.classList.remove('d-none')
    })
    projectL3.forEach((project) => {
        project.classList.add('d-none')
    })
    projectL1.forEach((project) => {
        project.classList.add('d-none')
    })
})

level3.addEventListener('click', () => {
    projectL2.forEach((project) => {
        project.classList.add('d-none')
    })
    projectL3.forEach((project) => {
        project.classList.remove('d-none')
    })
    projectL1.forEach((project) => {
        project.classList.add('d-none')
    })
})