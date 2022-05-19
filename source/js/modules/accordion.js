let accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach((accordion) => {
  accordions.forEach((ac) => {
    ac.closest('.footer__section').classList.remove('footer__section--open');
  });

  accordion.addEventListener('click', ()=> {
    if (accordion.closest('.footer__section').classList.contains('footer__section--open')) {
      accordion.closest('.footer__section').classList.remove('footer__section--open');
    } else {
      accordions.forEach((ac) => {
        ac.closest('.footer__section').classList.remove('footer__section--open');
      });
      accordion.closest('.footer__section').classList.add('footer__section--open');
    }
  });
});
