import '../scss/style.scss'

// Swiper logic
let swiper = null;

function initSwiper() {
    if (window.innerWidth <= 500) {
        if (!swiper) {
            swiper = new Swiper('.swiper', {
                slidesPerView: 1.3,
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);

// Sidebar logic
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

// Expand / Collapse logic
const button = document.querySelector('.brands__button--read-more');
const list = document.querySelector('.brands__list');
const buttonText = button.querySelector('.brands__button-text');
const buttonIcon = button.querySelector('.brands__button-icon');

button.addEventListener('click', () => {

    list.classList.toggle('is-collapsed');
    if (list.classList.contains('is-collapsed')) {
        buttonText.textContent = 'Показать все';
        buttonIcon.src = './img/expand.svg'
    } else {
        buttonText.textContent = 'Скрыть';
        buttonIcon.src = './img/collapse.svg'
    }
});