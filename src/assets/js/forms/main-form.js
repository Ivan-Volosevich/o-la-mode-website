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

  console.log('1: ', warningMessage)
  console.log('ср: ', inputCheckbox.checked)

  inputMessage.addEventListener("keydown",function(e){
    let leftSymbols;
    if (inputMessage.value.length > 411) {
      document.querySelector('.warning-message-textarea').style.display = 'block';
      leftSymbols = 512 - (inputMessage.value.length);
      document.querySelector('.warning-message-textarea').innerHTML = 'Максимум 512 символов. Осталось: ' + leftSymbols + ' символов.'
    } else {
      document.querySelector('.warning-message-textarea').style.display = 'none';
    }
    console.log('2k:', inputMessage.value.length)
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) && inputName.value.length > 0) {
      warningMessage[0].style.display = 'none';
      inputName.classList.remove('warning-frame');
    } else {
      warningMessage[0].style.display = 'block';
      inputName.classList.add('warning-frame');
    }

    if (inputPhone.value.length === 14 || inputPhone.value.length === 0) {
      warningMessage[1].style.display = 'none';
      inputPhone.classList.remove('warning-frame');
    } else {
      warningMessage[1].style.display = 'block';
      inputPhone.classList.add('warning-frame');
    }

    if (inputEmail.value.match(/.+@.+\..+./i) && inputEmail.value.length > 0) {
      warningMessage[2].style.display = 'none';
      inputEmail.classList.remove('warning-frame');
    } else {
      warningMessage[2].style.display = 'block';
      inputEmail.classList.add('warning-frame');
    }

    

    if (inputCheckbox.checked) {
      warningMessage[3].style.display = 'none';
      inputCheckbox.classList.remove('warning-frame');
    } else {
      warningMessage[3].style.display = 'block';
      inputCheckbox.classList.add('warning-frame');
    }

    
  });

  

});