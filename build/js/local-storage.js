(() => {
  const questionForm = document.querySelector('.form--question');
  const userName = questionForm.querySelector('[name = user-name]');
  const userPhoneNumber = questionForm.querySelector('[name = user-tel]');
  const userText = questionForm.querySelector('[name = user-text]');

  const callBackForm = document.querySelector('.form--callback');
  const callBackUserName = callBackForm.querySelector('[name = user-name]');
  const callBackUserPhoneNumber = callBackForm.querySelector('[name = user-tel]');
  const callBackUserText = callBackForm.querySelector('[name = user-text]');

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
    evt.preventDefault();
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
