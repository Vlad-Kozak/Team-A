(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const backdropRef = document.querySelector('[data-backdrop]');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.add('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.add('is-open');
    backdropRef.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  });
  const menuCloseBtnRef = document.querySelector('[data-menu-button-close]');
  menuCloseBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.remove('is-open');
    backdropRef.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  });
  const menuLinkList = document.querySelectorAll('[data-header-link]');
  menuLinkList.forEach(el => {
    el.addEventListener('click', () => {
      menuBtnRef.classList.remove('is-open');
      mobileMenuRef.classList.remove('is-open');
      backdropRef.classList.add('is-hidden');
      document.body.classList.remove('modal-open');
    });
  });
})();
