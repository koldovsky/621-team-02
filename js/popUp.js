
const openButton = document.querySelector('.detail_link');
const closeButton = document.querySelector('.popup-close');
const contactButton = document.querySelector('.popup-contact');
const popupWrapper = document.querySelector('.pop-up');
openButton.addEventListener('click', function (e) {
    e.preventDefault();
    popupWrapper.style.display = 'flex';
});

contactButton.addEventListener('click', function (e) { closePopup(e, 'contacts') } );

closeButton.addEventListener('click', function (e) {closePopup(e) });

function closePopup(e, scrollTo) {
    e.preventDefault();
    popupWrapper.style.display = 'none';

    if (scrollTo) {
        document.getElementById(scrollTo).scrollIntoView();
    }
}


