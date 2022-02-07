import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const modalPopupGallery = document.querySelector('#modal-popup-gallery2');
    const openGallery2 = document.querySelectorAll('[data-open-gallery2]');
    const closePopup = document.querySelector('.modal-gallery-content-close2');
    const paginationGallery2 = document.querySelector('#pagin-gallery2');
    const photosGallery2 = document.querySelectorAll('[data-gallery2]');
    let paginCounter = 1;

    for(let openGalleryLink of openGallery2) {
        openGalleryLink.onclick = function() {
            const swiperFirst = new Swiper('.swiper', {
                loop: true,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        
                initialSlide: +openGalleryLink.dataset.openGallery2,
            });
            paginCounter = (+openGalleryLink.dataset.openGallery2+1)
            paginationGallery2.innerHTML = paginCounter + '/' + photosGallery2.length;
            modalPopupGallery.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    document.querySelector('.swiper-button-next2').onclick = function() {
        paginCounter === photosGallery2.length ? paginCounter = 1 : paginCounter++;
        paginationGallery2.innerHTML = paginCounter + '/' + photosGallery2.length;
    }

    document.querySelector('.swiper-button-prev2').onclick = function() {
        paginCounter === 1 ? paginCounter = photosGallery2.length : paginCounter--;
        paginationGallery2.innerHTML = paginCounter + '/' + photosGallery2.length;
    }

    photosGallery2.onclick = function() {
        console.log('click')
        paginationGallery2.innerHTML = paginationGallery2.dataset.gallery1 + '/' + photosGallery2.length
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