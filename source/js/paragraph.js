(() => {
  const tabletMedia = window.matchMedia('(max-width: 1023px)');
  const textToCut = document.getElementById('cut-text');
  const paragraph = textToCut.textContent;
  const textPosition = textToCut.textContent.indexOf('Дорог');
  const strLength = 'Дорог'.length;
  const lastIndex = +(textPosition + strLength);

  const cutText = function() {
    if (tabletMedia.matches) {
      textToCut.textContent = `${textToCut.textContent.slice(0, lastIndex)}..`;
    } else {
      textToCut.textContent = paragraph;
    }
  }

  window.addEventListener('resize', cutText);
})();
