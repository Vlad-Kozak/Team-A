(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn1]');
  const mobilMenuRef = document.querySelector('[data-menu1]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobilMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn2]');
  const mobilMenuRef = document.querySelector('[data-menu2]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobilMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn3]');
  const mobilMenuRef = document.querySelector('[data-menu3]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobilMenuRef.classList.toggle('is-open');
  });
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-item1]');
//   const mobilMenuRef = document.querySelector('[data-item1]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobilMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-item2]');
//   const mobilMenuRef = document.querySelector('[data-item2]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobilMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-item3]');
//   const mobilMenuRef = document.querySelector('[data-item3]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobilMenuRef.classList.toggle('is-open');
//   });
// })();
