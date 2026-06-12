import '../scss/style.scss'

// Swiper logic
let swipers = [];

function destroySwipers() {
    swipers.forEach(s => s.destroy(true, true));
    swipers = [];
}

function initSwiper() {
    const isMobile = window.innerWidth <= 500;
    const elements = document.querySelectorAll('.swiper');

    if (!isMobile) {
        destroySwipers();
        return;
    }

    if (swipers.length) return;

    elements.forEach(el => {
        swipers.push(new Swiper(el, {
            slidesPerView: 1.3,
            spaceBetween: 16,
            loop: true,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
        }));
    });
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
// Brands
const brandsButton = document.querySelector('.brands__button--read-more');

brandsButton.addEventListener('click', () => {
    let list = document.querySelector('.brands__list');
    let buttonText = brandsButton.querySelector('.brands__button-text');
    let buttonIcon = brandsButton.querySelector('.brands__button-icon');

    list.classList.toggle('is-collapsed');
    if (list.classList.contains('is-collapsed')) {
        buttonText.textContent = 'Показать все';
        buttonIcon.src = './img/expand.svg'
    } else {
        buttonText.textContent = 'Скрыть';
        buttonIcon.src = './img/collapse.svg'
    }
});

// Equipment
const equipmentButton = document.querySelector('.equipment__button--read-more');

equipmentButton.addEventListener('click', () => {
    let list = document.querySelector('.equipment__list');
    let buttonText = equipmentButton.querySelector('.equipment__button-text');
    let buttonIcon = equipmentButton.querySelector('.equipment__button-icon');
    list.classList.toggle('is-collapsed');
    if (list.classList.contains('is-collapsed')) {
        buttonText.textContent = 'Показать все';
        buttonIcon.src = './img/expand.svg'
    } else {
        buttonText.textContent = 'Скрыть';
        buttonIcon.src = './img/collapse.svg'
    }
});