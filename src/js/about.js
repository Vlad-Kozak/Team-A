(() => {
    const refs = {
      openAboutBtn: document.querySelector("[data-modal-open]"),
      closeAboutBtn: document.querySelector("[data-modal-close]"),
      about: document.querySelector("[data-modal]"),
    };
  
    refs.openAboutBtn.addEventListener("click", toggleAbout);
    refs.closeAboutBtn.addEventListener("click", toggleAbout);
  
    function toggleAbout() {
      refs.about.classList.toggle("is-hidden");
    }
  })();