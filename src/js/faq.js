document.querySelectorAll('.js-accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.js-accordion-icon');
    icon.classList.toggle('rotate');

    const item = button.closest('.js-accordion-item');
    item.classList.toggle('active');
  });
});
