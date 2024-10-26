const buttonEl = document.querySelector('#alterna-menu');
const bodyEl = document.querySelector('body');

function alternaMenu() {
    bodyEl.classList.toggle('menu-visivel');
}

buttonEl.addEventListener('click', alternaMenu);