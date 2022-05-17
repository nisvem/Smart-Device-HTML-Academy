document.querySelectorAll('[data-accordion]').forEach((accordion) => {
  accordion.addEventListener('click', ()=> {
    accordion.closest('.footer__section').classList.toggle('footer__section--close');
    accordion.closest('.footer__section').classList.toggle('footer__section--open');
  });
});
