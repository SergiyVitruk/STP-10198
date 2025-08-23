const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerLinks = burgerMenuEl.querySelectorAll('a');

function openMenu() {
  burgerMenuEl.dataset.visible = 'open';
}
function closeMenu() {
  burgerMenuEl.dataset.visible = 'close';
}

openBtnEl.addEventListener('click', openMenu);
closeBtnEl.addEventListener('click', closeMenu);

burgerLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', e => {
  if (
    burgerMenuEl.dataset.visible === 'open' &&
    !burgerMenuEl.contains(e.target) &&
    !openBtnEl.contains(e.target)
  ) {
    closeMenu();
  }
});
