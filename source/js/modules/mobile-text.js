textMobile();

window.addEventListener('resize', textMobile);

function textMobile() {
  if (window.screen.width < 768) {
    document.querySelectorAll('[data-name-mobile]').forEach((el) => {
      el.innerHTML = el.dataset.nameMobile;
    });
  } else {
    document.querySelectorAll('[data-name-desktop]').forEach((el) => {
      el.innerHTML = el.dataset.nameDesktop;
    });
  }
}
