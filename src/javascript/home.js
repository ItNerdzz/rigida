import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Accordion from 'accordion-js';

new Swiper('.home__factory-slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 2,
    navigation: {
        nextEl: '.home__factory-slider__next',
        prevEl: '.home__factory-slider__prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
        },
    },
});


new Swiper('.home__client-slider', {
	slidesPerView: 4,
	spaceBetween: 0,
	loop:true,
	breakpoints: {
		0: {
			slidesPerView: 2,
		},

		720: {
			slidesPerView: 3,
		},
		1110: {
			slidesPerView: 4,
		},
	},

});
new Swiper('.home__partners-slider', {
	slidesPerView: 4,
	spaceBetween: 0,
	loop:true,
	breakpoints: {
		0: {
			slidesPerView: 2,
		},

		720: {
			slidesPerView: 3,
		},
		1110: {
			slidesPerView: 4,
		},
	},

});
new Swiper('.cooperation__projects-slider', {
	modules: [Navigation],
	slidesPerView: 2,
	spaceBetween: 20,
	loop:true,
	slidesOffsetBefore: 2,
	navigation: {
		nextEl: '.cooperation__projects-slider__next',
		prevEl: '.cooperation__projects-slider__prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1.2,
		},
		720: {
			slidesPerView: 2,
		},
		820: {
			slidesPerView: 4,
		},
	},
});


new Accordion(['.home__working-row', '.home__question-row__items']);

const { innerWidth } = window;
const isMobile = innerWidth < 1200;

if (isMobile) {
    const menuList = document.querySelector('.header__nav-list');
    const submenuButtons = document.querySelectorAll('.header__nav-submenu__button');
    submenuButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentSubmenu = button.querySelector('.header__nav-submenu');
            const isOpened = !currentSubmenu.classList.contains('closed');
            if (isOpened) {
                currentSubmenu.classList.add('closed');
                return;
            }

            const openedElement = menuList.querySelector('.header__nav-submenu:not(.closed)');
            if (openedElement) {
                openedElement.classList.add('closed');
            }

            currentSubmenu.classList.remove('closed');
        });
    });

    const burgerButton = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    burgerButton.addEventListener('click', (e) => {
        nav.classList.toggle('opened');
        burgerButton.classList.toggle('opened');

        const currentOverflow = document.body.style.getPropertyValue('overflow');
        document.body.style.overflow = currentOverflow === 'hidden' ? 'initial' : 'hidden';
    });
}
