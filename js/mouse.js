`use strict`


// MOUSE-CURSOR
// Custom mouse cursor
// Desplaza el elemento cursor personalizado a la posición del ratón
const mouse = document.querySelector(`.Cursor`)
window.addEventListener(`mousemove`, (e) => {
    mouse.style.translate = `${e.clientX}px ${e.clientY}px`
})