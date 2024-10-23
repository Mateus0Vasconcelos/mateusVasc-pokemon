let buttonEl = document.querySelector('#alterna-menu');
let bodyEl = document.querySelector('body');

function alternaMenu() {
    bodyEl.classList.toggle('menu-visivel');
}

buttonEl.addEventListener('click', alternaMenu);