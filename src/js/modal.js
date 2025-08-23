document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#cookie-modal');
  const acceptBtn = document.querySelector('#accept-cookies');
  const rejectBtn = document.querySelector('#reject-cookies');

  if (!localStorage.getItem('cookieChoice')) {
    modal.classList.remove('hidden');
  }

  function setChoice(choice) {
    localStorage.setItem('cookieChoice', choice);
    modal.classList.add('hidden');
  }

  acceptBtn.addEventListener('click', () => setChoice('accepted'));
  rejectBtn.addEventListener('click', () => setChoice('rejected'));
});
