// (() => {
//   const submitButton = document.querySelectorAll('button--form');
//   const userName = document.querySelectorAll('[name = user-name]');
//   const userPhoneNumber = document.querySelectorAll('[name = user-tel]');
//   const userText = document.querySelectorAll('[name = user-text]');

//     const onSubmitButtonHandler = function() {
//       if (isStorageSupport) {
//         localStorage.setItem('userName', nameInput.value);
//         localStorage.setItem('userPhone', phoneInput.value);
//       }
//     };

//     let isStorageSupport = true;
//     let storageName = '';
//     let storagePhone = '';
//     let storageText = '';

//     try {
//       storageName = localStorage.getItem('userName');
//       storagePhone = localStorage.getItem('userPhone');
//       storageText = localStorage.getItem('userText');
//     } catch (err) {
//       isStorageSupport = false;
//     }

//     const localStorage = function() {
//       if (storageName && storagePhone && storageText) {
//         nameInput.value = storageName;
//         phoneInput.value = storagePhone;
//       }
//     };

//     submitButton.addEventListener('click', onSubmitButtonHandler);
// })();
