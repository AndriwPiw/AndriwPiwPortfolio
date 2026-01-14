"use strict"

//HEADER
const header = document.querySelector(`.Main-header`)
const homeLogo = document.querySelectorAll(`.Main-logo`)
const blink = document.querySelector(`.eyeBlink`)
const tabs = header.querySelector(`.Tabs`)

homeLogo.forEach((_, index) => {
    homeLogo[index].addEventListener(`click`, () => {
        console.log(`is clicked`)

        blink.classList.toggle(`notActive`)
        blink.classList.toggle(`isActive`)

        header.classList.toggle(`isActive`)
        tabs.classList.toggle(`isActive`)
    })

})

//PROJECT GALLERY
const projectgallery = document.querySelector(`.projectGallery`)
const gallerynav = projectgallery.querySelectorAll(`.GalleryNav-li`)

const project = projectgallery.querySelectorAll(`.projectGallery-project`)

const buttonAll = projectgallery.querySelector(`#All`)
const buttonBrandIdentity = projectgallery.querySelector(`#BrandIdentity`)
const projectBrandIdentity = projectgallery.querySelectorAll(`.brandIdentity`)

const buttonPackaging = projectgallery.querySelector(`#Packaging`)
const projectPackaging = projectgallery.querySelectorAll(`.Packaging`)

const buttonPrintMedia = projectgallery.querySelector(`#PrintMedia`)
const projectPrintMedia = projectgallery.querySelectorAll(`.printMedia`)

const buttonMotionGraphics = projectgallery.querySelector(`#MotionGraphics`)
const projectMotionGraphics = projectgallery.querySelectorAll(`.motionGraphics`)




// all
buttonAll.addEventListener(`click`, () => {
    gallerynav.forEach((_, index) => {
        gallerynav[index].classList.remove(`isActive`)
    })

    buttonAll.classList.add(`isActive`)
    project.forEach((_, index) => {


        project.forEach((_, index) => {
            project[index].classList.remove(`isActive`)
        })
        project.forEach((_, index) => {
            project[index].classList.add(`isActive`)
        })
       
    })
})


// brandidentity
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




// packaging
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

// printmedia
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

// motiongraphics
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



// // PRE-LOAD
// const preLoad = document.querySelector(`.Pre-load`)
// const loadingButton = preLoad.querySelector(`.Pre-load--click`)

// loadingButton.addEventListener(`click`, ()=>{
//     console.log(`clicando el botón`)
//     preLoad.classList.add(`isClicked`)
// })

