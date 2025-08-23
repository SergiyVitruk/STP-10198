import Swiper from 'swiper';
import 'swiper/css';

function equalizeCardHeights() {
  const cards = document.querySelectorAll(
    '.swiper-slide.testimonials-card:not(.swiper-slide-duplicate)'
  );
  if (!cards.length) return;

  let maxHeight = 0;
  cards.forEach(card => (card.style.height = 'auto'));
  cards.forEach(card => {
    if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
  });

  if (window.innerWidth >= 1200) maxHeight = 330;
  cards.forEach(card => (card.style.height = maxHeight + 'px'));
}

function duplicateSlidesForLoop() {
  const container = document.querySelector('.swiper-wrapper');
  const slides = container.querySelectorAll('.swiper-slide');
  const slidesPerView = window.innerWidth < 1200 ? 1.73 : 3;
  const minSlides = Math.ceil(slidesPerView) + 1;

  if (slides.length < minSlides) {
    const needed = minSlides - slides.length;
    for (let i = 0; i < needed; i++) {
      const clone = slides[i % slides.length].cloneNode(true);
      container.appendChild(clone);
    }
  }
}

function initTestimonialsSwiper() {
  equalizeCardHeights();
  duplicateSlidesForLoop();

  const slides = document.querySelectorAll('.swiper-slide.testimonials-card');
  const loopEnabled = slides.length > 1;

  const swiper = new Swiper('.swiper-testimonials', {
    loop: loopEnabled,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 32,
    breakpoints: {
      320: { slidesPerView: 1.73, spaceBetween: 12 },
      1200: { slidesPerView: 3, spaceBetween: 32 },
    },
  });

  swiper.slides.forEach((slideEl, index) => {
    slideEl.addEventListener('click', () => {
      if (loopEnabled) {
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    });
  });

  return swiper;
}

let testimonialsSwiper;
window.addEventListener('load', () => {
  testimonialsSwiper = initTestimonialsSwiper();
});

window.addEventListener('resize', () => {
  equalizeCardHeights();
  if (testimonialsSwiper) testimonialsSwiper.update();
});
