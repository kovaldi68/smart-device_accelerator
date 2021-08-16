const accordion = document.querySelector('.menu--accordion');

function accordionHandler(event) {
  const eventTarget = event.target;
  if(!(eventTarget.classList.contains('menu__title'))) return;
  if (eventTarget.classList.contains('title--accord-select')) {
    hideAll();
  } else {
    hideAll();
    eventTarget.classList.add('title--accord-select');
    showContent(eventTarget.nextElementSibling);
  }
}

function hideAll() {
  const titleElems = accordion.querySelectorAll('.menu__title');
  const contentElems = accordion.querySelectorAll('.menu__tab');
  Array.from(titleElems).forEach(elem => elem.classList.remove('title--accord-select'));
  Array.from(contentElems).forEach(elem => {
    elem.style.height = '0';
    elem.style.marginTop = '0';
  });
}

function showContent(content) {
  content.style.height = `${content.scrollHeight}px`;
  content.style.marginTop = '36px';
}

accordion.addEventListener('click', accordionHandler);
