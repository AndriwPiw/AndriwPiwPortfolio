`use strict`


const cardViewer = document.querySelector(`.cardViewer`)
const cardViewerImgFront = cardViewer.querySelector('.cardViewer-img--front')
const cardViewerImgBack = cardViewer.querySelector('.cardViewer-img--back')
let projectImgs = document.querySelectorAll(`.Project-img`)

projectImgs.forEach((img) => {

    img.addEventListener(`click`, () => {
        let frontSrc = img.getAttribute(`data-front`)
        cardViewerImgFront.src = frontSrc

        let backSrc = img.getAttribute(`data-back`)
        cardViewerImgBack.src = backSrc


    })


    projectImgs.forEach((_, index) => {
        projectImgs[index].addEventListener(`click`, () => {
            projectImgs.forEach((_, index) => {
                projectImgs[index].classList.remove(`isActive`)
            })

            projectImgs[index].classList.add(`isActive`)
        })
    })

})




