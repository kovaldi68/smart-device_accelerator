const callbackModal = document.querySelector('.modal--callback');
const modalCloseButton = document.querySelector('.button--close');
const orderCallbackButton = document.querySelector('.button--call-back');
const body = document.querySelector('.page-body');
const tabletMedia = window.matchMedia('(max-width: 1023px)');
const userName = document.getElementById('callback-user-name');
const userPhoneNumber = document.getElementById('callback-user-tel');
const userText = callbackModal.querySelector('[name = user-text]');

const modalHandler = function() {
  body.classList.add('page-body--modal-opened');
}

orderCallbackButton.addEventListener('click', modalHandler);

const matchTabletMedia = function() {
  if (tabletMedia.matches) {
    callbackModal.classList.remove('modal--opened');
    body.classList.remove('page-body--modal-opened');
  }
}

const buyTourModalHandler = () => {
  callbackModal.classList.remove('modal--opened');

  document.removeEventListener('keydown', onEscHandler);
  document.removeEventListener('click', onClickHandler);
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const showUpModal = () => {
  callbackModal.classList.add('modal--opened');
  storageData();
  userBuyNumber.focus();

  document.addEventListener('keydown', onEscHandler);
  document.addEventListener('click', onClickHandler);
}

const onEscHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    buyTourModalHandler()
  }
}

const onClickHandler = (evt) => {
  if (evt.target === document.querySelector('.modal--callback')) {
    buyTourModalHandler();
  }
}

window.addEventListener('resize', matchTabletMedia);
