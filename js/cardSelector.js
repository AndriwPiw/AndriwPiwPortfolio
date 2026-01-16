`use strict`

// Este código "cardSelector.js" es implementado para aquellos proyectos del portafolio
// que contienen cartas / tarjetas cuyas partes traseras son las mismas en todas

// 
// ESTRUCTURA DEL DOCUMENTO
//  SELECTOR DE CARTAS - 1 LADO
// - Definimos las variables que emplearemos
// - Código de selector del contenido del data-front del HTML, cambiándolo por el de la carta clicada
// - Código que o desactiva la clase isActive, que muestra visualmente qué carta se ha clicado
// 


// SELECTOR DE CARTAS - 1 LADO
// Seleccionamos el cardViewer, donde aparece en grande la carta seleccionada
const cardViewer = document.querySelector(`.cardViewer`)
// Seleccionamos la imagen frontal del cardViewer, la que mostrará la carta clicada
const cardViewerImgFront = cardViewer.querySelector('.cardViewer-img--front')
// Seleccionamos las cartas pequeñas mostradas en la galería. Al clicar en una de ellas en pequeñito, su diseño aparecerá en grande en el cardViewer para poder apreciarse mejor el diseño
let projectImgs = document.querySelectorAll(`.Project-img`)

// Por cada imagen de la galería seleccionamos los datos del data front guardados y los mostramos en el cardViewer
projectImgs.forEach((img) => {

    img.addEventListener(`click`, () => {
        let frontSrc = img.getAttribute(`data-front`)
        cardViewerImgFront.src = frontSrc


    })

    // Por cada imagen clicada de la galería desactivamos la clase isActive en las demás y la activamos en la seleccionada, para mostrar visualmente qué carta hemos clicado
    projectImgs.forEach((_, index) => {
        projectImgs[index].addEventListener(`click`, () => {
            projectImgs.forEach((_, index) => {
                projectImgs[index].classList.remove(`isActive`)
            })

            projectImgs[index].classList.add(`isActive`)
        })
    })

})




