document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.accordion-icon');
    icon.classList.toggle('rotate');

    const item = button.closest('.accordion-item');
    item.classList.toggle('active');
  });
});
