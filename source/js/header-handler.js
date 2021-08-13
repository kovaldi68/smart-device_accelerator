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
