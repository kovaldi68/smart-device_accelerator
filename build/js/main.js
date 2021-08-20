const accordion = document.querySelector('.menu--accordion');

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

const callbackModal = document.querySelector('.modal--callback');
const modalCloseButton = document.querySelector('.button--close');
const orderCallbackButton = document.querySelector('.button--call-back');
const body = document.querySelector('.page-body');
const tabletMedia = window.matchMedia('(max-width: 1023px)');

const modalHandler = function() {
  callbackModal.classList.add('modal--opened');
  body.classList.add('page-body--modal-opened');
}

orderCallbackButton.addEventListener('click', modalHandler);

const matchTabletMedia = function() {
  if (tabletMedia.matches) {
    callbackModal.classList.remove('modal--opened');
    body.classList.remove('page-body--modal-opened');
  }
}

window.addEventListener('resize', matchTabletMedia);

// (() => {
//     const anchors = document.querySelectorAll('a[href*="#"]');

//     const smoothScrolling = function() {
//         for (let anchor of anchors) {
//           anchor.addEventListener('click', function (e) {
//             e.preventDefault()

//             const blockID = anchor.getAttribute('href').substr(1);

//             document.getElementById(blockID).scrollIntoView({
//               behavior: 'smooth',
//               block: 'start'
//             });
//           })
//         }
//     };

//     smoothScrolling();
// })();

// (() => {
//   const pageHeader = document.querySelector('.page-header');
//   const menuToggle = document.querySelector('.page-header__toggle');
//   const mediaDesktop = window.matchMedia('(min-width: 1024px)');
//   const body = document.body;

//   pageHeader.classList.remove('page-header--nojs');

//   const onMenuHandler = (evt) => {
//     evt.preventDefault();
//     const headerHeight = pageHeader.offsetHeight;

//     if (pageHeader.classList.contains('page-header--opened')) {
//       pageHeader.classList.remove('page-header--opened')
//       body.classList.remove('page-body--menu-opened')
//       body.style.paddingTop = 0;
//     } else {
//       pageHeader.classList.add('page-header--opened')
//       body.classList.add('page-body--menu-opened')
//       body.style.paddingTop = `${headerHeight}px`;
//     }
//   };

//   const closeHeader = () => {
//     if (mediaDesktop.matches) {
//       body.style.paddingTop = 0;
//       pageHeader.classList.remove('page-header--opened');
//       body.classList.remove('page-body--menu-opened')
//     }
//   };

//   menuToggle.addEventListener('click', onMenuHandler);
//   window.addEventListener('resize', closeHeader);
// })();


// (() => {
//     const submitButton = document.querySelector('.button--submit');
//     const nameInput = document.querySelector('.form__input--name');
//     const phoneInput = document.querySelector('.form__input--phone');

//     const onSubmitButtonHandler = function() {
//       if (isStorageSupport) {
//         localStorage.setItem('userName', nameInput.value);
//         localStorage.setItem('userPhone', phoneInput.value);
//       }
//     };

//     let isStorageSupport = true;
//     let storageName = '';
//     let storagePhone = '';

//     try {
//       storageName = localStorage.getItem('userName');
//       storagePhone = localStorage.getItem('userPhone');
//     } catch (err) {
//       isStorageSupport = false;
//     }

//     const localStorage = function() {
//       if (storageName && storagePhone) {
//         nameInput.value = storageName;
//         phoneInput.value = storagePhone;
//       }
//     };

//     submitButton.addEventListener('click', onSubmitButtonHandler);
// })();
