import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
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
    loop: true,
    modules: [Autoplay],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
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
    loop: true,
    modules: [Autoplay],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
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
    loop: true,
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
new Swiper('.story__long-news__slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
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
            slidesPerView: 2,
        },
    },
});
new Swiper('.letters__slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    slidesOffsetBefore: 2,
    navigation: {
        nextEl: '.letters__slider-next',
        prevEl: '.letters__slider-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },
        520: {
            slidesPerView: 2,
        },
        720: {
            slidesPerView: 3,
        },
        820: {
            slidesPerView: 4,
        },
    },
});
new Swiper('.project-slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
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
new Swiper('.project__examples__slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    slidesOffsetBefore: 2,

    navigation: {
        nextEl: '.project__examples-prev',
        prevEl: '.project__examples-next',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 4,
        },
    },
});
new Swiper('.home__reviews-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    slidesOffsetBefore: 2,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 4,
        },
    },
});

if (document.querySelector('.home__working-row')) {
    new Accordion('.home__working-row');
}
if (document.querySelector('.home__question-row__items')) {
    new Accordion('.home__question-row__items');
}

const customTriggers = document.querySelectorAll('.ac-trigger-custom');
customTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const item = trigger.closest('.ac');
        if (!item) return;
        const trueTrigger = item.querySelector('.ac-trigger');
        if (!trueTrigger) return;
        trueTrigger.click();
    });
});

const { innerWidth } = window;
const isMobile = innerWidth < 1200;

if (isMobile) {
    const menuList = document.querySelector('.mobile-menu__list');
    const submenuButtons = document.querySelectorAll('.menu-item-has-children > a');
    submenuButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
			const currentMenu = button.closest('.menu-item-has-children');
            const currentSubmenu = currentMenu.querySelector('.sub-menu');
            const isOpened = currentSubmenu.classList.contains('opened');
            if (isOpened) {
                currentSubmenu.classList.remove('opened');
                return;
            }

            const openedElement = menuList.querySelector('.sub-menu.opened');
            if (openedElement) {
                openedElement.classList.remove('opened');
            }

            currentSubmenu.classList.add('opened');
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
