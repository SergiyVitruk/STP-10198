document.querySelectorAll('.js-accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.js-accordion-icon');
    icon.classList.toggle('js-rotate');

    const item = button.closest('.js-accordion-item');
    item.classList.toggle('js-active');
  });
});
