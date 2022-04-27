(() => {
  const heroButtonRef = document.querySelector('[data-hidden-text-toggler]');

  heroButtonRef.addEventListener('click', () => {
    heroButtonRef.classList.toggle('is-open');
  });
})();
