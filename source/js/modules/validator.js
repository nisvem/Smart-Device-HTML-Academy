
const forms = document.querySelectorAll('[data-form]');

forms.forEach((form) => {
  const name = form.querySelector('[data-input-name]');
  const phone = form.querySelector('[data-input-phone]');
  const check = form.querySelector('[data-input-checkbox]');
  const textarea = form.querySelector('[data-input-textarea]');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (phone.value.length < 17 || !name.value || !check.checked) {

      if (!name.value) {
        name.classList.remove('form__input--error');
        name.classList.add('form__input--error');
      } else {
        name.classList.remove('form__input--error');
      }

      if (phone.value.length < 17) {
        phone.classList.remove('form__input--error');
        phone.classList.add('form__input--error');
      } else {
        phone.classList.remove('form__input--error');
      }

      if (!check.checked) {
        check.classList.remove('form__input--error');
        check.classList.add('form__input--error');
      } else {
        check.classList.remove('form__input--error');
      }

    } else {
      evt.preventDefault();

      // Тут отправить форму Ajax'ом


      name.value = '';
      phone.value = '';
      textarea.value = '';
      check.checked = false;
    }
  });
});


// Код взят с сайта и доработан https://newqos.com/zametki-yuzera/42-maska-vvoda-nomera-telefona-na-chistom-js

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('[data-input-phone]'), function (input) {
    let keyCode;
    function mask(event) {

      if (event.keyCode) {
        keyCode = event.keyCode;
      }
      let pos = input.selectionStart;
      if (pos < 3) {
        event.preventDefault();
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = input.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, input.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(input.value) || input.value.length < 5 || keyCode > 47 && keyCode < 58) {
        input.value = newValue;
      }
      if (event.type === 'blur' && input.value.length < 5) {
        input.value = '';
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });

});
