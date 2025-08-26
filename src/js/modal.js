document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#js-cookie-modal');
  const acceptBtn = document.querySelector('#js-accept-cookies');
  const rejectBtn = document.querySelector('#js-reject-cookies');

  if (!localStorage.getItem('cookieChoice')) {
    modal.classList.remove('js-hidden');
  }

  function setChoice(choice) {
    localStorage.setItem('cookieChoice', choice);
    modal.classList.add('js-hidden');
  }

  acceptBtn.addEventListener('click', () => setChoice('accepted'));
  rejectBtn.addEventListener('click', () => setChoice('rejected'));
});
