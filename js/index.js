"use strict"

// Este es el código de Javascript general llamado "index.js"
// En él defino aquel código de Javascript que es relevante para todas las páginas de la web, principalmente en lo respectivo al header

// 
// ESTRUCTURA DEL DOCUMENTO
//  HEADER
// - Definición de las variables del logo principal y header
// - Código de interacción con el logo principal y header
// 

//HEADER
// Seleccionamos el header del documento
const header = document.querySelector(`.Main-header`)
// Seleccionamos el logo del documento
const homeLogo = document.querySelectorAll(`.Main-logo`)
// Uno de los logos, el de fuera del header tiene una clase especial que hace que ciertos efectos se activen cuando es pulsado
const blink = document.querySelector(`.eyeBlink`)
// Seleccionamos las tabs del header que nos permiten navegar a los diferentes lugares de la web
const tabs = header.querySelector(`.Tabs`)

// Cada vez que hacemos click en el logo
homeLogo.forEach((_, index) => {
    homeLogo[index].addEventListener(`click`, () => {
        console.log(`Logo clicked`)

        // Si el ojo esta notActive, su opacidad es 0, y si está isActive, su opacidad es 1
        blink.classList.toggle(`notActive`)
        blink.classList.toggle(`isActive`)

        // El header aparece siempre fuera de la página al inicio
        // Al ser pulsado el logo, se activa o desactiva la clase isActive que hace que se desplace, mostrando su contenido
        header.classList.toggle(`isActive`)
        // Cuando están activas, en formato móvil aparecen en bloque arriba
        tabs.classList.toggle(`isActive`)

    })

})


