(() => {
  const grandModalRef = document.querySelector('[data-grand-modal]');
  const mobileMenuBtnRef = document.querySelector('[data-mobile-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuOpenBtn = document.querySelector('[data-menu-button]');
  const backdropRef = document.querySelector('[backdrop]');
  let backdropApplicate = 2;
  mobileMenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    mobileMenuOpenBtn.classList.remove('is-open');
    grandModalRef.classList.remove('is-hidden');
    backdropApplicate = backdropRef.style.zIndex;
    // document.body.classList.remove('modal-open');
    backdropRef.style.zIndex = 5;
  });

  const grandModalCloseBtnRef = document.querySelector('[data-grand-modal-button-close]');
  grandModalCloseBtnRef.addEventListener('click', () => {
    grandModalRef.classList.add('is-hidden');
    backdropRef.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    backdropRef.style.zIndex = backdropApplicate;
  });

  const headerBtnRef = document.querySelector('[data-header-button]');
  headerBtnRef.addEventListener('click', () => {
    backdropRef.classList.remove('is-hidden');
    backdropRef.style.zIndex = 5;
    // document.body.classList.add('modal-open');
    grandModalRef.classList.remove('is-hidden');
  });
})();
