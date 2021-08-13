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
