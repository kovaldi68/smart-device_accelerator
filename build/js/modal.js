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
