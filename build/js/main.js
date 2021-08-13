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
