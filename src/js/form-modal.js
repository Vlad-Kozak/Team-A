(() => {
  const refs = {
    openModalBtn: document.querySelector("[form-modal-open]"),
    closeModalBtn: document.querySelector("[form-modal-close]"),
    modal: document.querySelector("[form-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();