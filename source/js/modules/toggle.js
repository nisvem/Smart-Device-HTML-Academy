document.querySelectorAll('[data-toggle]').forEach((toggle) => {
  let text = toggle.querySelector('[data-toggle-text]');
  let btn = toggle.querySelector('[data-toggle-btn]');


  btn.addEventListener('click', (event)=> {
    event.preventDefault();

    text.classList.toggle('company__texts--closed');
    text.classList.toggle('company__texts--open');

    [btn.dataset.toggleText, btn.innerHTML] = [btn.innerHTML, btn.dataset.toggleText];
  });
});
