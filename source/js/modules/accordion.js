document.querySelectorAll('[data-accordion]').forEach((accordion) => {
  accordion.addEventListener('click', ()=> {
    accordion.closest('.footer__section').classList.toggle('is--close');
    accordion.closest('.footer__section').classList.toggle('is--open');
  });
});
