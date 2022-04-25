(() => {
  const heroButtonRef = document.querySelector('[hidden-text-toggler]');

  heroButtonRef.addEventListener('click', () => {
    heroButtonRef.classList.toggle('is-open');
  });
})();
