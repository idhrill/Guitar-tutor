'use strict';

document.querySelector('.nav-menu__list').addEventListener('click', function (e) {
    e.preventDefault();
    const clickNav = e.target.closest('[href*="#"]');
    if (!clickNav) return;
    const id = clickNav.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    })

    menuItem.forEach(value => {
        value.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
});

const navContainer = document.querySelector('.main-section__nav-container');
const hamburgerMenu = document.querySelector('.hamburger');

function callBack (entries) {
    if (!entries[0].isIntersecting) {
        navContainer.classList.add('sticky');
        hamburgerMenu.classList.add('sticky-ham');
    } else {
        navContainer.classList.remove('sticky');
        hamburgerMenu.classList.remove('sticky-ham');
    }
}

const observer = new IntersectionObserver(callBack, {threshold: 0.1});
observer.observe(document.querySelector('.main-section__content-container'))

