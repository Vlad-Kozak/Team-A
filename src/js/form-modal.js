(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-form-modal-open]'),
    closeModalBtn: document.querySelector('[data-form-modal-close]'),
    modal: document.querySelector('[data-form-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
