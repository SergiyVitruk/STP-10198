document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('js-animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.js-fade-right, .js-fade-up').forEach(el => {
    observer.observe(el);
  });
});
