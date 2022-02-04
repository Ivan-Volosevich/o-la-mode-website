import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#main-form');
  const inputName = document.querySelector('#main-form-name');
  const inputPhone = document.querySelector('#main-form-phone');
  const inputEmail = document.querySelector('#main-form-email');
  const inputMessage = document.querySelector('#main-form-message');
  const inputCheckbox = document.querySelector('#main-form-chbx');
  const warningMessage = document.querySelectorAll('.warning-message');

  IMask(inputPhone, {
    mask: '+{1}000-000-0000'
  });

  inputMessage.oninput = function() {
    let leftSymbols;
    if (inputMessage.value.length+1 > 412) {
      document.querySelector('.warning-message-textarea').style.display = 'block';
      leftSymbols = 512 - (inputMessage.value.length);
      document.querySelector('.warning-message-textarea').innerHTML = 'Максимум 512 символов. Осталось: ' + leftSymbols + ' символов.'
    } else {
      document.querySelector('.warning-message-textarea').style.display = 'none';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) && inputName.value.length > 0) {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'name').style.display = 'none';
      inputName.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'name').style.display = 'block';
      inputName.classList.add('warning-frame');
    }

    if (inputPhone.value.length === 14 || inputPhone.value.length < 3) {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'phone').style.display = 'none';
      inputPhone.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'phone').style.display = 'block';
      inputPhone.classList.add('warning-frame');
    }

    if (inputEmail.value.match(/.+@.+\..+./i) && inputEmail.value.length > 0) {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'email').style.display = 'none';
      inputEmail.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'email').style.display = 'block';
      inputEmail.classList.add('warning-frame');
    }

    if (inputCheckbox.checked) {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'chbx').style.display = 'none';
      inputCheckbox.classList.remove('warning-frame');
    } else {
      Array.prototype.find.call(warningMessage, el => el.dataset.input === 'chbx').style.display = 'block';
      inputCheckbox.classList.add('warning-frame');
    }

    
  });

});