const accordion = document.querySelector('.menu--accordion');
accordion.addEventListener('click', accordionHandler);
function accordionHandler(event) {
  const eventTarget = event.target;
  if(eventTarget.tagName !== 'h3') return;
  if (eventTarget.classList.contains('title--accord-select')) {
    hideAll();
  } else {
    hideAll();
    eventTarget.classList.add('title--accord-select');
    showContent(eventTarget.nextElementSibling);
  }
}

function hideAll() {
  const titleElems = accordion.querySelectorAll('h3');
  const contentElems = accordion.querySelectorAll('div');
  titleElems.forEach(elem => elem.classList.remove('title--accord-select'));
  contentElems.forEach(elem => elem.style.height = '0');
}

function showContent(content) {
  content.style.height = `${content.scrollHeight}px`;
}
