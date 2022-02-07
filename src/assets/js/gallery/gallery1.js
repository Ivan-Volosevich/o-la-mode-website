import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const modalPopupGallery = document.querySelector('#modal-popup-gallery1');
    const openGallery1 = document.querySelectorAll('[data-open-gallery1]');
    const closePopup = document.querySelector('.modal-gallery-content-close1');
    const paginationGallery1 = document.querySelector('#pagin-gallery1');
    const photosGallery1 = document.querySelectorAll('[data-gallery1]');
    let paginCounter = 1;

    for(let openGalleryLink of openGallery1) {
        openGalleryLink.onclick = function() {
            const swiperFirst = new Swiper('.swiper', {
                loop: true,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        
                initialSlide: +openGalleryLink.dataset.openGallery1,
            });
            paginCounter = (+openGalleryLink.dataset.openGallery1+1)
            paginationGallery1.innerHTML = paginCounter + '/' + photosGallery1.length;
            modalPopupGallery.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    document.querySelector('.swiper-button-next1').onclick = function() {
        paginCounter === photosGallery1.length ? paginCounter = 1 : paginCounter++;
        paginationGallery1.innerHTML = paginCounter + '/' + photosGallery1.length;
    }

    document.querySelector('.swiper-button-prev1').onclick = function() {
        paginCounter === 1 ? paginCounter = photosGallery1.length : paginCounter--;
        paginationGallery1.innerHTML = paginCounter + '/' + photosGallery1.length;
    }

    photosGallery1.onclick = function() {
        console.log('click')
        paginationGallery1.innerHTML = paginationGallery1.dataset.gallery1 + '/' + photosGallery1.length
    }

    modalPopupGallery.onclick = function(e) {
        if (e.target == modalPopupGallery) {
            modalPopupGallery.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    closePopup.onclick = function(e) {
        modalPopupGallery.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
})