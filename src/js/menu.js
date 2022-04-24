(() => {
   const menuBtnRef = document.querySelector('[data-menu-btn]');
   const mobilMenuRef = document.querySelector('[data-menu]');

   menuBtnRef.addEventListener('click', () => {
      const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);

      mobilMenuRef.classList.toggle('is-open');
   });
})();
