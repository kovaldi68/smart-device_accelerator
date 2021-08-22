(() => {
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
})();
