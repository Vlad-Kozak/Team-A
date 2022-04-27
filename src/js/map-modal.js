(() => {
  const refs = {
    openModalBtn: document.querySelector("[map-modal-open]"),
    closeModalBtn: document.querySelector("[map-modal-close]"),
    modal: document.querySelector("[map-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();