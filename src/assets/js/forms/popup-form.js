import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  const modalPopup = document.querySelector('#modal-popup');
  const form = document.querySelector('#popup-form');
  const closePopup = document.querySelector('.modal-content-close');
  const innerTitlePopup = document.querySelector('#inner-title-popup');
  const inputPopupName = document.querySelector('#popup-form-name');
  const inputPopupPhone = document.querySelector('#popup-form-phone');
  const inputPopupEmail = document.querySelector('#popup-form-email');
  const inputPopupMessage = document.querySelector('#popup-form-message');
  const inputPopupCheckbox = document.querySelector('#popup-form-chbx');
  const warningMessage = document.querySelectorAll('.warning-message');

  const openPopupButton = document.querySelectorAll('[data-popup-open]');

  IMask(inputPopupPhone, {
    mask: '+{1}000-000-0000'
  });

  for(let buttonLinks of openPopupButton) {
    buttonLinks.onclick = function() {
      modalPopup.style.display = 'block';
      innerTitlePopup.innerHTML = buttonLinks.dataset.popupOpen;
      document.body.style.overflow = 'hidden';
    }
  }

  modalPopup.onclick = function(e) {
    if (e.target == modalPopup) {
      modalPopup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  closePopup.onclick = function(e) {
    modalPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  inputPopupMessage.oninput = function() {
    let leftSymbols;
    if (inputPopupMessage.value.length+1 > 412) {
      document.querySelector('.warning-message-textarea').style.display = 'block';
      leftSymbols = 512 - (inputPopupMessage.value.length);
      document.querySelector('.warning-message-textarea').innerHTML = 'Максимум 512 символов. Осталось: ' + leftSymbols + ' символов.'
    } else {
      document.querySelector('.warning-message-textarea').style.display = 'none';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputPopupName.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) && inputPopupName.value.length > 0) {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'name').style.display = 'none';
      inputPopupName.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'name').style.display = 'block';
      inputPopupName.classList.add('warning-frame');
    }

    if (inputPopupPhone.value.length === 14 || inputPopupPhone.value.length < 3) {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'phone').style.display = 'none';
      inputPopupPhone.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'phone').style.display = 'block';
      inputPopupPhone.classList.add('warning-frame');
    }

    if (inputPopupEmail.value.match(/.+@.+\..+./i) && inputPopupEmail.value.length > 0) {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'email').style.display = 'none';
      inputPopupEmail.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'email').style.display = 'block';
      inputPopupEmail.classList.add('warning-frame');
    }

    if (inputPopupCheckbox.checked) {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'chbx').style.display = 'none';
      inputPopupCheckbox.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.popupInput === 'chbx').style.display = 'block';
      inputPopupCheckbox.classList.add('warning-frame');
    }

    
  });

});