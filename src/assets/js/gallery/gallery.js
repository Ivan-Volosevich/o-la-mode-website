import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const modalPopupGallery = document.querySelector('#modal-popup-gallery');
    const openGallery = document.querySelectorAll('[data-open-gallery]');

    // const closePopup = document.querySelector('.modal-content-close');

    for(let openGalleryLink of openGallery) {
        openGalleryLink.onclick = function() {
            const swiperFirst = new Swiper('.swiper', {
                // Optional parameters
                loop: true,
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        
                initialSlide: +openGalleryLink.dataset.openGallery,
            });

            modalPopupGallery.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    modalPopupGallery.onclick = function(e) {
        if (e.target == modalPopupGallery) {
            modalPopupGallery.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // closePopup.onclick = function(e) {
    //     modalPopupGallery.style.display = 'none';
    //     document.body.style.overflow = 'auto';
    // }
})