(() => {
  const accordion = document.querySelector('.menu--accordion');
  const menuContent = document.querySelectorAll('.menu__content');

  menuContent.forEach(element => element.classList.remove('menu__content--active'));

  function accordionHandler(event) {
    const eventTarget = event.target;
    if(!(eventTarget.classList.contains('menu__title'))) return;
    if (eventTarget.classList.contains('menu__title--accord-select')) {
      hideAll();
    } else {
      hideAll();
      eventTarget.classList.add('menu__title--accord-select');
      eventTarget.closest('.menu__content').classList.add('menu__content--active');
    }
  }

  function hideAll() {
    const titleElems = accordion.querySelectorAll('.menu__title');
    Array.from(titleElems).forEach(elem => {
      elem.classList.remove('menu__title--accord-select');
      elem.closest('.menu__content').classList.remove('menu__content--active');
    });
  }

  accordion.addEventListener('click', accordionHandler);
})();

(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    const smoothScrolling = function() {
        for (let anchor of anchors) {
          if (anchor.getAttribute('href').substr(1)) {
            anchor.addEventListener('click', function (e) {
              e.preventDefault()

              const blockID = anchor.getAttribute('href').substr(1);

              document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            })
          }
        }
    };

    smoothScrolling();
})();

(() => {
  const questionForm = document.querySelector('.form--question');
  const userName = questionForm.querySelector('[name = user-name]');
  const userPhoneNumber = questionForm.querySelector('[name = user-tel]');
  const userText = questionForm.querySelector('[name = user-text]');

  const submitButtons = document.querySelectorAll('.button--form');

  let isStorageSupport = true;
  let storageName = '';
  let storagePhone = '';
  let storageText = '';

  try {
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('userPhone');
    storageText = localStorage.getItem('userText');
  } catch (err) {
    isStorageSupport = false;
  }

  const storageData = function() {
    if (storageName && storagePhone && storageText) {
      userName.value = storageName;
      userPhoneNumber.value = storagePhone;
      userText.value = storageText;
    }
  };

  const onSubmitButtonHandler = function(evt) {
    const form = evt.target.closest('form');
    const formUserName = form.querySelector('[name = user-name]');
    const formUserPhoneNumber = form.querySelector('[name = user-tel]');
    const formUserText = form.querySelector('[name = user-text]');

    if (isStorageSupport) {
      localStorage.setItem('userName', formUserName.value);
      localStorage.setItem('userPhone', formUserPhoneNumber.value);
      localStorage.setItem('userText', formUserText.value);
    }
  };

  storageData();
  Array.from(submitButtons).forEach(element => element.addEventListener('click', onSubmitButtonHandler));
})();

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 4) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 4);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 7)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});

(() => {
  const callbackModal = document.querySelector('.modal--callback');
  const modalCloseButton = document.querySelector('.button--close');
  const orderCallbackButton = document.querySelector('.button--call-back');
  const callBackUserName = callbackModal.querySelector('[name = user-name]');
  const callBackUserPhoneNumber = callbackModal.querySelector('[name = user-tel]');
  const callBackUserText = callbackModal.querySelector('[name = user-text]');
  const body = document.querySelector('.page-body');
  const tabletMedia = window.matchMedia('(max-width: 1023px)');

  let isStorageSupport = true;
  let storageName = '';
  let storagePhone = '';
  let storageText = '';

  const modalHandler = function() {
    body.classList.add('page-body--modal-opened');
    showUpCallbackModal();
  }

  const matchTabletMedia = function() {
    if (tabletMedia.matches) {
      callbackModal.classList.remove('modal--opened');
      body.classList.remove('page-body--modal-opened');
    }
  }

  const orderCallbackModalHandler = () => {
    callbackModal.classList.remove('modal--opened');
    body.classList.remove('page-body--modal-opened');

    document.removeEventListener('keydown', onEscHandler);
    document.removeEventListener('click', onClickHandler);
  }

  const isEscEvent = (evt) => {
    return evt.key === ('Escape' || 'Esc');
  };

  const showUpCallbackModal = () => {
    callbackModal.classList.add('modal--opened');
    callBackUserName.focus();

    try {
      storageName = localStorage.getItem('userName');
      storagePhone = localStorage.getItem('userPhone');
      storageText = localStorage.getItem('userText');
    } catch (err) {
      isStorageSupport = false;
    }

    if (storageName && storagePhone && storageText) {
      callBackUserName.value = storageName;
      callBackUserPhoneNumber.value = storagePhone;
      callBackUserText.value = storageText;
    }

    document.addEventListener('keydown', onEscHandler);
    document.addEventListener('click', onClickHandler);
  }

  const onEscHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      orderCallbackModalHandler();
    }
  }

  const onClickHandler = (evt) => {
    if (evt.target === document.querySelector('.modal--callback')) {
      orderCallbackModalHandler();
    }
  }

  orderCallbackButton.addEventListener('click', modalHandler);
  modalCloseButton.addEventListener('click', orderCallbackModalHandler);
  window.addEventListener('resize', matchTabletMedia);
})();

(() => {
  const tabletMedia = window.matchMedia('(max-width: 1023px)');
  const textToCut = document.getElementById('cut-text');
  const paragraph = textToCut.textContent;
  const textPosition = textToCut.textContent.indexOf('Дорог');
  const strLength = 'Дорог'.length;
  const lastIndex = +(textPosition + strLength);

  const cutText = function() {
    if (tabletMedia.matches) {
      textToCut.textContent = `${textToCut.textContent.slice(0, lastIndex)}..`;
    } else {
      textToCut.textContent = paragraph;
    }
  }

  window.addEventListener('resize', cutText);
  cutText();
})();
