`use strict`

// Definimos las imágenes que irán dentro del carrousel
const carrouselImgs = document.querySelectorAll(`.Carrousel-img`)
// Definimos el número de imágenes
const numImgs = carrouselImgs.length
//Definimos el wrapper del carrousel
const carrouselWrapper = document.querySelector(`.Carrousel-wrapper`)
console.log(carrouselWrapper)

// Definimos los botones del carrousel para ir hacia delante y hacia atrás
const buttonLeft = document.querySelector(`.Carrousel-button--left`)
const buttonRight = document.querySelector(`.Carrousel-button--right`)



// Definimos un contador, la imagen por la que empezará el carrousel
let counter = 0

// Definimos el tamaño del wrapper según la cantidad de imágenes que contenga
carrouselWrapper.style.width= `${100*numImgs}%`
carrouselWrapper.style.gridTemplateColumns = `repeat (${numImgs} , 1fr)`



// Definimos la función moveCarrousel que calculará la translación del wrapper según la cantidad de imágenes y el contador
const moveCarrousel = () =>{
     carrouselWrapper.style.translate = `-${(100 / numImgs) * counter}% `
}


// Definimos un evento para cuando hagamos click en el botón derecho
// El carrousel se moverá a la derecha
buttonRight.addEventListener(`click`, () => {
    console.log(`click`)
    // Aumentamos el contador
    counter++
    console.log(counter)
    // Si el contador es mayor que el número de imágenes, volvemos al principio
    if (counter === numImgs) {
        counter = 0
    }
    // Movemos el carrousel
    moveCarrousel()

   
})

// Definimos un evento para cuando hagamos click en el botón izquierdo
//El carrousel se moverá a la izquierda
buttonLeft.addEventListener(`click`, () => {
    // Restamos al contador
    counter--
    // Si el contador es menor que 0 vamos al final del carrousel
    if (counter < 0) {
        counter = numImgs - 1
    }
    // Movemos el carrousel
    moveCarrousel()

})