
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-input-checkbox]').forEach((input) => {
    input.nextElementSibling.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        if (input.checked === true) {
          input.checked = false;
        } else {
          input.checked = true;
        }
      }
    });
  });

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);
      if (blockID.length !== 0) {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
