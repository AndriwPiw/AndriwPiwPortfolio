`use strict`

// Este js es "projectGalleryNav.js"
// Es un código que es implementado exclusivamente en el html "gallery.html"
// Sirve para navegar entre los diferentes proyectos, filtrando por tipo según la clase asignada

// ESTRUCTURA DEL JS
// - Asignación de las variables de la galería y navegador del HTML
//  - Creación de los botones, filtros y clases de los proyectos
//  -Filtraje de los proyectos. Según los event listeners seleccionaremos un tipo de proyecto u otro. Todo mediante click en el menú

//PROJECT GALLERY NAVIGATION MENU
// Seleccionamos la project gallery para no tener que estar seleccionando siempre el documento entero
const projectgallery = document.querySelector(`.projectGallery`)
// Seleccionamos el navegador de la galería, en concreto las diferentes categorías de proyectos
const gallerynav = projectgallery.querySelectorAll(`.GalleryNav-li`)

// Por otro lado seleccionamos cada proyecto individual
const project = projectgallery.querySelectorAll(`.projectGallery-project`)

// BOTONES / FILTROS
// Seleccionamos cada filtro, es decir, qué clases de proyectos tenemos y cuáles queremos tener en cuenta en el menú
// Por un lado cada proyecto tiene varias clases asignadas que determinarán qué clase de proyecto son (brandIdentity, Packaging...)
// Y por otro tenemos los ID que se refieren exclusivamente a las categorías del menú de navegación

// Botón para todos los proyectos
const buttonAll = projectgallery.querySelector(`#All`)
// Botón y clase para los proyectos de Branding
const buttonBrandIdentity = projectgallery.querySelector(`#BrandIdentity`)
const projectBrandIdentity = projectgallery.querySelectorAll(`.brandIdentity`)
// Botón y clase para los proyectos de packaging
const buttonPackaging = projectgallery.querySelector(`#Packaging`)
const projectPackaging = projectgallery.querySelectorAll(`.Packaging`)
// Botón y clase para los proyectos de printed media
const buttonPrintMedia = projectgallery.querySelector(`#PrintMedia`)
const projectPrintMedia = projectgallery.querySelectorAll(`.printMedia`)
// Botón y clase para los proyectos de motion graphics
const buttonMotionGraphics = projectgallery.querySelector(`#MotionGraphics`)
const projectMotionGraphics = projectgallery.querySelectorAll(`.motionGraphics`)


// FILTROS

// FILTROS TODOS
// all - Todos los proyectos son mostrados
// Cuando clicamos en el botón con ID "All" todos los proyectos colocamos en ese <li> la clase isActive y quitamos isActive en el resto de botones. Esta clase cambia el formato del <li> para que visualmente sepamos en qué filtro estamos
// Después, a todos los proyectos les añadimos la clase isActive, que hace que éstos se muestren en la galería
buttonAll.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonAll.classList.add(`isActive`)
    project.forEach((_, index) => {

        project.forEach((_, index) => {
            project[index].classList.add(`isActive`)
        })
       
    })
})

// FILTROS INDIVIDUALES
// Fundionan de manera similar en todos, pero cambian las variables
// 
// Cuando clicamos en un botón con el ID de ese tipo de proyecto, colocamos en el <li> seleccionado la clase isActive y la quitamos en el resto. Esto hace que visualmente sepamos qué tipo de proyectos estamos viendo
// Añadimos la clase isActive a los proyectos con la clase seleccionada
// Quitamos isActive a los demás proyectos
// La función de la clase isActive es mostrar los proyectos que queremos ver

// brandidentity - solo se muestran los proyectos de brand identity
buttonBrandIdentity.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonBrandIdentity.classList.add(`isActive`)
    projectBrandIdentity.forEach((_, index) => {

        project.forEach((_, index) => {
            project[index].classList.remove(`isActive`)
        })
        projectBrandIdentity.forEach((_, index) => {
            projectBrandIdentity[index].classList.add(`isActive`)
        })
       
    })
})




// packaging - se enseñan solo los proyectos de packaging
buttonPackaging.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonPackaging.classList.add(`isActive`)
    projectPackaging.forEach((_, index) => {

        project.forEach((_, index) => {
            project[index].classList.remove(`isActive`)
        })
        projectPackaging.forEach((_, index) => {
            projectPackaging[index].classList.add(`isActive`)
        })
       
    })
})

// printmedia - mostramos los proyectos de printed media
buttonPrintMedia.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonPrintMedia.classList.add(`isActive`)
    projectPrintMedia.forEach((_, index) => {
        project.forEach((_, index) => {
            project[index].classList.remove(`isActive`)
        })
        projectPrintMedia.forEach((_, index) => {
            projectPrintMedia[index].classList.add(`isActive`)
        })
       
    })
})

// motiongraphics - aparecen en la galería solo los proyectos que sean de motion graphics
buttonMotionGraphics.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonMotionGraphics.classList.add(`isActive`)
    projectMotionGraphics.forEach((_, index) => {

        project.forEach((_, index) => {
            project[index].classList.remove(`isActive`)
        })
        projectMotionGraphics.forEach((_, index) => {
            projectMotionGraphics[index].classList.add(`isActive`)
        })

    })
})
