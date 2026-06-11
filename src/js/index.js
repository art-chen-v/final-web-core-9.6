import '../scss/style.scss'

const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.header__icon-button');
const closeBtn = document.querySelector('.sidebar__button--close');

function openMenu() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);