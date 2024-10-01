const POPUP_CLASSNAME_HIDDEN = 'popup-hidden';
const POPUP_CLASSNAME_SHOW = 'popup-show';
const POPUP_DURATION = 450;

window.addEventListener('load', function () {
    document.body.addEventListener('click', handlePopupActions);
});

function handlePopupActions(e) {
    const openButton = e.target.closest('.open-popup');
    const closeButton = e.target.closest('.close-popup');
    const isPopupContainer = e.target.classList.contains('popup__container');

    if (openButton) {
        openPopup(openButton);
    } else if (closeButton) {
        closePopup(closeButton.closest('.popup'));
    } else if (isPopupContainer) {
        closePopup(e.target.closest('.popup__container'));
    }
}

function openPopup(button) {
    const popupSelector = button.dataset?.popup;
    const popup = document.querySelector(`.popup[data-popup="${popupSelector}"]`);

    if (!popup) {
        throw new Error('Popup to be opened is not found');
    }

    const openedPopup = document.querySelector('.popup.popup-show');
    if (openedPopup) {
        fadeOut(openedPopup);
    }

    fadeIn(popup);
    toggleBodyStatic(true);
}

function closePopup(popup) {
    if (!popup) {
        throw new Error('Popup to be closed is not found');
    }

    fadeOut(popup);
    toggleBodyStatic(false);
}

function toggleBodyStatic(isStatic) {
    if (isStatic) {
        document.body.classList.add('static');
    } else {
        document.body.classList.remove('static');
    }
}

function fadeIn(el) {
    el.style.display = 'flex';
    setTimeout(() => {
        el.classList.add(POPUP_CLASSNAME_SHOW);
        el.classList.remove(POPUP_CLASSNAME_HIDDEN);
    }, POPUP_DURATION);
}

function fadeOut(el) {
    el.classList.remove(POPUP_CLASSNAME_SHOW);
    el.classList.add(POPUP_CLASSNAME_HIDDEN);
    setTimeout(() => {
        el.style.display = 'none';
    }, POPUP_DURATION);
}

document.addEventListener( 'wpcf7mailsent', function( event ) {
	const popup = document.querySelector(`.popup[data-popup="home-thank-you"]`);

	if (!popup) {
		throw new Error('Popup to be opened is not found');
	}

	const openedPopup = document.querySelector('.popup.popup-show');
	if (openedPopup) {
		fadeOut(openedPopup);
	}

	fadeIn(popup);
	toggleBodyStatic(true);
}, false );
